"use client";

import Image from "next/image";
import classes from "./Final.module.css";
import final from "@/public/images/final.webp";
import { dmSerifText, pretendard } from "@/app/fonts";
import Link from "next/link";
import { useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useScrollObserver";
import React from "react";

const Final = ({
  setHidden = (value) => {},
}: {
  setHidden?: (value: boolean) => void;
}) => {
  const { isInViewport, ref } = useScrollAnimation();

  useEffect(() => {
    if (isInViewport) {
      return setHidden(true);
    } else {
      return setHidden(false);
    }
  }, [isInViewport]);

  return (
    <div className={classes.container}>
      <Image
        className={classes.background}
        src={final}
        alt="backgrond"
        fill
        priority
      ></Image>
      <div className={classes.overlay}>
        <div className={classes.box}>
          <div
            className={`${classes.title} ${dmSerifText.className}`}
            ref={ref}
          >
            Dynamic Color
          </div>
          <div className={`${classes.subTitle} ${pretendard.className}`}>
            Interplay of Colors
          </div>
          <div className={classes.linkBox}>
            <Link
              href="/login"
              className={`${classes.login} ${pretendard.className}`}
            >
              로그인
            </Link>
            <Link
              href="/signup"
              className={`${classes.signup} ${pretendard.className}`}
            >
              회원가입
            </Link>
          </div>
          <a className={classes.subscription} target="_blank" href="#">
            {" "}
            Subscription
          </a>
          <div className={`${classes.benefitBox} ${pretendard.className}`}>
            <div className={classes.benefitTitle}>🚀 For Supporters</div>
            <div className={classes.benefitContent}>
              혜택 1&#41; 프리미엄 채널
            </div>
            <div className={classes.benefitContent}>
              혜택 2&#41; 무제한 참가 가능
            </div>
            <div className={classes.benefitContent}>
              혜택 3&#41; Book, Academy, Consulting 특별가 적용
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Final;
