"use client";

import Link from "next/link";
import classes from "./MobileHeader.module.css";
import Logo from "@/public/svgs/myLogo.svg";
import NavButton from "@/public/svgs/nav-button.svg";
import MobileNavBar from "./MobileNavBar";
import { useState } from "react";

const MobileHeader = ({ children }: { children: React.ReactNode }) => {
  const [isOpenNavBar, setIsOpenNavBar] = useState<boolean>(false);

  const handlerClickNavButton = () => setIsOpenNavBar((prev) => !prev);

  return (
    <>
      <div className={classes.main}>
        <Link className={classes.link} href="/">
          <div className={classes.svgLogo}>
            <Logo style={{ width: "100%", height: "100%" }}></Logo>
          </div>
        </Link>
        <button className={classes.navButton} onClick={handlerClickNavButton}>
          <div className={classes.svgNavButton}>
            <NavButton style={{ width: "100%", height: "100%" }}></NavButton>
          </div>
        </button>
      </div>
      <MobileNavBar isOpenNavBar={isOpenNavBar} handlerClose={handlerClickNavButton} handlerClick={handlerClickNavButton}>{children}</MobileNavBar>
    </>
  );
};

export default MobileHeader;
