import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const newCart = await request.json();
  const db = await connectDB();
  const cartsCollection = db.collection("carts");

  try {
    const res = await cartsCollection.insertOne({
      ...newCart,
      _id: new ObjectId(),
    });
    return NextResponse.json(
      { message: "Added to Cart Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went Wrong" },
      { status: 400 }
    );
  }
};
