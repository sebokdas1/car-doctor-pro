import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newBooking = await request.json();

  try {
    const db = await connectDB();
    const bookingsCollection = await db.collection("bookings");
    await bookingsCollection.insertOne(newBooking);
    return NextResponse.json({ message: "Booked Successfully", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went Wrong",
      error: error.message,
      status: 400,
    });
  }
};
