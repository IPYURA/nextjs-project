import classes from "./page.module.css";
import { pretendard } from "@/app/fonts";
import Banner from "@/components/Payment/Billing/Banner";
import BillingForm from "@/components/Payment/Billing/BillingForm";
import AuthSessionProvider from "@/components/Provider/AuthSessionProvider";
import { getServerAuthSession } from "@/libs/auth";

export default async function Billing() {
  const authSession = await getServerAuthSession();

  return (
    <main className={classes.main}>
      <div className={classes.box}>
        <Banner authSession={authSession}></Banner>
        <div className={`${classes.title} ${pretendard.className}`}>
          * 혜택 3&#41; 서비스 결제시 고객센터 상담원에게 서포터즈 멤버라는 사실을
          전달해주시기 바랍니다.
        </div>
      </div>
      <AuthSessionProvider authSession={authSession}>
        <BillingForm></BillingForm>
      </AuthSessionProvider>
    </main>
  );
}
