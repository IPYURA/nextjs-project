// import type { Metadata } from "next";
import Footer from "@/components/Footer/Footer";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function SignUpLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Footer></Footer>
    </>
      
  );
}
