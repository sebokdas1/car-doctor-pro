import { connectDB } from "@/lib/connectDB";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const db = await connectDB();
    const servicesCollection = await db.collection("services");
    const service = await servicesCollection.findOne({ _id: params.id });
    return NextResponse.json({ service }, { status: 200 });
  } catch (error) {
    return NextResponse.json({
      message: "data not found",
      error: error.message,
    });
  }
};
