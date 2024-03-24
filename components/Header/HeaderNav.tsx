import { pretendard } from "@/app/fonts";
import classes from "./HeaderNav.module.css";
import NavLink from "./nav-link";

const HeaderNav = () => {
  return (
    <div className={`${pretendard.className} ${classes.rowBox}`}>
      <NavLink href="/atom">요금</NavLink>
      <NavLink href="/insight">설명</NavLink>
      <NavLink href="/communication">검정</NavLink>
      {/* <NavLink href="/consulting">기타</NavLink> */}
      <NavLink href="/introduction">소개</NavLink>
    </div>
  );
};

export default HeaderNav;
