"use client";

import classes from "./page.module.css";
import { pretendard } from "../fonts";
import SvgRectangle from "@/public/svgs/rectangle.svg";
import { useCallback, useState } from "react";

export default function Profile() {
  const [isOpenBlueBox, setIsOpenBlueBox] = useState<boolean>(true);

  const hanlderClickBlueButton = useCallback(() => {setIsOpenBlueBox((prev)=>!prev)}, []);
  return (
    <main className={`${classes.main} ${pretendard.className}`}>
      <section className={classes.wrapper}>
        <div className={classes.titleBox}>
          <div className={classes.title}>나의 프로필 정보</div>
          <button onClick={hanlderClickBlueButton}>ⓘ</button>
          <div className={isOpenBlueBox ? classes.blueBox : classes.hidden}>
            <div className={classes.svgRectangle}>
              <SvgRectangle
                style={{ widht: "100%", height: "100%" }}
              ></SvgRectangle>
            </div>
            <div className={classes.blueText}>
              본인인증을 완료하시면,
              <br />더 품질 높은 사용자 경험과 서비스 지원이 가능합니다.
            </div>
          </div>
        </div>
        <div className={classes.infoBoxWrapper}>
          <div className={classes.infoBox}>
            <div className={classes.infoWrapper}>
              <div className={classes.info}>
                <div className={classes.infoName}>멤버쉽</div>
                <div className={classes.infoContent}>일반회원</div>
              </div>
            </div>
            <div className={classes.infoChangeWrapper}>
              <button className={classes.changeButton}>변경</button>
            </div>
          </div>
          <div className={classes.infoBox}>
            <div className={classes.infoWrapper}>
              <div className={classes.info}>
                <div className={classes.infoName}>실명</div>
                <div className={classes.infoContent}>N/A</div>
              </div>
              <div className={classes.info}>
                <div className={classes.infoName}>휴대폰</div>
                <div className={classes.infoContent}>N/A</div>
              </div>
            </div>
            <div className={classes.infoChangeWrapper}>
              <button className={classes.changeButton}>본인인증</button>
            </div>
          </div>
          <div className={classes.infoBox}>
            <div className={classes.infoWrapper}>
              <div className={classes.info}>
                <div className={classes.infoName}>이메일</div>
                <div className={classes.infoContent}>example@mail.com</div>
              </div>
              <div className={classes.info}>
                <div className={classes.infoName}>비밀번호</div>
                <div className={classes.infoContent}>●●●●●●●●</div>
              </div>
            </div>
            <div className={classes.infoChangeWrapper}>
              <button className={classes.changeButton}>업데이트</button>
            </div>
          </div>
        </div>
        <div className={classes.title}>마케팅 정보 수신</div>
        <div className={classes.infoWrapper}>
          <div className={classes.infoBox}>
            <div className={classes.infoWrapper}>
              <div className={classes.info}>
                <div className={classes.infoName}>휴대폰</div>
              </div>
            </div>
            <div className={classes.infoChangeWrapper}>
              <button className={classes.changeButton}>본인인증</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
