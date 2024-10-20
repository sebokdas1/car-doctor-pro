import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

// Delete cart Item
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = await db.collection("carts");

  try {
    await cartsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    return NextResponse.json({ message: "Item Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
