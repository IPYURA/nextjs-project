"use client";

import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./StrategyOptimizingSequence.module.css";
import ParallelogramGreen from "@/public/svgs/parallelogram-green.svg";
import ParallelogramGreenCopy from "@/public/svgs/parallelogram-green-copy.svg";
import ParallelogramHollowGreen from "@/public/svgs/parallelogram-hollow-green.svg";
import ParallelogramBlue from "@/public/svgs/parallelogram-blue.svg";
import ParallelogramHollowBlue from "@/public/svgs/parallelogram-hollow-blue.svg";
import ParallelogramNavy from "@/public/svgs/parallelogram-navy.svg";
import ParallelogramHollowGreenCopy from "@/public/svgs/parallelogram-hollow-green-copy.svg";
import ParallelogramBlueCopy from "@/public/svgs/parallelogram-blue-copy.svg";
import ParallelogramHollowBlueCopy from "@/public/svgs/parallelogram-hollow-blue-copy.svg";
import ParallelogramNavyCopy from "@/public/svgs/parallelogram-navy-copy.svg";
import DottedLine from "@/public/svgs/dotted-line.svg";
import OneToOneTriangleArrow from "@/public/svgs/one-to-one-triangle-arrow.svg";
import ThreeToOneTriangleArrow from "@/public/svgs/three-to-one-triangle-arrow.svg";
import TwoToOneTriangleArrow from "@/public/svgs/two-to-one-triangle-arrow.svg";
import Rhombus from "@/public/svgs/rhombus.svg";
import SpringLine from "@/public/svgs/spring-line.svg";
import OneToTwoSmallLine from "@/public/svgs/one-to-two-small-line.svg";
import OneToTwoLargeLine from "@/public/svgs/one-to-two-large-line.svg";
import OneToThreeLine from "@/public/svgs/one-to-three-line.svg";
import { useScrollAnimation } from "@/hooks/useScrollObserver";

