import { connecDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";

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
        const db = await connecDB();
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
  ],
  pages: {
    signIn: "/log-in",
  },
});
export { handler as GET, handler as POST };
