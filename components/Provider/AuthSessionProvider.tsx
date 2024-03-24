"use client"
import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

export default function AuthSessionProvider({
  authSession,
  children,
}: {
  authSession: Session | null;
  children: React.ReactNode;
}) {
  return <SessionProvider session={authSession}>{children}</SessionProvider>;
}
