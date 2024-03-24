import classes from "./Lecture.module.css";
import Image from "next/image";
import imgLecture from "@/public/images/lecture.webp";
import imgLectureMobile from "@/public/images/lecture-mobile.webp";
import { dmSerifText, pretendard } from "@/app/fonts";
import Link from "next/link";
import NotMobile from "../MediaQuery/NotMobile";
import Mobile from "../MediaQuery/Mobile";

const Lecture = () => {
  return (
    <div className={classes.container}>
      <NotMobile>
        <Image
          className={classes.background}
          src={imgLecture}
          alt="background"
          fill
          priority
        ></Image>
      </NotMobile>
      <Mobile>
        <Image
          className={classes.background}
          src={imgLectureMobile}
          alt="background"
          priority
        ></Image>
      </Mobile>
      <div className={classes.overlay}>
        <div className={classes.box}>
          <div className={`${classes.title} ${dmSerifText.className}`}>
            Lecture
          </div>
          <div className={`${classes.content} ${pretendard.className}`}>
            <div className={classes.blank} />
            Lorem ipsum dolor sit amet consectetur, adipi
               
            <br />
            <br />
            sicing elit. Impedit ad beatae alias, ipsa
            <br />
            <br />
            amet modi laborum illo. Est distinctio, modi nulla a magnam quo
            <br />
            molestias debitis, obcae.
            <br />
            <br />
            insihto vitagori selto mas tinkany
            <br />
            cati, eos dolore deleniti men.
          </div>
          <Link
            href="/insight"
            className={`${classes.link} ${dmSerifText.className}`}
          >
            Invite Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Lecture;
