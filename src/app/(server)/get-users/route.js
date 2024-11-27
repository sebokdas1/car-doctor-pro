import { protectAdminRoute } from "@/lib/authUtils";
import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  const protectionResponse = await protectAdminRoute(request);
  if (protectionResponse) return protectionResponse;

  try {
    const db = await connectDB();
    const users = await db.collection("users").find({}).toArray();

    return NextResponse.json(
      { message: "Users retrieved successfully", users },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error: error.message },
      { status: 500 }
    );
  }
};
