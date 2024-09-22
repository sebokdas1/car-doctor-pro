import { connectDB } from "@/lib/connectDB";

export const POST = async (request) => {
  const booking = request.json();
  const db = await connectDB();
  const bookingCollection = db.collection("bookings");
  try {
    const service = await bookingCollection.insertOne(booking);
    return Response.json({ message: "Service booked successfully" });
  } catch (error) {
    console.log(error);
  }
};
