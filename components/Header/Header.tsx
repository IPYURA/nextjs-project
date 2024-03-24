import Mobile from "../MediaQuery/Mobile";
import NotMobile from "../MediaQuery/NotMobile";
import Account from "./Account";
import classes from "./Header.module.css";
import HeaderFirstContainer from "./HeaderFirstContainer";
import HeaderSecondContainer from "./HeaderSecondContainer";
import MobileHeader from "./MobileHeader";

const Header = () => {
  return (
    <>
      <header className={classes.columnBox}>
        <Mobile>
          <MobileHeader>
            <Account></Account>
          </MobileHeader>
        </Mobile>
        <NotMobile>
          <HeaderFirstContainer></HeaderFirstContainer>
          <HeaderSecondContainer></HeaderSecondContainer>
        </NotMobile>
      </header>
      <div className={classes.emptyBox}></div>
    </>
  );
};

export default Header;
