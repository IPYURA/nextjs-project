import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  // console.log("middleware token" + token);

  // 비회원
  if (!token) {
    if (pathname.startsWith("/profile") || pathname.startsWith("/payment")) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  } // normal 회원
  else if (token.userType === "normal") {
    if (pathname.startsWith("/login") || pathname.startsWith("/signup"))
      return NextResponse.redirect(new URL("/", req.url));
  } // premium 회원
  else if (token.userType === "premium") {
    if (pathname.startsWith("/login") || pathname.startsWith("/signup"))
      return NextResponse.redirect(new URL("/", req.url));
    else if (pathname.startsWith("/payment/billing"))
      return NextResponse.redirect(new URL("/profile", req.url));
  } else {
    throw new Error("middleware token Error!!");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login/:path*",
    "/signup/:path*",
    "/profile/:path*",
    "/payment/:path*",
  ],
};
