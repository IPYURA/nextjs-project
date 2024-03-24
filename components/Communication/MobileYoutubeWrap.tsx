"use client";

import React, { useState, useEffect, useTransition } from "react";
import classes from "./MobileYoutubeWrap.module.css";
import { pretendard } from "@/app/fonts";
import getYoutubeVideoId from "@/actions/get-youtube-video-id";
import Spinner from "../UI/Spinner";
import YouTube, { YouTubeProps } from "react-youtube";

interface YoutubeVideoIds {
  recentVideoId: string | null;
  popularVideoId: string | null;
}

const MobileYoutubeWrap = () => {
  const [menu, setMenu] = useState<number>(0);

  const [isPending, startTransition] = useTransition();
  const [data, setData] = useState<YoutubeVideoIds | null>(null);

  //   useEffect(() => {
  //     startTransition(async () => {
  //       const res = await getYoutubeVideoId();
  //       setData(res);
  //     });
  //   }, []);

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
    <div className={`${classes.container} ${pretendard.className}`}>
      <div className={classes.buttonWrap}>
        <button
          onClick={() => setMenu(0)}
          className={
            menu === 0 ? `${classes.button} ${classes.active}` : classes.button
          }
        >
          추천
        </button>
        <button
          onClick={() => setMenu(1)}
          className={
            menu === 1 ? `${classes.button} ${classes.active}` : classes.button
          }
        >
          인기
        </button>
        <button
          onClick={() => setMenu(2)}
          className={
            menu === 2 ? `${classes.button} ${classes.active}` : classes.button
          }
        >
          최신
        </button>
      </div>
      <div className={classes.youtubeBox}>
        {/* {!data || isPending ? (
          <div className={classes.spinnerWrap}>
            <Spinner width={"5rem"} height={"5rem"}></Spinner>
          </div>
        ) : (
          <>
            {menu === 0 ? (
              <YouTube
                videoId={data?.popularVideoId!}
                opts={opts}
                onStateChange={onPlayerStateChange}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></YouTube>
            ) : menu === 1 ? (
              <YouTube
                videoId={data?.popularVideoId!}
                opts={opts}
                onStateChange={onPlayerStateChange}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></YouTube>
            ) : (
              <YouTube
                videoId={data?.popularVideoId!}
                opts={opts}
                onStateChange={onPlayerStateChange}
                style={{
                  width: "100%",
                  height: "100%",
                }}
              ></YouTube>
            )}
          </>
        )} */}

        <>
          {menu === 0 ? (
            <YouTube
              videoId={data?.popularVideoId!}
              opts={opts}
              onStateChange={onPlayerStateChange}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></YouTube>
          ) : menu === 1 ? (
            <YouTube
              videoId={data?.popularVideoId!}
              opts={opts}
              onStateChange={onPlayerStateChange}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></YouTube>
          ) : (
            <YouTube
              videoId={data?.popularVideoId!}
              opts={opts}
              onStateChange={onPlayerStateChange}
              style={{
                width: "100%",
                height: "100%",
              }}
            ></YouTube>
          )}
        </>
      </div>
    </div>
  );
};

export default MobileYoutubeWrap;
