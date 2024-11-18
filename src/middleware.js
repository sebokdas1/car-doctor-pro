import { getToken } from "next-auth/jwt";
// import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const middleware = async (request) => {
  const token = await getToken({
    req: request,
    secret: process.env.DOCTOR_PRO_AUTH_SECRET,
  });
  // const token = cookies(request).get(process.env.DOCTOR_PRO_COOKIE_TOKEN);
  const pathname = await request?.nextUrl.pathname;
  if (pathname.includes("api")) {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(
      new URL(`/log-in?redirect=${pathname}`, request.url)
    );
  }

  // if (pathname.startsWith("/my-cart") && token.role !== "user") {
  //   return NextResponse.json(
  //     { message: "Access denied: Admins only" },
  //     { status: 403 }
  //   );
  // }

  return NextResponse.next();
};

export const config = {
  matcher: ["/my-bookings/:path*", "/checkout/:path*", "/my-cart/:path*"],
};
