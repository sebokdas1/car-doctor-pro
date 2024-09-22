import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
  },
  providers: [
    CredentialsProvider({
      Credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          return null;
        }
        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });
        if (!currentUser) {
          return null;
        }
        const passwordMatch = bcrypt.compareSync(
          password,
          currentUser.password
        );
        if (!passwordMatch) {
          return null;
        }
        return currentUser;
      },
    }),
    GoogleProvider({
      clientId: process.env.DOCTOR_PRO_GOOGLE_CLIENT_ID,
      clientSecret: process.env.DOCTOR_PRO_GOOGLE_CLIENT_SECRET,
    }),
  ],
  pages: {
    signIn: "/log-in",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google" || account.provider === "github") {
        const { name, email, image } = user;
        try {
          const db = await connectDB();
          const userCollection = db.collection("users");
          const userExist = await userCollection.findOne({ email });
          if (!userExist) {
            const res = await userCollection.insertOne(user);
            return user;
          } else {
            return user;
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        return user;
      }
    },
  },
});
export { handler as GET, handler as POST };
