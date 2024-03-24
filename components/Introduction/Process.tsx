import { pretendard } from "@/app/fonts";
import classes from "./Process.module.css";
import OneToOneArrow from "@/public/svgs/one-to-one-arrow.svg";
import OneToOneArrowDown from "@/public/svgs/one-to-one-arrow-down.svg";
import OneToFiveArrow from "@/public/svgs/one-to-five-arrow.svg";
import OneToTwoArrow from "@/public/svgs/one-to-two-arrow.svg";
import OneToThreeArrow from "@/public/svgs/one-to-three-arrow.svg";
import TwoToOneArrow from "@/public/svgs/two-to-one-arrow.svg";
import Chain from "@/public/svgs/chain.svg";
import ThreeToOneArrow from "@/public/svgs/three-to-one-arrow.svg";
import FiveToTwoArrow from "@/public/svgs/five-to-two-arrow.svg";
import BalloonRope from "@/public/svgs/balloon-rope.svg";

const Process = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div className={classes.text}>
        이곳에 텍스트{" "}
        <span>
          &#39;가 들어 갑니다
          <span>&#40;content text here&#41;</span>&#39;
        </span>
        이곳에도 텍스트가 들어갑니다.
      </div>
      <div className={classes.text}>
        이곳에도 텍스트가 들어갑니다. 이곳에도 텍스트가 들어갑니다.
      </div>
      <div className={classes.box}>
        <div className={classes.processing}>
          <div className={classes.processingContainer}>
            <div className={classes.processingTitle}>First-processing</div>
            <div className={classes.processingBox}>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자/글자</div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgOneToOneArrow}>
                  <OneToOneArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자</div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgOneToThreeArrow}>
                  <OneToThreeArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToThreeArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>1</span>
                  </div>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>2</span>
                  </div>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>3</span>
                  </div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgOneToOneArrow}>
                  <OneToOneArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrow>
                </div>
                <div className={classes.svgOneToOneArrow}>
                  <OneToOneArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrow>
                </div>
                <div className={classes.svgOneToOneArrow}>
                  <OneToOneArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>1</span>
                  </div>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>2</span>
                  </div>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>3</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.processingContainer}>
            <div className={classes.processingTitle}>&nbsp;</div>
            <div className={classes.processingGap}>
              <div className={classes.svgThreeToOneArrow}>
                <ThreeToOneArrow
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                ></ThreeToOneArrow>
              </div>
              <div className={classes.decision}>
                <div className={classes.decisionTextBox}>
                  <div className={classes.decisionText}>글자글자</div>
                </div>
                <div className={classes.svgBalloonRope}>
                  <BalloonRope
                    style={{ width: "100%", height: "100%" }}
                  ></BalloonRope>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.processingContainer}>
            <div className={classes.processingTitle}>Second-processing</div>
            <div className={classes.processingBox}>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자글자</div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgOneToTwoArrow}>
                  <OneToTwoArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToTwoArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자글자</div>
                </div>
                <div className={classes.svgOneToOneArrowDown}>
                  <OneToOneArrowDown
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrowDown>
                </div>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자글자</div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgOneToFiveArrow}>
                  <OneToFiveArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToFiveArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>1</span>
                  </div>
                </div>
                <div className={classes.svgChain}>
                  <Chain style={{ width: "100%", height: "100%" }}></Chain>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>2</span>
                  </div>
                </div>
                <div className={classes.svgChain}>
                  <Chain style={{ width: "100%", height: "100%" }}></Chain>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>3</span>
                  </div>
                </div>
                <div className={classes.svgChain}>
                  <Chain style={{ width: "100%", height: "100%" }}></Chain>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>4</span>
                  </div>
                </div>
                <div className={classes.svgChain}>
                  <Chain style={{ width: "100%", height: "100%" }}></Chain>
                </div>
                <div className={classes.processingCircle}>
                  <div className={classes.processingCircleText}>
                    글자<span>5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.processingContainer}>
            <div className={classes.processingTitle}>&nbsp;</div>
            <div className={classes.processingGap}>
              <div className={classes.svgFiveToTwoArrow}>
                <FiveToTwoArrow
                  style={{ width: "100%", height: "100%" }}
                ></FiveToTwoArrow>
              </div>
            </div>
          </div>
          <div className={classes.processingContainer}>
            <div className={classes.processingTitle}>Third-processing</div>
            <div className={classes.processingBox}>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>&#40;+&#41; 글자</div>
                </div>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>&#40;-&#41; 글자</div>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.svgTwoToOneArrow}>
                  <TwoToOneArrow
                    style={{ width: "100%", height: "100%" }}
                  ></TwoToOneArrow>
                </div>
              </div>
              <div className={classes.processingSection}>
                <div className={classes.processingTextBox}>
                  <div className={classes.processingText}>글자</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={classes.text}>▲ 이곳에도 텍스트가 들어갑니다.</div>
    </section>
  );
};

export default Process;
