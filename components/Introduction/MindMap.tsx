import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./MindMap.module.css";
import Image from "next/image";
import background from "@/public/images/mind-map.webp";

const MindMap = () => {
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
        <div className={`${classes.text} ${dmSerifText.className}`}>
          © 2024. CDG All rights Reserved
        </div>
      </div>
    </section>
  );
};

export default MindMap;
