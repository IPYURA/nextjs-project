"use client";

import ReactDOM from "react-dom";
import classes from "./DonateModal.module.css";
import Image from "next/image";
import { pretendard } from "@/app/fonts";
import QRcode from "@/public/images/QRcode.webp";
import CopyIcon from "@/public/images/copyIcon.webp";
import ModalCloseButton from "./ModalCloseButton";
import { useEffect } from "react";
import { PreventScroll, AllowScroll } from "../ScrollBan/HandleScroll";

interface ModalProps {
  open: boolean;
  onClose: () => void;
}

const DonateModal = ({ open, onClose }: ModalProps) => {
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

  const onClickCopyText = () => {
    let accountNum = "계좌 정보 막아놓았습니다.";
    navigator.clipboard.writeText(accountNum).catch((err) => {
      alert("복사하지 못했습니다.");
      console.error("클립보드 복사 실패: ", err);
    });
  };

  return ReactDOM.createPortal(
    <>
      <div className={`${classes.wrap} ${pretendard.className}`}>
        <div className={classes.modalWrap}>
          <ModalCloseButton onClose={onClose} location={24} />
          <div className={classes.title}>동해물과 백두산이 마르고 닳도록.</div>
          <div className={classes.desc}>
            <div>
              <h5>이곳에 텍스트가 들어가게 됩니다.</h5>
              <h5>이곳에 또다른 길이의 텍스트가 들어가게 됩니다.</h5>
              <h5>이곳에 또다른 텍스트가 들어가게 됩니다.</h5>
            </div>
            <h5>한 줄을 띄운 지금의 이 줄에도 텍스트가 들어갑니다.</h5>
          </div>
          <div className={classes.qrcode}>
            <Image src={QRcode} alt="qrcode" />
            <div className={classes.qrDesc}>토스 간편송금 QR코드</div>
          </div>

          <div className={classes.accountNumber}>
            <h3>
              🚀후원계좌&#41; 1234-1234-001234 카카오뱅크
              <button className={classes.copyButton}>
                <Image src={CopyIcon} alt="copyText"></Image>
              </button>
            </h3>
            <h4>예금주 : 조동건&#40;기업명이 들어갑니다.&#41;</h4>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default DonateModal;
