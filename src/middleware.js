import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = cookies(request).get(process.env.DOCTOR_PRO_COOKIE_TOKEN);
  const pathname = await request?.nextUrl.pathname;
  if (pathname.includes("api")) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(
      new URL(`/log-in?redirect=${pathname}`, request.url)
    );
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    "/my-bookings/:path*",
    "/admin/api/:path*",
    "/checkout/:path*",
    "/my-cart/:path*",
  ],
};
