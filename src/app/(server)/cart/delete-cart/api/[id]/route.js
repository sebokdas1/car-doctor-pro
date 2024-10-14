import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

// cart delete api
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = db.collection("carts");
  try {
    const resp = await cartsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });
    return NextResponse.json({ message: "cart deleted", response: resp });
  } catch (error) {
    return NextResponse.json({ message: "something went wrong" });
  }
};
