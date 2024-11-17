import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function protectAdminRoute(request) {
  const token = cookies(request).get(process.env.DOCTOR_PRO_COOKIE_TOKEN);

  if (!token) {
    return NextResponse.json(
      { message: "Access denied: No token found" },
      { status: 401 }
    );
  }

  if (token.role !== "admin") {
    return NextResponse.json(
      { message: `Access denied: Admins only, current role: ${token.role}` },
      { status: 403 }
    );
  }

  // If authorized, return null to allow the request to proceed
  return null;
}
