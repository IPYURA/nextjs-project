"use client";

import { dmSerifText } from "@/app/fonts";
import classes from "./YoutubeBox.module.css";
import YouTube, { YouTubeProps } from "react-youtube";

const YoutubeBox = ({ videoId, title }: { videoId: string; title: string }) => {
  const onPlayerStateChange: YouTubeProps["onStateChange"] = (event) => {
    // event.data 값 => 1 재생 중, 2 일시중지, 0 종료
    if (!event.data) {
      const player = event.target;
      player.playVideo();
    }
  };

  const opts: YouTubeProps["opts"] = {
    height: "100%",
    width: "100%",
    playerVars: {
      start: 5,
      end: 10,
      controls: 0,
      rel: 0,
    },
  };

  return (
    <div className={classes.container}>
      <div className={`${classes.title} ${dmSerifText.className}`}>{title}</div>
      <div className={classes.box}>
        <YouTube
          videoId={videoId}
          opts={opts}
          onStateChange={onPlayerStateChange}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        ></YouTube>
      </div>
    </div>
  );
};

export default YoutubeBox;
