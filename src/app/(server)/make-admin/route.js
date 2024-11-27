import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const PUT = async (request) => {
  const protectionResponse = await protectAdminRoute(request);
  if (protectionResponse) return protectionResponse;
  try {
    const { userId } = await request.json();
    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    const db = await connectDB();
    const usersCollection = await db.collection("users");
    const result = await usersCollection.updateOne(
      { _id: new ObjectId(userId) },
      { $set: { role: "admin" } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json(
        { message: "Failed to promote user" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "User promoted to admin successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred", error: error.message },
      { status: 500 }
    );
  }
};
