import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");

    //checking Email at params
    if (!params?.email) {
      return NextResponse.json(
        { message: "Email parameter is missing" },
        { status: 400 }
      );
    }

    const bookings = await bookingsCollection
      .find({ email: params.email })
      .toArray();
    return NextResponse.json({ bookings }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
      status: 500,
    });
  }
};
