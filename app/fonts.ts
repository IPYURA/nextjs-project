import localFont from "next/font/local";
import {
  Inter,
  DM_Serif_Text,
  Aclonica,
  Nanum_Myeongjo,
} from "next/font/google";

// Font files can be colocated inside of `app`
export const pretendard = localFont({
  src: "../public/fonts/PretendardVariable.woff2",
  display: "block",
  weight: "45 920",
  preload: true,
});

export const inter = Inter({
  subsets: ["latin"],
  display: "block",
  preload: true,
});

export const dmSerifText = DM_Serif_Text({
  weight: "400",
  subsets: ["latin"],
  display: "block",
});

export const aclonica = Aclonica({
  weight: "400",
  display: "block",
  preload: true,
  subsets: ["latin"],
});

export const nanumMyeongjo = Nanum_Myeongjo({
  weight: ["400", "700", "800"],
  display: "block",
  preload: true,
  subsets: ["latin"],
});
