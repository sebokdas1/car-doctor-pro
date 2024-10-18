import { connectDB } from "@/lib/connectDB";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { password, token } = req.body;

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const { email } = decoded;

    const db = await connectDB();
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Hash the new password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Update the password in the database
    await db
      .collection("users")
      .updateOne({ email }, { $set: { password: hashedPassword } });

    return res.status(200).json({ message: "Password reset successfully." });
  } catch (error) {
    return res.status(400).json({ message: "Invalid or expired token." });
  }
}
