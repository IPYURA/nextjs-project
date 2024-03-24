"use client";

import classes from "./Banner.module.css";
import Image from "next/image";
import home from "@/public/images/home.webp";
import { dmSerifText, nanumMyeongjo, pretendard } from "@/app/fonts";
import Link from "next/link";
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
        src={home}
        alt="background"
        fill
        priority
        sizes={"400vw"}
        quality={100}
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.bannerBox}>
          <div className={`${classes.bannerTitle} ${nanumMyeongjo.className}`}>
            “Unique Colors”
          </div>
          <div className={`${classes.bannerContent} ${pretendard.className}`}>
            Color in Design : <br className={classes.mobileBr} />
            color schemes,
            <br className={classes.notMobileBr} />
            combinations
          </div>
          <Link
            href="/insight"
            className={`${classes.link} ${dmSerifText.className}`}
          >
            See Insights
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
