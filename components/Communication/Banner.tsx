"use client";

import classes from "./Banner.module.css";
import Image from "next/image";
import imgCommunication from "@/public/images/communication.webp";
import { dmSerifText } from "@/app/fonts";
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
        src={imgCommunication}
        alt="backgrond"
        fill
        sizes={"400vw"}
        quality={100}
        priority
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.box}>
          <div className={`${classes.title} ${dmSerifText.className}`}>
            Color: Black
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
