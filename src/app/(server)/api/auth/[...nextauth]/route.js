// import { connectDB } from "@/lib/connectDB";
// import NextAuth from "next-auth/next";
// import bcrypt from "bcrypt";
// import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";

// const handler = NextAuth({
//   secret: process.env.DOCTOR_PRO_AUTH_SECRET,
//   session: {
//     strategy: "jwt",
//     maxAge: 30 * 24 * 60 * 60, // 30 days
//   },
//   providers: [
//     CredentialsProvider({
//       credentials: {
//         email: { label: "Email", type: "text" },
//         password: { label: "Password", type: "password" },
//       },
//       async authorize(credentials) {
//         const { email, password } = credentials;
//         if (!email || !password) {
//           throw new Error("Email and password are required");
//         }

//         const db = await connectDB();
//         const currentUser = await db.collection("users").findOne({ email });

//         if (!currentUser) {
//           throw new Error("User not found");
//         }

//         const passwordMatch = await bcrypt.compare(
//           password,
//           currentUser.password
//         );
//         if (!passwordMatch) {
//           throw new Error("Incorrect password");
//         }

//         return currentUser;
//       },
//     }),
//     GoogleProvider({
//       clientId: process.env.DOCTOR_PRO_GOOGLE_CLIENT_ID,
//       clientSecret: process.env.DOCTOR_PRO_GOOGLE_CLIENT_SECRET,
//     }),
//   ],
//   pages: {
//     signIn: "/log-in",
//   },
//   callbacks: {
//     async signIn({ user, account }) {
//       if (account.provider === "google") {
//         const { name, email, image } = user;
//         try {
//           const db = await connectDB();
//           const userCollection = await db.collection("users");
//           const userExist = await userCollection.findOne({ email });
//           if (!userExist) {
//             const res = await userCollection.insertOne({
//               name,
//               email,
//               image,
//               provider: account.provider,
//             });
//             if (!res.insertedId) {
//               throw new Error("Failed to insert user into database");
//             }
//           }
//           return true;
//         } catch (error) {
//           console.log("Sign-in error:", error);
//           return false;
//         }
//       }
//       return true;
//     },
//     async jwt({ token, user, account }) {
//       if (account && user) {
//         token.id = await user._id?.toString();
//         token.email = user.email;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       session.user.id = await token.id;
//       session.user.email = token.email;
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

import { connectDB } from "@/lib/connectDB";
import NextAuth from "next-auth/next";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  secret: process.env.DOCTOR_PRO_AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials;
        if (!email || !password) {
          throw new Error("Email and password are required");
        }

        const db = await connectDB();
        const currentUser = await db.collection("users").findOne({ email });

        if (!currentUser) {
          throw new Error("User not found");
        }

        const passwordMatch = await bcrypt.compare(
          password,
          currentUser.password
        );
        if (!passwordMatch) {
          throw new Error("Incorrect password");
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
      if (account.provider === "google") {
        const { name, email, image } = user;
        try {
          const db = await connectDB();
          const userCollection = await db.collection("users");
          const userExist = await userCollection.findOne({ email });
          if (!userExist) {
            const res = await userCollection.insertOne({
              name,
              email,
              image,
              role: "user", // Default role for new Google sign-ins
              provider: account.provider,
            });
            if (!res.insertedId) {
              throw new Error("Failed to insert user into database");
            }
          }
          return true;
        } catch (error) {
          console.log("Sign-in error:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.id = await user._id?.toString();
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = await token.id;
      session.user.email = token.email;
      session.user.role = token.role;
      return session;
    },
  },
});

export { handler as GET, handler as POST };
