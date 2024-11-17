import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newUser = await request.json();

  try {
    const db = await connectDB();
    const userCollection = await db.collection("users");

    const exist = await userCollection.findOne({ email: newUser.email });

    if (exist) {
      return NextResponse.json({
        error: "User already registered",
        status: 409,
      });
    }

    const hashedPassword = await bcrypt.hash(newUser.password, 14);

    await userCollection.insertOne({
      ...newUser,
      password: hashedPassword,
      role: "user",
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: "Successfully registered",
      status: 200,
    });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({
      error: "An error occurred during registration",
      status: 500,
    });
  }
};
