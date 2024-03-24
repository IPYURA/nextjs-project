"use client";

import classes from "./page.module.css";
import { FullPageScroll } from "@/components/FullPageScroll/FullPageScroll";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Home/Banner";
import Intro from "@/components/Home/Intro";
import Target from "@/components/Home/Target";
import Mission from "@/components/Home/Mission";
import Insight from "@/components/Home/Insight";
import Communication from "@/components/Home/Communication";
import Consulting from "@/components/Home/Consulting";
import Final from "@/components/Home/Final";
import { useCallback, useEffect, useState } from "react";
import FloatingArrow from "@/public/svgs/floating-arrow.svg";
import { pretendard } from "./fonts";
import Link from "next/link";
import NotMobile from "@/components/MediaQuery/NotMobile";
import Mobile from "@/components/MediaQuery/Mobile";
import { useScrollAnimation } from "@/hooks/useScrollObserver";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [floatingIcon, setFloatingIcon] = useState<boolean>(true);
  const [isHidden, setIsHidden] = useState<boolean>(false);

  const setHidden = (value: boolean) => {
    setIsHidden(value);
  };
  useEffect(() => {
    if (currentSlide > 6 && floatingIcon) {
      setFloatingIcon((prev) => !prev);
    } else if (currentSlide < 7 && !floatingIcon) {
      setFloatingIcon((prev) => !prev);
    }
  }, [currentSlide, floatingIcon]);

  return (
    <>
      <main className={classes.main}>
        <Link
          href="./introduction"
          className={
            !(!floatingIcon || isHidden) ? classes.floatingIcon : classes.none
          }
        >
          <div className={`${classes.text} ${pretendard.className}`}>
            This <span>is Button</span>
          </div>
          <div className={classes.svgBox}>
            <FloatingArrow width={"100%"} height={"100%"}></FloatingArrow>
          </div>
        </Link>
        <NotMobile>
          <FullPageScroll onCurrent={setCurrentSlide}>
            <div className={` ${classes.section}`}>
              <Banner></Banner>
            </div>
            <div className={` ${classes.section}`}>
              <Intro></Intro>
            </div>
            <div className={` ${classes.section}`}>
              <Mission></Mission>
            </div>
            <div className={` ${classes.section}`}>
              <Target></Target>
            </div>
            <div className={` ${classes.section}`}>
              <Insight></Insight>
            </div>
            <div className={` ${classes.section}`}>
              <Communication></Communication>
            </div>
            <div className={` ${classes.section}`}>
              <Consulting></Consulting>
            </div>
            <div className={` ${classes.section}`}>
              <Final></Final>
            </div>
            <Footer></Footer>
          </FullPageScroll>
        </NotMobile>
        <Mobile>
          <Banner></Banner>
          <Intro></Intro>
          <Mission></Mission>
          <Target></Target>
          <Insight></Insight>
          <Communication></Communication>
          <Consulting></Consulting>
          <Final setHidden={setHidden}></Final>
          <Footer></Footer>
        </Mobile>
      </main>
    </>
  );
}
