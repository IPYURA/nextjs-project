import { signIn } from "next-auth/react";
import classes from "./SocialLogin.module.css";
import { pretendard } from "@/app/fonts";
import Naver from "@/public/svgs/naver.svg";
import Google from "@/public/svgs/google.svg";
import Kakao from "@/public/svgs/kakao.svg";

const SocialLogin = ({ title }: { title: string }) => {
  const loginNaver = async () => {
    await signIn("naver", { redirect: true, callbackUrl: "/" });
  };

  const loginGoogle = async () => {
    await signIn("google", { redirect: true, callbackUrl: "/" });
  };

  const loginKakao = async () => {
    await signIn("kakao", { redirect: true, callbackUrl: "/" });
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>{title}</div>
      <div className={`${classes.buttonBox} ${pretendard.className}`}>
        <button
          className={`${classes.button} ${classes.google}`}
          onClick={loginGoogle}
        >
          <div className={classes.box}>
            <Google width={28} height={28}></Google>
            <p className={classes.text}>구글로 시작하기</p>
          </div>
        </button>
        <button
          className={`${classes.button} ${classes.naver}`}
          onClick={loginNaver}
        >
          <div className={classes.box}>
            <Naver width={28} height={28}></Naver>
            <p className={classes.text}>네이버로 시작하기</p>
          </div>
        </button>
        <button
          className={`${classes.button} ${classes.kakao}`}
          onClick={loginKakao}
        >
          <div className={classes.box}>
            <Kakao width={28} height={28}></Kakao>
            <p className={classes.text}>카카오로 시작하기</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
