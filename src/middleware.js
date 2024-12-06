import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = await getToken({
    req: request,
    secret: process.env.DOCTOR_PRO_AUTH_SECRET,
  });
  const pathname = await request?.nextUrl.pathname;
  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(
      new URL(`/log-in?redirect=${pathname}`, request.url)
    );
  }

  if (pathname.startsWith("/admin") && token.role !== "admin") {
    return NextResponse.json(
      { message: "Access denied: Admins only" },
      { status: 403 }
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/my-bookings/:path*",
    "/checkout/:path*",
    "/admin/:path*",
    "/my-cart/:path*",
  ],
};
