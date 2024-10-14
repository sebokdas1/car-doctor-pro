import { connectDB } from "@/lib/connectDB";
import { ObjectId } from "mongodb";

// Delete cart Item
export const DELETE = async (request, { params }) => {
  const db = await connectDB();
  const cartsCollection = db.collection("carts");

  try {
    const result = await cartsCollection.deleteOne({
      _id: new ObjectId(params.id),
    });

    if (result.deletedCount > 0) {
      return NextResponse.json({
        message: `${result.deletedCount} items deleted`,
      });
    } else {
      return NextResponse.json({
        message: "No items found for the given id",
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: "Something went wrong",
      error: error.message,
    });
  }
};
