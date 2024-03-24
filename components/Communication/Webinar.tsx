import classes from "./Webinar.module.css";
import Image from "next/image";
import imgWebinar from "@/public/images/webinar.webp";
import imgWebinarMobile from "@/public/images/webinar-mobile.webp";
import { dmSerifText, pretendard } from "@/app/fonts";
import Link from "next/link";
import NotMobile from "../MediaQuery/NotMobile";
import Mobile from "../MediaQuery/Mobile";

const Webinar = () => {
  return (
    <div className={classes.container}>
      <NotMobile>
        <Image
          className={classes.background}
          src={imgWebinar}
          alt="background"
          fill
          priority
        ></Image>
      </NotMobile>
      <Mobile>
        <Image
          className={classes.background}
          src={imgWebinarMobile}
          alt="background"
          priority
        ></Image>
      </Mobile>
      <div className={classes.overlay}>
        <div className={classes.box}>
          <div className={`${classes.title} ${dmSerifText.className}`}>
            Meet
          </div>
          <div className={`${classes.content} ${pretendard.className}`}>
            <div className={classes.blank} />
            Lorem ipsum dolor sit, amet consectetur adipi.
            <br />
            <br />
            Provident labore ab ut nulla culpa reprehenderit
            <br />
            id magni dolores deserunt modi, fuga doloremque uga eaque.
            <br />
            <br />
            Voluptas, suscipit ratione.
          </div>
          <div className={`${classes.postscript} ${pretendard.className}`}>
            * 매주 월요일 ZOOM을 통해서 진행됩니다.
          </div>
          <Link
            href="/insight"
            className={`${classes.link} ${dmSerifText.className}`}
          >
            Start Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Webinar;
