import { pretendard } from "@/app/fonts";
import Title from "../UI/Title";
import classes from "./Mission.module.css";

const Mission = () => {
  return (
    <div className={classes.container}>
      <Title>Our Color</Title>
      <div className={`${classes.subTitle} ${pretendard.className}`}>
        Dive into the psychology behind colors
      </div>
      <div className={`${classes.box} ${pretendard.className}`}>
        <ul className={classes.listBox}>
          <li>
            <span>
              Embrace <span>the vibrant world of colors!</span>
            </span>
          </li>
          <li>
            <span>
              Colors symbolize <span>diversity</span>
            </span>
          </li>
        </ul>
        <div className={classes.text}>* Colors and Memory</div>
        <div className={classes.subText}>
          <span className={classes.whitespace}>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          </span>
          Colors are intricately linked to our memories, <span>evoking</span>{" "}
          lorem
          <span> nostalgic </span> recollections. <span>allowing</span>{" "}
          cherished memories to flood back anew.
        </div>
      </div>
    </div>
  );
};

export default Mission;
