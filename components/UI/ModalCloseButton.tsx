"use client";

import React, { useState } from "react";
import classes from "./ModalCloseButton.module.css";
import CloseBtn from "@/public/svgs/close-modal.svg";
import CloseBtnHovered from "@/public/svgs/close-modal-hover.svg";

interface ModalProps {
  onClose: () => void;
  location: number;
}

const ModalCloseButton = ({ onClose, location }: ModalProps) => {
  const [closeColored, setCloseColored] = useState<boolean>(false);

  return (
    <button
      onMouseEnter={() => setCloseColored(true)}
      onMouseLeave={() => setCloseColored(false)}
      onClick={onClose}
      className={classes.closeButton}
      style={{ top: `${location}px`, right: `${location}px` }}
    >
      {closeColored ? <CloseBtnHovered /> : <CloseBtn />}
    </button>
  );
};

export default ModalCloseButton;
