import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const POST = async (request) => {
  const data = await request.json();
  console.log(request);
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
      pass: process.env.DOCTOR_PRO_NODEMAILER_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.DOCTOR_PRO_NODEMAILER_EMAIL,
      to: data.email,
      subject: data.subject,
      text: data.text,
    });
    return NextResponse.json({ message: "Email sent" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error sending email" },
      { data: data },
      { status: 400 }
    );
  }
};
