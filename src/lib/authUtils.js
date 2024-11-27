import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function protectAdminRoute(request) {
  const token = await getToken({
    req: request,
    secret: process.env.DOCTOR_PRO_AUTH_SECRET,
  });
  if (!token) {
    return NextResponse.json({ message: "no token found" });
  }
  if (!token || token.role !== "admin") {
    return NextResponse.json(
      {
        message:
          "Access denied: Admins only" + `Yout current role: ${token.role}`,
      },
      { token: token.role },
      { status: 403 }
    );
  }

  return null;
}
