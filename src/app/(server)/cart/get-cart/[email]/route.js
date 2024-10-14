import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

//Get cart items
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = db.collection("carts");
  try {
    const carts = await cartsCollection.find({ email: params.email }).toArray();
    return NextResponse.json(carts);
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};

//Delete cart items
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = db.collection("carts");

  try {
    const result = await cartsCollection.deleteMany({ email: params.email });

    if (result.deletedCount > 0) {
      return NextResponse.json({
        message: `${result.deletedCount} items deleted`,
      });
    } else {
      return NextResponse.json({
        message: "No items found for the given email",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