const StrategyOptimizingSequence = () => {
  const { ref, isInViewport } = useScrollAnimation();

  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div className={classes.subSection}>
        <div className={`${classes.title} ${dmSerifText.className}`}>
          Lorem ipsum dolor Sequence
        </div>
        <ul className={classes.content}>
          <li>
            <div>&#183;</div>
            <div>Nulla dolorum asperiores id, impedit laboriosam.</div>
          </li>
        </ul>
        <div className={classes.stepList} ref={ref}>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              Step 1
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramGreen}>
                <ParallelogramGreenCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramGreenCopy>
              </div>
              <div className={classes.stepText}>1-1&#41; 콘텐츠 텍스트</div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowGreen}>
                <ParallelogramHollowGreenCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowGreenCopy>
              </div>
              <div className={classes.stepBrightText}>x&#40;k&#41; 텍스트</div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowGreen}>
                <ParallelogramHollowGreenCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowGreenCopy>
              </div>
              <div className={classes.stepBrightText}>
                x&#40;k&#41; -{">"} X&#40;n&#41; 텍스트
              </div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowGreen}>
                <ParallelogramHollowGreenCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowGreenCopy>
              </div>
              <div className={classes.stepBrightText}>X&#40;n&#41; 텍스트</div>
            </div>
          </div>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              &nbsp;
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramGreen}>
                <ParallelogramGreen
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramGreen>
              </div>
              <div className={classes.stepText}>1-2&#41; 콘텐츠 텍스트</div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowGreen}>
                <ParallelogramHollowGreen
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowGreen>
              </div>
              <div className={classes.stepBrightText}>Y&#40;n&#41; 텍스트</div>
            </div>
          </div>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              Step 2
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramBlue}>
                <ParallelogramBlueCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramBlueCopy>
              </div>
              <div className={classes.stepText}>2-1&#41; 텍스트</div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowBlue}>
                <ParallelogramHollowBlueCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowBlueCopy>
              </div>
              <div className={classes.stepBrightText}>텍스트</div>
            </div>
            <div
              className={`${classes.stepContent} ${
                isInViewport ? classes.on : ""
              }`}
            >
              <div className={classes.svgParallelogramHollowBlue}>
                <ParallelogramHollowBlueCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramHollowBlueCopy>
              </div>
              <div className={classes.stepBrightText}>텍스트</div>
            </div>
          </div>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              &nbsp;
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramBlue}>
                <ParallelogramBlue
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramBlue>
              </div>
              <div className={classes.stepText}>2-2&#41; 콘텐츠 텍스트</div>
            </div>
          </div>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              Step 3
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramNavy}>
                <ParallelogramNavyCopy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramNavyCopy>
              </div>
              <div className={classes.stepText}>3-1&#41; 텍스트</div>
            </div>
          </div>
          <div className={classes.stepItem}>
            <div className={`${classes.stepTitle} ${dmSerifText.className}`}>
              &nbsp;
            </div>
            <div className={classes.stepContent}>
              <div className={classes.svgParallelogramNavy}>
                <ParallelogramNavy
                  style={{ width: "100%", height: "100%" }}
                ></ParallelogramNavy>
              </div>
              <div className={classes.stepText}>3-2&#41; 텍스트</div>
            </div>
          </div>
        </div>
        <div className={classes.diagramContainer}>
          <div className={classes.diagramBox}>
            <div className={classes.diagram}>
              <div className={classes.circleList}>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>1</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>2</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>3</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>4</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>5</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>6</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>7</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>8</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>9</span>
                  </div>
                </div>
                <div className={classes.circle}>
                  <div className={classes.circleText}>
                    <span>x</span>
                    <span>10</span>
                  </div>
                </div>
              </div>
              <div className={classes.lineBox}>
                <div className={classes.svgDottedLine}>
                  <DottedLine
                    style={{ width: "100%", height: "100%" }}
                  ></DottedLine>
                </div>
                <div className={classes.svgOneToOneTriangleArrow}>
                  <OneToOneTriangleArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneTriangleArrow>
                </div>
              </div>
              <div className={classes.diagramSection}>
                <div className={classes.circleList}>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>1</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>2</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>3</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>4</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>5</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>6</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>7</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>8</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>9</span>
                    </div>
                  </div>
                  <div className={classes.circle}>
                    <div className={classes.circleText}>
                      <span>x</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
                <div className={classes.arrowBox}>
                  <div className={classes.svgThreeToOneTriangleArrow}>
                    <ThreeToOneTriangleArrow
                      style={{ width: "100%", height: "100%" }}
                    ></ThreeToOneTriangleArrow>
                  </div>
                  <div className={classes.svgTwoToOneTriangleArrow}>
                    <TwoToOneTriangleArrow
                      style={{ width: "100%", height: "100%" }}
                    ></TwoToOneTriangleArrow>
                  </div>
                  <div className={classes.svgThreeToOneTriangleArrow}>
                    <ThreeToOneTriangleArrow
                      style={{ width: "100%", height: "100%" }}
                    ></ThreeToOneTriangleArrow>
                  </div>
                  <div className={classes.svgTwoToOneTriangleArrow}>
                    <TwoToOneTriangleArrow
                      style={{ width: "100%", height: "100%" }}
                    ></TwoToOneTriangleArrow>
                  </div>
                </div>
                <div className={classes.squareFirstList}>
                  <div className={classes.square}>
                    <div className={classes.squareText}>
                      <span>X</span>
                      <span>1</span>
                    </div>
                  </div>
                  <div className={classes.square}>
                    <div className={classes.squareText}>
                      <span>X</span>
                      <span>2</span>
                    </div>
                  </div>
                  <div className={classes.square}>
                    <div className={classes.squareText}>
                      <span>X</span>
                      <span>3</span>
                    </div>
                  </div>
                  <div className={classes.square}>
                    <div className={classes.squareText}>
                      <span>X</span>
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.lineBox}>
                <div className={classes.svgDottedLine}>
                  <DottedLine
                    style={{ width: "100%", height: "100%" }}
                  ></DottedLine>
                </div>
                <div className={classes.svgOneToOneTriangleArrow}>
                  <OneToOneTriangleArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneTriangleArrow>
                </div>
              </div>
              <div className={classes.diagramSection}>
                <div className={classes.squareDetail}>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.svgTwoToOneLargeLine}>
                      <OneToTwoLargeLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToTwoLargeLine>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>2</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>3</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.svgOneToThreeLine}>
                      <OneToThreeLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToThreeLine>
                    </div>
                    <div className={classes.svgOneToTwoSmallLine}>
                      <OneToTwoSmallLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToTwoSmallLine>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>4</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>5</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>6</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>7</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={classes.lineBox}>
                <div className={classes.svgDottedLine}>
                  <DottedLine
                    style={{ width: "100%", height: "100%" }}
                  ></DottedLine>
                </div>
                <div className={classes.svgOneToOneTriangleArrow}>
                  <OneToOneTriangleArrow
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneTriangleArrow>
                </div>
              </div>
              <div className={classes.diagramSection}>
                <div className={classes.squareDetail}>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>1</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.svgTwoToOneLargeLine}>
                      <OneToTwoLargeLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToTwoLargeLine>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>2</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>3</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.svgOneToThreeLine}>
                      <OneToThreeLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToThreeLine>
                    </div>
                    <div className={classes.svgOneToTwoSmallLine}>
                      <OneToTwoSmallLine
                        style={{ width: "100%", height: "100%" }}
                      ></OneToTwoSmallLine>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>4</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>5</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>6</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>7</span>
                      </div>
                    </div>
                    <div className={classes.square}>
                      <div className={classes.squareText}>
                        <span>X</span>
                        <span>8</span>
                      </div>
                    </div>
                  </div>
                  <div className={classes.squareDetailSection}>
                    <div className={classes.final}>
                      <div className={classes.svgSpringLineWrapper}>
                        <div className={classes.svgSpringLine}>
                          <SpringLine
                            style={{ width: "100%", height: "100%" }}
                          ></SpringLine>
                        </div>
                      </div>
                      <div className={classes.svgRhombus}>
                        <Rhombus
                          style={{ width: "100%", height: "100%" }}
                        ></Rhombus>
                        <div className={classes.svgRhombusText}>
                          Y<span>1</span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.final}>
                      <div className={classes.svgSpringLineWrapper}>
                        <div className={classes.svgSpringLine}>
                          <SpringLine
                            style={{ width: "100%", height: "100%" }}
                          ></SpringLine>
                        </div>
                      </div>
                      <div className={classes.svgRhombus}>
                        <Rhombus
                          style={{ width: "100%", height: "100%" }}
                        ></Rhombus>
                        <div className={classes.svgRhombusText}>
                          Y<span>2</span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.final}>
                      <div className={classes.svgSpringLineWrapper}>
                        <div className={classes.svgSpringLine}>
                          <SpringLine
                            style={{ width: "100%", height: "100%" }}
                          ></SpringLine>
                        </div>
                      </div>
                      <div className={classes.svgRhombus}>
                        <Rhombus
                          style={{ width: "100%", height: "100%" }}
                        ></Rhombus>
                        <div className={classes.svgRhombusText}>
                          Y<span>3</span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.final}>
                      <div className={classes.svgSpringLineWrapper}>
                        <div className={classes.svgSpringLine}>
                          <SpringLine
                            style={{ width: "100%", height: "100%" }}
                          ></SpringLine>
                        </div>
                      </div>
                      <div className={classes.svgRhombus}>
                        <Rhombus
                          style={{ width: "100%", height: "100%" }}
                        ></Rhombus>
                        <div className={classes.svgRhombusText}>
                          Y<span>4</span>
                        </div>
                      </div>
                    </div>
                    <div className={classes.final}>
                      <div className={classes.svgSpringLineWrapper}>
                        <div className={classes.svgSpringLine}>
                          <SpringLine
                            style={{ width: "100%", height: "100%" }}
                          ></SpringLine>
                        </div>
                      </div>
                      <div className={classes.svgRhombus}>
                        <Rhombus
                          style={{ width: "100%", height: "100%" }}
                        ></Rhombus>
                        <div className={classes.svgRhombusText}>
                          Y<span>5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.caption}>▲ Lorem ipsum dolor sit amet</div>
        </div>
      </div>
    </section>
  );
};

export default StrategyOptimizingSequence;
