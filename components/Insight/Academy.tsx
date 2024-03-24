import SubTitle from "../UI/SubTitle";
import Title from "../UI/Title";
import classes from "./Academy.module.css";
import Logo from "@/public/svgs/myLogo.svg";
import ERDiagram from "@/public/svgs/ER-diagram.svg";
import AcademyMan from "@/public/svgs/Academy-man.svg";
import AcademyChart from "@/public/svgs/Academy-chart.svg";
import { pretendard } from "@/app/fonts";

const Academy = () => {
  return (
    <div className={classes.container}>
      <Title>Selection</Title>
      <SubTitle>
        Learn how different color schemes
        <br />
        and combinations create visual harmony
      </SubTitle>
      <div className={classes.linkBoxContainer}>
        <div className={classes.linkBoxWrapper}>
          <div className={classes.linkBox}>
            <div className={classes.imgBox}>
              <Logo className={classes.svgLogo}></Logo>
            </div>
            <div className={`${classes.linkText} ${pretendard.className}`}>
              Menu1
            </div>
            <div className={`${classes.linkContent} ${pretendard.className}`}>
              출시 예정
            </div>
          </div>
        </div>
        <div className={classes.unlinkBoxWrapper}>
          <div className={classes.unlinkBox}>
            <div className={classes.imgBox}>
              <ERDiagram className={classes.svgERDiagram}></ERDiagram>
            </div>
            <div className={`${classes.unlinkText} ${pretendard.className}`}>
              Menu2
            </div>
            <div className={`${classes.unlinkContent} ${pretendard.className}`}>
              출시 예정
            </div>
          </div>
        </div>
        <div className={classes.unlinkBoxWrapper}>
          <div className={classes.unlinkBox}>
            <div className={classes.imgBox}>
              <AcademyMan className={classes.svgLogo}></AcademyMan>
            </div>
            <div className={`${classes.unlinkText} ${pretendard.className}`}>
              Menu3
            </div>
            <div className={`${classes.unlinkContent} ${pretendard.className}`}>
              출시 예정
            </div>
          </div>
        </div>
        <div className={classes.unlinkBoxWrapper}>
          <div className={classes.unlinkBox}>
            <div className={classes.imgBox}>
              <AcademyChart className={classes.svgLogo}></AcademyChart>
            </div>
            <div className={`${classes.unlinkText} ${pretendard.className}`}>
              Menu4
            </div>
            <div className={`${classes.unlinkContent} ${pretendard.className}`}>
              출시 예정
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academy;
