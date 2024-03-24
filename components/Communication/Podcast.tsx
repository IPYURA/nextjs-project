"use client";

import { useEffect, useState, useTransition } from "react";
import Title from "../UI/Title";
import classes from "./Podcast.module.css";
import YoutubeBox from "./YoutubeBox";
import getYoutubeVideoId from "@/actions/get-youtube-video-id";
import Spinner from "../UI/Spinner";
import { dmSerifText } from "@/app/fonts";

interface YoutubeVideoIds {
  recentVideoId: string | null;
  popularVideoId: string | null;
}

const Podcast = () => {
  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<YoutubeVideoIds | null>(null);

  useEffect(() => {
    startTransition(async () => {
      const res = await getYoutubeVideoId();
      setData(res);
    });
  }, []);

  return (
    <div className={classes.container}>
      <Title>Videos</Title>
      <div className={classes.box}>
        {!data || isPending ? (
          <>
            <Spinner width={"5rem"} height={"5rem"}></Spinner>
          </>
        ) : (
          <>
            <YoutubeBox title="Recommend" videoId="g9VgtRyUYZw"></YoutubeBox>
            <YoutubeBox
              title="Hot"
              videoId={data?.popularVideoId!}
            ></YoutubeBox>
            <YoutubeBox
              title="Latest"
              videoId={data?.recentVideoId!}
            ></YoutubeBox>
          </>
        )}
      </div>
      <a
        href="https://www.youtube.com/"
        className={`${classes.link} ${dmSerifText.className}`}
      >
        Subscribe
      </a>
    </div>
  );
};

export default Podcast;
