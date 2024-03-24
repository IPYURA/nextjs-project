import classes from "./Footer.module.css";
import MyLogo from "@/public/svgs/myLogo.svg";
import MyTitle from "@/public/svgs/myTitle.svg";
import { pretendard } from "@/app/fonts";
import CustomerService from "@/public/svgs/customer-service.svg";

const Footer = () => {
  return (
    <footer className={`${pretendard.className} ${classes.container}`}>
      <div className={classes.box}>
        <div className={classes.logoBox}>
          <div className={classes.svgLogo}>
            <MyLogo style={{ width: "100%", height: "100%" }}></MyLogo>
          </div>
          <div className={classes.svgTitle}>
            <MyTitle style={{ width: "100%", height: "100%" }}></MyTitle>
          </div>
        </div>
        <div className={classes.infoBox}>
          <div className={classes.info}>지원자 : 조동건</div>
          <div className={classes.info}>
            &#40;01780&#41; 서울특별시 노원구 섬밭로
            <span> | </span>
            <br />
            대표번호 : 0123-4567-89
          </div>
        </div>
      </div>
      <div className={classes.box}>
        <div className={classes.linkBox}>
          <a href="/" target="_blank" title="서비스 이용약관">
            서비스 이용약관
          </a>
          <a href="/" target="_blank" title="서비스 이용약관">
            개인정보처리방침
          </a>
          <a href="/" target="_blank" title="서비스 이용약관">
            광고 및 마케팅 정보 수신
          </a>
        </div>
        <div className={classes.email}>cdg.website@abc.de</div>
        <a href="/" target="_blank" className={classes.customerService}>
          <div className={classes.svgCustomerService}>
            <CustomerService
              style={{ width: "100%", height: "100%" }}
            ></CustomerService>
          </div>
          <div className={classes.customerServiceText}>고객센터 연결하기</div>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
