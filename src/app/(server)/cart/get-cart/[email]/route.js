import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

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
