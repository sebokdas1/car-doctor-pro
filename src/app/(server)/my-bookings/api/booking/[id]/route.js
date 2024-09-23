import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

// booking delete api
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ message: "bookings deleted", response: resp });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};

// booking update api
export const PATCH = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  const updatedDoc = await request.json();
  try {
    const resp = await bookingsCollection.updateOne(
      {
        _id: new ObjectId(params.id),
      },
      {
        $set: {
          ...updatedDoc,
        },
      },
      { upsert: true }
    );
    return Response.json({ message: "updated the booking", response: resp });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};

// booking get api
export const GET = async (request, { params }) => {
  const db = await connectDB();
  const bookingsCollection = db.collection("bookings");
  try {
    const resp = await bookingsCollection.findOne({
      _id: new ObjectId(params.id),
    });
    return Response.json({ message: "booking found", response: resp });
  } catch (error) {
    return Response.json({ message: "something went wrong" });
  }
};
