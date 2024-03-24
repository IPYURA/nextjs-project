import Link from "next/link";
import HeaderNav from "./HeaderNav";
import classes from "./HeaderSecondContainer.module.css";
import Logo from "@/public/svgs/myLogo.svg";
import MyTitle from "@/public/svgs/myTitle.svg";

const HeaderSecondContainer = () => {
  return (
    <div className={classes.rowBox}>
      <Link className={classes.linkBox} href="/">
        <div className={classes.svgLogo}>
          <Logo style={{ width: "100%", height: "100%" }}></Logo>
        </div>
        <div className={classes.svgTitle}>
          <MyTitle style={{ width: "100%", height: "100%" }}></MyTitle>
        </div>
      </Link>
      <div className={classes.emptyBox}></div>
      <HeaderNav></HeaderNav>
    </div>
  );
};

export default HeaderSecondContainer;
