"use client";

import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./Book.module.css";
import Title from "../UI/Title";
import BookImg from "@/public/images/book.webp";
import BookInsight from "@/public/images/bookInsight.webp";
import BookPremium from "@/public/images/bookPrimium.webp";
import Logo from "@/public/svgs/myLogo.svg";
import Arrows from "@/public/svgs/arrows.svg";
import Image from "next/image";
import { useState } from "react";

const Book = () => {
  const [isOpenInsight, setIsOpenInsight] = useState<boolean>(false);
  const [isOpenPremium, setIsOpenPremium] = useState<boolean>(false);

  const handleClickInsight = () => {
    setIsOpenInsight((prev) => !prev);
  };

  const handleClickPremium = () => {
    setIsOpenPremium((prev) => !prev);
  };

  return (
    <div className={classes.container}>
      <Title>Subject</Title>
      <div className={classes.bookList}>
        <div className={`${classes.book} ${classes.initBook}`}>
          <div className={classes.bookContainer}>
            <div className={classes.bookSubContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  className={classes.bookImage}
                  src={BookImg}
                  alt="image"
                  fill
                ></Image>
              </div>
              <div className={classes.bookTextBox}>
                <div
                  className={`${classes.bookTitle} ${dmSerifText.className}`}
                >
                  Colors
                </div>
                <div
                  className={`${classes.bookContent} ${pretendard.className}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Praesentium
                  <br />
                  Est, laborum! Cupiditate, consequatur nemo laboriosam
                  <br />
                  dolore atque porro cum saepe sed repellendus nulla
                </div>
              </div>
            </div>
            <div className={`${classes.button} ${classes.initButton}`}>
              <div className={classes.blank}></div>
            </div>
          </div>
          <div className={`${classes.bookDetailContainer} ${classes.close}`}>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes.book} ${
            isOpenInsight ? classes.clickedBook : classes.initBook
          }`}
          onClick={handleClickInsight}
        >
          <div className={classes.bookContainer}>
            <div className={classes.bookSubContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  className={classes.bookImage}
                  src={BookInsight}
                  alt="image"
                  fill
                ></Image>
              </div>
              <div className={classes.bookTextBox}>
                <div
                  className={`${classes.bookTitle} ${dmSerifText.className}`}
                >
                  Contrast
                </div>
                <div
                  className={`${classes.bookContent} ${pretendard.className}`}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Rerum, laboriosam?
                  <br /> Repellat quam id saepe autem magnam , nostrum facere!
                  Suscipit
                </div>
              </div>
            </div>
            <div
              className={`${classes.button} ${
                isOpenInsight ? classes.clickedButton : classes.initButton
              }`}
            >
              <div className={classes.arrowsWrap}>
                <Arrows style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </div>
          <div
            className={`${classes.bookDetailContainer} ${
              isOpenInsight ? "" : classes.close
            }`}
          >
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${classes.book} ${
            isOpenPremium ? classes.clickedBook : classes.initBook
          }`}
          onClick={handleClickPremium}
        >
          <div className={classes.bookContainer}>
            <div className={classes.bookSubContainer}>
              <div className={classes.ImageContainer}>
                <Image
                  className={classes.bookImage}
                  src={BookPremium}
                  alt="image"
                  fill
                ></Image>
              </div>
              <div className={classes.bookTextBox}>
                <div
                  className={`${classes.bookTitle} ${dmSerifText.className}`}
                >
                  Similarity
                </div>
                <div
                  className={`${classes.bookContent} ${pretendard.className}`}
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicin
                  <br />
                  ipsam commodi ea alias. Iure sapiente dignissimos, minus
                </div>
              </div>
            </div>
            <div
              className={`${classes.button} ${
                isOpenPremium ? classes.clickedButton : classes.initButton
              }`}
            >
              <div className={classes.arrowsWrap}>
                <Arrows style={{ width: "100%", height: "100%" }} />
              </div>
            </div>
          </div>
          <div
            className={`${classes.bookDetailContainer} ${
              isOpenPremium ? "" : classes.close
            }`}
          >
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
            <div className={classes.unpublishedBook}>
              <div className={classes.unpublishedBookImg}>
                <div className={classes.logoWrap}>
                  <Logo />
                </div>
              </div>
              <div
                className={`${classes.unpublishedBookTitle} ${pretendard.className}`}
              >
                출시 예정
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
