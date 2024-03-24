"use client";

import ReactDOM from "react-dom";
import React, { useState, useEffect } from "react";
import classes from "./ContactSecondModal.module.css";
import ModalCloseButton from "./ModalCloseButton";
import { PreventScroll, AllowScroll } from "../ScrollBan/HandleScroll";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const ContactSecondModal = ({ open, onClose }: ModalProps) => {
  const [screenWidth, setScreenWidth] = useState<number>();
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);
  useEffect(() => {
    if (open) {
      const prevScrollY = PreventScroll();
      return () => {
        AllowScroll(prevScrollY);
      };
    } else {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, [open]);

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className={classes.container}>
        <div className={classes.modalWrap}>
          <ModalCloseButton
            onClose={onClose}
            location={screenWidth! > 768 ? 16 : 16}
          />
          <h3 className={classes.title}>개인정보 수집 및 이용</h3>
          <div className={classes.textWrap}>
            <ul>
              1. 수집하는 개인정보 항목
              <li>필수: 문의자 이름, 소속기관명, 전화번호, 이메일, 주소</li>
            </ul>
            <ul>
              2. 개인정보 처리 목적
              <li>EoP Insight 문의사항 응대 및 마케팅 데이터 활용</li>
            </ul>
            <ul>
              3. 보유기간
              <li>입력일로부터 3년</li>
            </ul>
            <ul>
              4. 동의 거부권 및 불이익
              <li>
                본인은 개인정보 수집/이용에 대한 동의를 거부할 권리가 있습니다.
              </li>
              <li>
                그러나 동의를 거부할 경우 원활한 본건 서비스에 제약을 받을 수
                있습니다.
              </li>
            </ul>
          </div>
          <h5 className={classes.additionalText}>
            * 자세한 내용은 웹사이트 하단의 개인정보처리방침을 확인해주세요.
          </h5>
        </div>
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default ContactSecondModal;
