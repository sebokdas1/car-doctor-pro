import { connectDB } from "@/lib/connectDB";
import { services } from "@/lib/services";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const db = await connectDB();
    const servicesCollection = await db.collection("services");
    await servicesCollection.deleteMany();
    await servicesCollection.insertMany(services);
    return NextResponse.json(
      { message: "Services Seeded Succesfully", status: 200 },
      {}
    );
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: error.message,
    });
  }
};
