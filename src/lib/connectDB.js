import { MongoClient, ServerApiVersion } from "mongodb";

let db;
export const connecDB = async () => {
  if (db) return db;
  try {
    const uri = process.env.DOCTOR_PRO_MONGODB_URI;
    const client = new MongoClient(uri, {
      serverApi: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    });
    db = client.db("car-doctor");
    return db;
  } catch (error) {
    console.log(error);
  }
};
