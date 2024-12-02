import { connectDB } from "@/lib/connectDB";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const data = await request.json();
  const email = data?.email;
  if (!email) {
    return NextResponse.json({ message: "Email is required" }, { status: 400 });
  }

  const db = await connectDB();
  const user = await db.collection("users").findOne({ email });
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const token = jwt.sign({ email }, process.env.DOCTOR_PRO_AUTH_SECRET, {
    expiresIn: "1h",
  });

  // Send reset link to user's email
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
      pass: process.env.DOCTOR_PRO_NODEMAILER_PASSWORD,
    },
  });

  const resetLink = `${process.env.NEXT_PUBLIC_DOCTOR_PRO_PRODUCTION_URL}/reset-password?token=${token}`;

  const mailOptions = {
    from: {
      name: "Car Doctor Pro",
      address: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
    },
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
