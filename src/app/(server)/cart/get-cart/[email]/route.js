import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

//Get cart items
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = await db.collection("carts");
  try {
    const carts = await cartsCollection.find({ email: params.email }).toArray();
    return NextResponse.json(carts, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
      status: 500,
    });
  }
};

//Delete cart items
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = await db.collection("carts");

  try {
    await cartsCollection.deleteMany({ email: params.email });
    return NextResponse.json({ message: "All items Deleted", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
      status: 500,
    });
  }
};
