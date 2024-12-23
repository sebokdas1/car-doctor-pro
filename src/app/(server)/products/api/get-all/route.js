import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const productsCollection = await db.collection("products");
    const products = await productsCollection.find().toArray();
    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "data not found",
      error: error.message,
    });
  }
};
