import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  const service = await request.json();
  try {
    const db = await connectDB();
    const serviceCollection = await db.collection("services");
    await serviceCollection.insertOne(service);
    return NextResponse.json({ message: "Service Added", status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "Something Went Wrong",
      error: error.message,
      status: 400,
    });
  }
};
