import React from "react";
import classes from "./PodcastMobile.module.css";
import { dmSerifText} from "@/app/fonts";
import MobileYoutubeWrap from "./MobileYoutubeWrap";

const PodcastMobile = () => {
  return (
    <>
      <div className={`${classes.container} ${dmSerifText.className}`}>
        <div className={classes.title}>Podcast</div>
        <MobileYoutubeWrap></MobileYoutubeWrap>
        <a
          href="https://www.youtube.com/channel/UCNCB9v0qHGaYScCibhIIHgw"
          className={classes.link}
          target="_blank"
        >
          Subscribe
        </a>
      </div>
    </>
  );
};

export default PodcastMobile;
