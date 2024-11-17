import { connectDB } from "@/lib/connectDB";
import { getToken } from "next-auth/jwt";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

const AUTH_SECRET = process.env.DOCTOR_PRO_AUTH_SECRET;

export const PUT = async (request) => {
  try {
    // Verify admin role
    const token = await getToken({ req: request, secret: AUTH_SECRET });
    // if (!token || token.role !== "admin") {
    //   return NextResponse.json(
    //     { message: "Access denied: Admins only" },
    //     { status: 403 }
    //   );
    // }

    const { userId } = await request.json();
    if (!userId) {
      return NextResponse.json(
        { message: "User ID is required" },
        { status: 400 }
      );
    }

    // Promote the user to admin in the database
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
