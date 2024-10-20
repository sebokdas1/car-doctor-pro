import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  // For production token
  const token = cookies(request).get("__Secure-next-auth.session-token");

  // For development token
  // const token = cookies(request).get("next-auth.session-token");
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
  matcher: ["/my-bookings/:path*", "/checkout/:path*", "/my-cart/:path*"],
};
