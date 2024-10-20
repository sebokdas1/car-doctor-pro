import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// booking delete api
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({ message: "bookings deleted", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

// booking update api
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  const updatedDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          ...updatedDoc,
        },
      },
      { upsert: true }
    );
    return NextResponse.json({
      message: "updated the booking",
      status: 200,
      response: resp,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};

// booking get api
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = await db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({
      message: "booking found",
      response: resp,
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};
