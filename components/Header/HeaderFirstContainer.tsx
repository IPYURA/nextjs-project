import classes from "./HeaderFirstContainer.module.css";
import Youtube from "@/public/svgs/youtube.svg";
import Instagram from "@/public/svgs/instagram.svg";
import Facebook from "@/public/svgs/facebook.svg";
import X from "@/public/svgs/X.svg";
import Threads from "@/public/svgs/threads.svg";
import NaverBlog from "@/public/svgs/naver_blog.svg";
import Tistory from "@/public/svgs/tistory.svg";
import Telegram from "@/public/svgs/telegram.svg";
import { pretendard } from "@/app/fonts";
import Link from "next/link";
import { getServerAuthSession } from "@/libs/auth";
import Donate from "./Donate";
import Contact from "./Contact";
import Account from "./Account";

const HeaderFirstContainer = async () => {
  return (
    <div className={`${classes.rowBox} ${pretendard.className}`}>
      <div className={classes.textBox}>
        <Contact />
        <Donate />
        <div className={classes.logoBox}>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Youtube style={{ width: "100%", height: "100%" }}></Youtube>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Instagram style={{ width: "100%", height: "100%" }}></Instagram>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Facebook style={{ width: "100%", height: "100%" }}></Facebook>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <X style={{ width: "100%", height: "100%" }}></X>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Threads style={{ width: "100%", height: "100%" }}></Threads>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Telegram style={{ width: "100%", height: "100%" }}></Telegram>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <NaverBlog style={{ width: "100%", height: "100%" }}></NaverBlog>
          </a>
          <a href="/" target="_blank" className={classes.svgBox}>
            <Tistory style={{ width: "100%", height: "100%" }}></Tistory>
          </a>
        </div>
      </div>
      <Account></Account>
    </div>
  );
};

export default HeaderFirstContainer;
