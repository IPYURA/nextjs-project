import Title from "../UI/Title";
import classes from "./Insight.module.css";
import LinkBox from "./LinkBox";
import imageA from "@/public/images/link-box-atomic.webp";
import imageBook from "@/public/images/link-box-book.webp";
import imageAcademy from "@/public/images/link-box-academy.webp";

const Insight = () => {
  return (
    <div className={classes.container}>
      <Title>Flowers</Title>
      <div className={classes.box}>
        <LinkBox title="Dish" content="Decoration" image={imageA}></LinkBox>
        <LinkBox title="Heart" content="Blooming" image={imageBook}></LinkBox>
        <LinkBox
          title="Rainbow"
          content="Seven Colors"
          image={imageAcademy}
        ></LinkBox>
      </div>
    </div>
  );
};

export default Insight;
