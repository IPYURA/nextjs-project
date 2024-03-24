import { pretendard } from "@/app/fonts";
import classes from "./Graph.module.css";
import XAxis from "@/public/svgs/x-axis.svg";
import YAxis from "@/public/svgs/y-axis.svg";
// import Axis from "@/public/svgs/axis.svg";
import PhaseStick1 from "@/public/svgs/phase-stick1.svg";
import PhaseStick2 from "@/public/svgs/phase-stick2.svg";
import PhaseStick3 from "@/public/svgs/phase-stick3.svg";
import PhaseStick4 from "@/public/svgs/phase-stick4.svg";
import PhaseStick5 from "@/public/svgs/phase-stick5.svg";
import PhaseStick6 from "@/public/svgs/phase-stick6.svg";

const Graph = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div className={classes.text}>&#40;2024.03.01 ~ 2099.12.31&#41;</div>
      <div className={classes.text}>
        Lorem ipsum dolor sit
        <br />
        amet consectetur, adipisicing elit. Voluptate
      </div>
      <div className={classes.graphBox}>
        <div className={classes.graph}>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ①</div>
            <div className={classes.content}>콘텐츠텍스트</div>
            <div className={classes.stick}>
              <PhaseStick1
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick1>
            </div>
            <div className={classes.date}>2024.03</div>
          </div>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ②</div>
            <div className={classes.content}>
              콘텐츠텍스트
              <br />
              &#40;텍스트&#41;
            </div>
            <div className={classes.stick}>
              <PhaseStick2
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick2>
            </div>
            <div className={classes.date}>2024.04</div>
          </div>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ③</div>
            <div className={classes.content}>콘텐츠텍스트</div>
            <div className={classes.stick}>
              <PhaseStick3
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick3>
            </div>
            <div className={classes.date}>2024.05</div>
          </div>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ④</div>
            <div className={classes.content}>콘텐츠텍스트</div>
            <div className={classes.stick}>
              <PhaseStick4
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick4>
            </div>
            <div className={classes.date}>2024.06</div>
          </div>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ⑤</div>
            <div className={classes.content}>
              콘텐츠텍스트
              <br />
              &#40;텍스트&#41;
            </div>
            <div className={classes.stick}>
              <PhaseStick5
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick5>
            </div>
            <div className={classes.date}>2024.07</div>
          </div>
          <div className={classes.phase}>
            <div className={classes.title}>Phase ⑥</div>
            <div className={classes.content}>콘텐츠텍스트</div>
            <div className={classes.stick}>
              <PhaseStick6
                style={{ width: "100%", height: "100%" }}
              ></PhaseStick6>
            </div>
            <div className={classes.date}>2024.08</div>
          </div>
          <div className={classes.xAxis}>
            <XAxis style={{ width: "100%", height: "100%" }}></XAxis>
          </div>
          <div className={classes.yAxis}>
            <YAxis style={{ width: "100%", height: "100%" }}></YAxis>
          </div>
          <div className={classes.xAxixText}>시간</div>
          <div className={classes.yAxixText}>텍스트</div>
        </div>
      </div>
    </section>
  );
};

export default Graph;
