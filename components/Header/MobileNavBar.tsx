"use client";

import { useEffect } from "react";
import classes from "./MobileNavBar.module.css";
import Close from "@/public/svgs/close-modal.svg";
import NavLink from "./nav-link";
import { pretendard } from "@/app/fonts";
import Contact from "./Contact";
import Donate from "./Donate";
import Youtube from "@/public/svgs/youtube.svg";
import Instagram from "@/public/svgs/instagram.svg";
import Facebook from "@/public/svgs/facebook.svg";
import X from "@/public/svgs/X.svg";
import Threads from "@/public/svgs/threads.svg";
import NaverBlog from "@/public/svgs/naver_blog.svg";
import Tistory from "@/public/svgs/tistory.svg";
import Telegram from "@/public/svgs/telegram.svg";
import { PreventScroll, AllowScroll } from "../ScrollBan/HandleScroll";

const MobileNavBar = ({
  children,
  isOpenNavBar,
  handlerClose,
  handlerClick,
}: {
  children: React.ReactNode;
  isOpenNavBar: boolean;
  handlerClose: () => void;
  handlerClick: () => void;
}) => {
  useEffect(() => {
    if (isOpenNavBar) {
      const prevScrollY = PreventScroll();
      return () => {
        AllowScroll(prevScrollY);
      };
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [isOpenNavBar]);

  return (
    <div
      className={`${classes.main} ${pretendard.className} ${
        isOpenNavBar ? classes.on : ""
      }`}
    >
      <div className={classes.menuBar}>
        <button className={classes.closeButton} onClick={handlerClose}>
          <Close style={{ width: "100%", height: "100%" }}></Close>
        </button>
        <div className={classes.linkBox}>
          <NavLink onClick={handlerClick} href="/atom">
            아톰
          </NavLink>
          <NavLink onClick={handlerClick} href="/insight">
            인사이트
          </NavLink>
          <NavLink onClick={handlerClick} href="/communication">
            커뮤니케이션
          </NavLink>
          <NavLink onClick={handlerClick} href="/consulting">
            컨설팅
          </NavLink>
          <NavLink onClick={handlerClick} href="/introduction">
            소개
          </NavLink>
        </div>
        <div className={classes.popBox}>
          <Contact />
          <Donate />
        </div>
        <div className={classes.logoBox}>
          <a
            href="https://www.youtube.com/channel/UCNCB9v0qHGaYScCibhIIHgw"
            target="_blank"
            className={classes.svgBox}
          >
            <Youtube style={{ width: "100%", height: "100%" }}></Youtube>
          </a>
          <a
            href="https://www.instagram.com/eopinsight"
            target="_blank"
            className={classes.svgBox}
          >
            <Instagram style={{ width: "100%", height: "100%" }}></Instagram>
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61553620064631"
            target="_blank"
            className={classes.svgBox}
          >
            <Facebook style={{ width: "100%", height: "100%" }}></Facebook>
          </a>
          <a
            href="https://twitter.com/eopinsight"
            target="_blank"
            className={classes.svgBox}
          >
            <X style={{ width: "100%", height: "100%" }}></X>
          </a>
          <a
            href="https://www.threads.net/@eopinsight"
            target="_blank"
            className={classes.svgBox}
          >
            <Threads style={{ width: "100%", height: "100%" }}></Threads>
          </a>
          <a
            href="https://t.me/eop_insight"
            target="_blank"
            className={classes.svgBox}
          >
            <Telegram style={{ width: "100%", height: "100%" }}></Telegram>
          </a>
          <a
            href="https://blog.naver.com/eopinsight"
            target="_blank"
            className={classes.svgBox}
          >
            <NaverBlog style={{ width: "100%", height: "100%" }}></NaverBlog>
          </a>
          <a
            href="https://eopinsight.tistory.com/"
            target="_blank"
            className={classes.svgBox}
          >
            <Tistory style={{ width: "100%", height: "100%" }}></Tistory>
          </a>
        </div>
        {children}
      </div>
      <div className={classes.background}></div>
    </div>
  );
};

export default MobileNavBar;
