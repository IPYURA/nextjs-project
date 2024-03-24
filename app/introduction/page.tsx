"use client";

import Banner from "@/components/Introduction/Banner";
import classes from "./page.module.css";
import { pretendard } from "../fonts";
import Image from "next/image";
import imgIntroductionIntro from "@/public/images/introduction-intro.webp";
import Intro from "@/components/Introduction/Intro";
import Graph from "@/components/Introduction/Graph";
import Process from "@/components/Introduction/Process";
import DataStructureAnalysis from "@/components/Introduction/DataStructureAnalysis";
import StrategyOptimizingSequence from "@/components/Introduction/StrategyOptimizingSequence";
import SystemIntro from "@/components/Introduction/SystemIntro";
import MindMap from "@/components/Introduction/MindMap";
import Final from "@/components/Introduction/Final";
import FinalIntro from "@/components/Introduction/FinalIntro";
import ScrollDown from "@/components/UI/ScrollDown";
import { useScrollAnimation } from "@/hooks/useScrollObserver";
import { useEffect, useState } from "react";

export default function Introduction() {
  const { ref, isInViewport, isAboveViewport } = useScrollAnimation();
  const [isHidden, setIsHidden] = useState<boolean>(false);

  useEffect(() => {
    if (isInViewport) {
      return setIsHidden(true);
    } else {
      if (isAboveViewport) {
        return setIsHidden(true);
      }
    }

    return setIsHidden(false);
  }, [isAboveViewport, isInViewport]);

  return (
    <>
      <main className={`${classes.main} ${pretendard.className}`}>
        <ScrollDown isHidden={isHidden}></ScrollDown>
        <Banner></Banner>
        <div className={classes.intro}>
          <div className={classes.text}>Lorem ipsum dolor</div>
          <div className={classes.text}>
            sit <span>amet consectetur</span> consequatur assumenda
          </div>
          <div className={classes.text} ref={ref}>
            Cum vero nesciunt expedita delectus aspernatur eum similique, ipsa
            reiciendis
          </div>
        </div>
        <div className={classes.imgBox}>
          <Image
            className={classes.background}
            src={imgIntroductionIntro}
            alt="backgrond"
            fill
            priority
          ></Image>
        </div>
        <Intro></Intro>
        <Graph></Graph>
        <Process></Process>
        <DataStructureAnalysis></DataStructureAnalysis>
        <StrategyOptimizingSequence></StrategyOptimizingSequence>
        {/* <SystemIntro></SystemIntro> */}
        {/* <MindMap></MindMap> */}
        <FinalIntro></FinalIntro>
        <Final></Final>
      </main>
    </>
  );
}
