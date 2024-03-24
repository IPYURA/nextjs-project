import React, { ReactNode } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  message: string;
}

const Modal = ({ open, onClose, message }: ModalProps) => {
  if (!open) return null;
  return ReactDOM.createPortal(
    <>
      <div className={classes.overlayStyle} />
      <div className={classes.modalStyle}>
        <button onClick={onClose}>모달 닫기</button>
        {message}
      </div>
    </>,
    document.getElementById("global-modal") as HTMLElement
  );
};

export default Modal;