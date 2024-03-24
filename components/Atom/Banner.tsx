"use client";

import classes from "./Banner.module.css";
import Image from "next/image";
import atom from "@/public/images/atom.webp";
import { pretendard, dmSerifText } from "@/app/fonts";
import { useEffect } from "react";

const Banner = () => {
  useEffect(() => {
    const vh = window.innerHeight;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });
  return (
    <div className={classes.banner}>
      <Image
        className={classes.background}
        src={atom}
        alt="backgrond"
        fill
        priority
        quality={100}
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.bannerBox}>
          <div className={`${classes.bannerTitle} ${dmSerifText.className}`}>
            Lorem Ipsum
          </div>
          <div className={`${classes.bannerText} ${pretendard.className}`}>
            adipisicing elit doloribus unde minima
            <br />
            perspiciatis repellendus totam
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
