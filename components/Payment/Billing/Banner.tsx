import classes from "./Banner.module.css";
import Image from "next/image";
import { pretendard } from "@/app/fonts";
import eopSupporters from "@/public/images/eop-supporters.webp";
import { Session } from "next-auth";

const Banner = ({
  authSession,
}: {
  authSession: Session | null;
}) => {
  return (
    <div className={classes.banner}>
      <Image className={classes.background} src={eopSupporters} alt="subscriber-benefit" fill priority></Image>
      <div className={classes.overlay}>
        <div className={`${classes.bannerBox} ${pretendard.className}`}>
          <div className={classes.bannerTitle}>
            EoP 서포터즈 전용서비스
          </div>
          <div className={classes.bannerName}>
            {authSession?.user.name}님!
          </div>
          <div className={classes.greeting}>
            EoP 서포터즈 멤버쉽에 가입해주신다면<br/>더욱 높은 가치들로 보답하겠습니다.
          </div>
          <div className={classes.benefit}>❖ EoP Insight 정기구독 혜택 ❖</div>
          <div className={classes.benefitBox}>
            <div>혜택 1&#41; Atomic Insight 프리미엄 채널</div>
            <div>혜택 2&#41; Webinar 무제한 참가 가능</div>
            <div>혜택 3&#41; Book, Academy, Consulting 서포터즈 특별가 적용</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
