"use client";

import Image from "next/image";
import classes from "./Banner.module.css";
import { nanumMyeongjo } from "@/app/fonts";
import introduction from "@/public/images/introduction.webp";
import { useEffect } from "react";

export default function Banner() {
  useEffect(() => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  return (
    <div className={classes.banner}>
      <Image
        className={classes.background}
        src={introduction}
        alt="backgrond"
        fill
        priority
      ></Image>
      <div className={classes.overlay}>
        <div className={`${classes.title} ${nanumMyeongjo.className}`}>
          <div>“Title title</div>
          <div>Introduce Page”</div>
        </div>
      </div>
    </div>
  );
}
