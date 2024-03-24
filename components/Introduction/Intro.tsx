import { pretendard } from "@/app/fonts";
import classes from "./Intro.module.css";
import Image from "next/image";
import pictogram from "@/public/images/pictogram.png";

const Intro = () => {
  return (
    <section className={`${classes.container} ${pretendard.className}`}>
      <div className={classes.text}>
        Colors influence our emotions and perceptions.
      </div>
      <div className={classes.text}>
        how each hue holds
        <br />
        Dive into the psychology behi
      </div>
      <div className={classes.text}>
        evoke feelings of joy, calmness, or excitement.
      </div>
      <div className={classes.box}>
        <div className={classes.text}>
          combinations create visual harmony lorem ipsum
        </div>
        <div className={classes.model}>
          <div className={classes.imgBox}>
            <Image
              className={classes.background}
              src={pictogram}
              alt="pictogram"
              fill
              priority
            ></Image>
          </div>
          <div className={classes.themeList}>
            <div className={classes.themeItem}>
              <div className={classes.themeTitle}>Theme 1</div>
              <div className={classes.themeContent}>&ldquo;Content1&rdquo;</div>
            </div>
            <div className={classes.themeItem}>
              <div className={classes.themeTitle}>Theme 2</div>
              <div className={classes.themeContent}>&ldquo;Content2&rdquo;</div>
            </div>
            <div className={classes.themeItem}>
              <div className={classes.themeTitle}>Theme 3</div>
              <div className={classes.themeContent}>&ldquo;Content3&rdquo;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
