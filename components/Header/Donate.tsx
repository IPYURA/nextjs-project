"use client";

import classes from "./Donate.module.css";
import { useCallback, useState } from "react";
import DonateModal from "../UI/DonateModal";

const Donate = () => {
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
        DONATE
      </button>
      <DonateModal open={isModalOpen} onClose={handleClickCloseModal} />
    </>
  );
};

export default Donate;
