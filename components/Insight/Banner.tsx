import classes from "./Banner.module.css";
import Image from "next/image";
import insight from "@/public/images/insight.webp";
import { dmSerifText } from "@/app/fonts";

const Banner = () => {
  return (
    <div className={classes.banner}>
      <Image
        className={classes.background}
        src={insight}
        alt="background"
        fill
        quality={100}
        sizes="400vw"
        priority
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.bannerBox}>
          <div className={`${classes.bannerTitle} ${dmSerifText.className}`}>
            Rainbow
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
