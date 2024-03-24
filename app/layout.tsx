import type { Viewport } from "next";
import type { Metadata } from "next";

import "./globals.css";

// import StyledComponentsRegistry from "@/lib/registry";
import Header from "@/components/Header/Header";

export const metadata: Metadata = {
  title: "CDG Custom",
  description: "CDG Custom",
  appleWebApp: {
    title: "Apple Web App",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "black" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        {children}
        <div id="global-modal"></div>
      </body>
    </html>
  );
}
