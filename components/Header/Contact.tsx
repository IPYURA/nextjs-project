"use client";
import classes from "./Donate.module.css";
import { useCallback, useState } from "react";
import ContactModal from "../UI/ContactModal";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleClickCloseModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);
  return (
    <>
      <button onClick={openModal} className={classes.text}>
        CONTACT
      </button>
      <ContactModal open={isModalOpen} onClose={handleClickCloseModal} />
    </>
  );
};

export default Contact;
