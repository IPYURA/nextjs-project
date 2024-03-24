import { dmSerifText, pretendard } from "@/app/fonts";
import classes from "./Subscription.module.css";
import Arrow from "@/public/svgs/Arrow.svg";
import Link from "next/link";
import { getServerAuthSession } from "@/libs/auth";

const Subscription = async () => {
  const authSession = await getServerAuthSession();

  return (
    <div className={classes.subscription}>
      <div className={classes.subscriptionBox}>
        <div className={`${classes.box} ${classes.free}`}>
          <div className={`${classes.topBox} ${classes.free}`}>
            <div className={classes.titleBox}>
              <div className={`${classes.title} ${dmSerifText.className}`}>
                Free
              </div>
              <div className={`${classes.subTitle} ${pretendard.className}`}>
                Use Contents for Free
              </div>
            </div>
            <a href="#" target="_blank">
              <div className={`${classes.arrow}`}>
                <Arrow style={{ width: "100%", height: "100%" }}></Arrow>
              </div>
            </a>
          </div>
          <div className={classes.bottomBox}>
            <ul className={`${classes.textList} ${pretendard.className}`}>
              <li>Colors and Memory</li>
            </ul>
          </div>
        </div>
        <div className={`${classes.box} ${classes.premium}`}>
          <div className={`${classes.topBox} ${classes.premium}`}>
            <div className={classes.titleBox}>
              <div className={`${classes.title} ${dmSerifText.className}`}>
                Premium
              </div>
              <div className={`${classes.subTitle} ${pretendard.className}`}>
                Premium Content Subscription
              </div>
            </div>
            {authSession?.user.userType === "premium" ? (
              <a href="#" target="_blank">
                <div className={`${classes.arrow}`}>
                  <Arrow style={{ width: "100%", height: "100%" }}></Arrow>
                </div>
              </a>
            ) : (
              <Link href="#">
                <div className={`${classes.arrow}`}>
                  <Arrow style={{ width: "100%", height: "100%" }}></Arrow>
                </div>
              </Link>
            )}
          </div>
          <div className={classes.bottomBox}>
            <ul className={`${classes.textList} ${pretendard.className}`}>
              <li>Colors and Creativity</li>
              <li>Enchantment of Colors</li>
              <li>Embrace of Color Diversity</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={`${classes.postscript} ${pretendard.className}`}>
        * 사용자 경험 최적화를 위해 지속적으로 서비스를 개선할 예정입니다.
      </div>
    </div>
  );
};

export default Subscription;
