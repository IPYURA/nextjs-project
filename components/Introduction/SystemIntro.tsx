import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./SystemIntro.module.css";
import background from "@/public/images/system-intro.webp";
import Image from "next/image";
import SvgSystemIntroLine from "@/public/svgs/system-intro-line.svg";
import SvgSystemIntroRhombus from "@/public/svgs/system-intro-rhombus.svg";

const SystemIntro = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <Image
        className={classes.background}
        alt="system-intro"
        src={background}
        fill
        quality={100}
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.svgSystemIntroLine}>
          <SvgSystemIntroLine
            style={{ width: "100%", height: "100%" }}
          ></SvgSystemIntroLine>
        </div>
        <div className={classes.text}>그렇게 탄생했습니다</div>
        <div className={classes.container}>
          <div className={classes.svgSystemIntroLine}>
            <SvgSystemIntroLine
              style={{ width: "100%", height: "100%" }}
            ></SvgSystemIntroLine>
          </div>
          <div className={classes.svgSystemIntroRhombus}>
            <SvgSystemIntroRhombus
              style={{ width: "100%", height: "100%" }}
            ></SvgSystemIntroRhombus>
          </div>
          <div className={`${classes.final} ${dmSerifText.className}`}>
            &ldquo;CDG System&rdquo;
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemIntro;
