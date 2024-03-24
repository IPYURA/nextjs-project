import { pretendard } from "@/app/fonts";
import classes from "./Target.module.css";
import TargetItem from "./TargetItem";
import TargetLogo from "@/public/svgs/target-logo.svg";
import TargetDecisionMaking from "@/public/svgs/target-decision-making.svg";
import TargetInformation from "@/public/svgs/target-information.svg";
import TargetRun from "@/public/svgs/target-run.svg";
import TargetStrategy from "@/public/svgs/target-strategy.svg";
import TargetEmotion from "@/public/svgs/target-emotion.svg";

const Target = () => {
  return (
    <div className={classes.container}>
      <div className={`${classes.subTitle} ${pretendard.className}`}>
        “Sensory Delight of Color”
      </div>
      <div className={classes.box}>
        <TargetItem title="Set Target" content="Dive into the rich world">
          <div className={classes.targetLogo}>
            <TargetLogo width={"100%"} height={"100%"}></TargetLogo>
          </div>
        </TargetItem>
        <TargetItem title="Decision" content="boundless imagination sparked">
          <div className={classes.targetDecisionMaking}>
            <TargetDecisionMaking
              width={"100%"}
              height={"100%"}
            ></TargetDecisionMaking>
          </div>
        </TargetItem>
        <TargetItem
          title="Evolving"
          content={
            <span>
              sea of evolving
              <br />
              ideas and innovation
            </span>
          }
        >
          <div className={classes.targetStrategy}>
            <TargetStrategy width={"100%"} height={"100%"}></TargetStrategy>
          </div>
        </TargetItem>
        <TargetItem
          title="Information"
          content="Step towards embracing diversity"
        >
          <div className={classes.targetInformation}>
            <TargetInformation
              width={"100%"}
              height={"100%"}
            ></TargetInformation>
          </div>
        </TargetItem>
        <TargetItem title="Lorem" content="lorem ipsum riali demeily">
          <div className={classes.targetRun}>
            <TargetRun width={"100%"} height={"100%"}></TargetRun>
          </div>
        </TargetItem>
        <TargetItem title="Emotional" content="Enchantment of colors">
          <div className={classes.targetEmotion}>
            <TargetEmotion width={"100%"} height={"100%"}></TargetEmotion>
          </div>
        </TargetItem>
      </div>
    </div>
  );
};

export default Target;
