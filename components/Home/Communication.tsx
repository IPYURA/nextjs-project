import Title from "../UI/Title";
import classes from "./Communication.module.css";
import LinkBox from "./LinkBox";
import imagePodcast from "@/public/images/link-box-podcast.webp";
import imageWebinar from "@/public/images/link-box-webinar.webp";
import imageLecture from "@/public/images/link-box-lecture.webp";

const Communication = () => {
  return (
    <div className={classes.container}>
      <Title>Roses with Rainbow</Title>
      <div className={classes.box}>
        <LinkBox
          title="Gradation"
          content="Harmony"
          image={imagePodcast}
        ></LinkBox>
        <LinkBox
          title="Bouquet"
          content="Lorem ipsum"
          image={imageWebinar}
        ></LinkBox>
        <LinkBox
          title="At Night"
          content="Blooming"
          image={imageLecture}
        ></LinkBox>
      </div>
    </div>
  );
};

export default Communication;
