import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const productsCollection = await db.collection("products");
    await productsCollection.deleteMany();
    await productsCollection.insertMany(products);
    return NextResponse.json({
      message: "products Seeded Succesfully",
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};
