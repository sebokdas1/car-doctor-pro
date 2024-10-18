import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const db = await connectDB();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Generate a password reset token (using JWT for simplicity)
  const token = jwt.sign({ email }, process.env.DOCTOR_PRO_AUTH_SECRET, {
    expiresIn: "1h",
  });

  // Save the token in the database (optional)
  await db
    .collection("users")
    .updateOne({ email }, { $set: { resetToken: token } });

  // Send reset link to user's email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
      pass: process.env.DOCTOR_PRO_NODEMAILER_PASSWORD,
    },
  });

  const resetLink = `${process.env.DOCTOR_PRO_BASE_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "Password Reset",
    text: `Click the link to reset your password: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res
      .status(200)
      .json({ message: "Password reset link sent to your email." });
  } catch (error) {
    return res.status(500).json({ message: "Error sending email." });
  }
}
