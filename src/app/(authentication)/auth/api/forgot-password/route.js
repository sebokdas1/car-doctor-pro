import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const { email } = await request.json();
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const db = await connectDB();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
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
    from: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
    to: email,
    subject: "Password Reset",
    text: `Click the link to reset your password: ${resetLink}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Password reset link sent to your email." },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error sending email." },
      { status: 500 }
    );
  }
};
