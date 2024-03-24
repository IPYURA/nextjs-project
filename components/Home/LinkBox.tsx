import Image, { StaticImageData } from "next/image";
import classes from "./LinkBox.module.css";
import { dmSerifText, pretendard } from "@/app/fonts";
import HomeArrow from "@/public/svgs/home-arrow.svg";

const LinkBox = ({
  title,
  content,
  image,
}: {
  title: string;
  content: string;
  image: StaticImageData;
}) => {
  return (
    <div className={classes.container}>
      <div className={classes.imageBox}>
        <Image className={classes.image} src={image} alt={title} fill></Image>
      </div>
      <div className={classes.box}>
        <div className={`${classes.title} ${dmSerifText.className}`}>
          {title}
        </div>
        <div className={classes.subBox}>
          <div className={`${classes.content} ${pretendard.className}`}>
            {content}
          </div>
          <div className={classes.svgBox}>
            <HomeArrow width={"100%"} height={"100%"}></HomeArrow>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LinkBox;
