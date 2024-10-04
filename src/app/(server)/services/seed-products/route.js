import { connectDB } from "@/lib/connectDB";
import { products } from "@/lib/products";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const productsCollection = db.collection("products");
  try {
    await productsCollection.deleteMany();
    const resp = await productsCollection.insertMany(products);
    return NextResponse.json({ message: "products Seeded Succesfully" });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
