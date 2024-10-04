import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const productsCollection = db.collection("products");
  try {
    const products = await productsCollection.find().toArray();
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ message: "data not found" });
  }
};
