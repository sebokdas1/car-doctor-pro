import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const data = await request.json();

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
        pass: process.env.DOCTOR_PRO_NODEMAILER_PASSWORD,
      },
    });
    await transporter.sendMail({
      from: {
        name: "Car Doctor Pro",
        address: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
      },
      to: "sebok.das66@gmail.com",
      subject: data.subject,
      text: data.text,
    });
    return NextResponse.json({ message: "Message Sent", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Error sending email",
      error: error.message,
      status: 400,
    });
  }
};
