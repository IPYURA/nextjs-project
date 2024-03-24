import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./DataStructureAnalysis.module.css";
import OneToOneArrow from "@/public/svgs/one-to-one-arrow.svg";
import OneToOneArrowMedium from "@/public/svgs/one-to-one-arrow-medium.svg";
import OneToOneArrowLong from "@/public/svgs/one-to-one-arrow-long.svg";
import MoreAndMore from "@/public/svgs/more-and-more.svg";

const DataStructureAnalysis = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div className={classes.subSection}>
        <div className={`${classes.title} ${dmSerifText.className}`}>
          Process : lorem ipsum
        </div>
        <ul className={classes.content}>
          <li>
            <div>&#183;</div>
            <div> lorem ipsum dolor</div>
          </li>
          <li>
            <div>&#183;</div>
            <div>blooming in the night</div>
          </li>
        </ul>
        <div className={classes.box}>
          <div className={classes.container}>
            <div className={classes.process}>
              <div className={classes.circle}>
                <div className={classes.circleText}>
                  시작
                  <br />
                  <span>&#40;x&#41;</span>
                </div>
              </div>
              <div className={classes.svgOneToOneArrow}>
                <OneToOneArrow
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrow>
              </div>
              <div className={classes.circle}>
                <div className={classes.circleText}>
                  처리
                  <br />
                  <span>&#40;f&#41;</span>
                </div>
              </div>
              <div className={classes.svgOneToOneArrow}>
                <OneToOneArrow
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrow>
              </div>
              <div className={classes.circle}>
                <div className={classes.circleText}>
                  종료
                  <br />
                  <span>&#40;y&#41;</span>
                </div>
              </div>
            </div>
            <div className={classes.caption}>
              ▲ 의미 없는 텍스트 &#40;텍스트&#41;
            </div>
          </div>
          <div className={classes.container}>
            <div className={classes.format}>
              <div className={classes.textBox}>
                <div className={classes.text}>
                  시작 지점
                  <br />
                  &#40;x&#41;
                </div>
              </div>
              <div className={classes.formatArrow}>
                <div className={classes.arrowCaption}>진행중 &#40;f&#41;</div>
                <div className={classes.svgOneToOneMediumArrow}>
                  <OneToOneArrowMedium
                    style={{ width: "100%", height: "100%" }}
                  ></OneToOneArrowMedium>
                </div>
              </div>
              <div className={classes.textBox}>
                <div className={classes.text}>
                  종료 지점
                  <br />
                  &#40;y&#41;
                </div>
              </div>
            </div>
            <div className={classes.caption}>
              ▲ 의미 없는 텍스트 &#40;텍스트&#41;
            </div>
          </div>
        </div>
      </div>
      <div className={classes.subSection}>
        <div className={classes.container}>
          <div className={classes.structure}>
            <div className={classes.variableSection}>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  x<span>1</span>
                </div>
              </div>
              <div className={classes.svgOneToOneLongArrow}>
                <OneToOneArrowLong
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrowLong>
              </div>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  y<span>1</span>
                </div>
              </div>
            </div>
            <div className={classes.variableSection}>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  x<span>2</span>
                </div>
              </div>
              <div className={classes.svgOneToOneLongArrow}>
                <OneToOneArrowLong
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrowLong>
              </div>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  y<span>2</span>
                </div>
              </div>
            </div>
            <div className={classes.variableSection}>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  x<span>3</span>
                </div>
              </div>
              <div className={classes.svgOneToOneLongArrow}>
                <OneToOneArrowLong
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrowLong>
              </div>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  y<span>3</span>
                </div>
              </div>
            </div>
            <div className={classes.variableSection}>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  x<span>4</span>
                </div>
              </div>
              <div className={classes.svgOneToOneLongArrow}>
                <OneToOneArrowLong
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrowLong>
              </div>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  y<span>4</span>
                </div>
              </div>
            </div>
            <div className={classes.svgMoreAndMore}>
              <MoreAndMore
                style={{ width: "100%", height: "100%" }}
              ></MoreAndMore>
            </div>
            <div className={classes.variableSection}>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  x<span>n</span>
                </div>
              </div>
              <div className={classes.svgOneToOneLongArrow}>
                <OneToOneArrowLong
                  style={{ width: "100%", height: "100%" }}
                ></OneToOneArrowLong>
              </div>
              <div className={classes.variable}>
                <div className={classes.variableText}>
                  y<span>n</span>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.caption}>
            ▲ 의미 없는 텍스트 &#40;텍스트&#41;
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataStructureAnalysis;
