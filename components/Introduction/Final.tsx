import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./Final.module.css";
import Plus from "@/public/svgs/plus.svg";
import Image from "next/image";
import profile from "@/public/images/profile.webp";
import profileIntro from "@/public/images/proflie-intro.webp";
import Link from "next/link";
import SvgIntroductionFooter from "@/public/svgs/introduction-footer.svg";

const Final = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div className={classes.profileContainer}>
        <div className={classes.profile}>
          <div>
            <div className={classes.role}>Student</div>
            <div className={classes.name}>조동건</div>
          </div>
          <div className={`${classes.profileImg} ${classes.mobile}`}>
            <Image
              alt="profile"
              src={profile}
              sizes="400vw"
              fill
              quality={100}
            ></Image>
          </div>
          <div className={classes.detailList}>
            <div className={classes.deatilItem}>
              <div
                className={`${classes.detailTitle} ${dmSerifText.className}`}
              >
                <div></div>Lorem ipsum
              </div>
              <div className={classes.detailContent}>
                Around 1000 hours
                <br />
                Front-End Developer
                <br />
                text &#40;content&#41; text
              </div>
            </div>
            <div className={classes.deatilItem}>
              <div
                className={`${classes.detailTitle} ${dmSerifText.className}`}
              >
                <div></div>Skills
              </div>
              <div className={classes.detailContent}>
                HTML, CSS, JAVASCRIPT
                <br />
                React, Next, TYPESCRIPT
              </div>
            </div>
            <div className={classes.deatilItem}>
              <div
                className={`${classes.detailTitle} ${dmSerifText.className}`}
              >
                <div></div>etc
              </div>
              <div className={classes.detailContent}>
                Node.js, RESTful API
                <br />
                Linux, Ubuntu
              </div>
            </div>
          </div>
          <div className={classes.profileButtonWrapper}>
            <button className={classes.profileButton}>
              <div className={classes.profileButtonText}>See More</div>
              <div className={classes.svgPlus}>
                <Plus style={{ width: "100%", height: "100%" }}></Plus>
              </div>
            </button>
          </div>
        </div>
        <div className={`${classes.profileImg} ${classes.desktop}`}>
          <Image alt="profile" src={profile} fill quality={100}></Image>
        </div>
      </div>
      <div className={classes.introContainer}>
        <div className={classes.introImg}>
          <Image alt="introImg" src={profileIntro} fill></Image>
        </div>
        <div className={classes.intro}>
          <div className={classes.introTitle}>
            Blue {"'"}sky{"'"} and Colorful House
          </div>
          <div className={classes.introContent}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Acc
            &nbsp;
            <br />
            usamus a itaque velit iusto dicta impedit alias, mollitia
            &nbsp;
            <br />
            Lorem ipsum dolor sit amet consectetur adipisi&nbsp;
            <br />
            <br />
            cing elit. Hic voluptatibus maiores, volupta&nbsp;
            <br />tem, rerum libero nemo molestiae perferendis
            accusantium&nbsp;
            <br />
            cumque magnam
          </div>
          <div
            className={`${classes.introButtonWrapper} ${dmSerifText.className}`}
          >
            <Link href={"/"}>Join Us</Link>
            <button>Donate</button>
          </div>
        </div>
      </div>
      <div className={classes.footerContainer}>
        <SvgIntroductionFooter
          style={{ width: "100%", height: "100%" }}
        ></SvgIntroductionFooter>
      </div>
    </section>
  );
};

export default Final;
