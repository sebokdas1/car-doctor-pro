import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async () => {
  const db = await connectDB();
  const servicesCollection = await db.collection("services");
  try {
    const services = await servicesCollection.find().toArray();
    return NextResponse.json({ services }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "data not found" },
      { error: error.message }
    );
  }
};
