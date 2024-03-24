"use client";

import classes from "./page.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { signUp } from "@/actions/sign-up";
import { pretendard } from "../fonts";
import { isValidEmail, isValidPassword } from "@/utils/user-info-check";
import verifyEmail from "@/actions/verify-email";
import SocialLogin from "@/components/Auth/SocialLogin";
import Or from "@/components/Auth/Or";
import CheckBox from "@/components/UI/CheckBox";
import LongFormButton from "@/components/UI/LongFormButton";

export default function Signup() {
  const mounted = useRef(false);
  const [validEmail, setValidEmail] = useState<string>(classes.first);
  const [validPassword, setValidPassword] = useState<string>(classes.first);
  const [validConfirmPassword, setValidConfirmPassword] = useState<string>(
    classes.first
  );
  const [validAgreement, setValidAgreement] = useState<string>(classes.first);

  const [allCheck, setAllCheck] = useState<boolean>(false);
  const [useCheck, setUseCheck] = useState<boolean>(false);
  const [collectCheck, setCollectCheck] = useState<boolean>(false);
  const [marketingCheck, setMarketingCheck] = useState<boolean>(false);

  const [isEmailOverlap, setIsEmailOverlap] = useState<boolean>(true);
  const [emailInputMessage, setEmailInputMessage] = useState<string>("");

  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);

  const isFormDataVaild = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.name) {
      case "email":
        if (!isEmailOverlap) {
          setIsEmailOverlap(true);
        }
        if (isValidEmail(event.target.value)) {
          setValidEmail(classes.first);
          setEmailInputMessage("중복 확인을 눌러주세요.");
        } else {
          setValidEmail(classes.invalid);
          setEmailInputMessage("잘못된 이메일 형식입니다.");
        }
        break;
      case "password":
        if (isValidPassword(event.target.value)) {
          console.log(isValidPassword(event.target.value));
          setValidPassword(classes.valid);
        } else {
          setValidPassword(classes.invalid);
        }
        if (event.target.value === confirmPasswordInputRef.current?.value) {
          setValidConfirmPassword(classes.valid);
        } else {
          setValidConfirmPassword(classes.invalid);
        }
        break;
      case "confirmPassword":
        if (event.target.value === passwordInputRef.current?.value) {
          console.log(isValidPassword(event.target.value));
          setValidConfirmPassword(classes.valid);
        } else {
          setValidConfirmPassword(classes.invalid);
        }
        break;
    }
  };

  const handleVerifyEmail = async () => {
    if (!isValidEmail(emailInputRef.current?.value!)) {
      setValidEmail(classes.invalid);
      return setEmailInputMessage("올바른 이메일을 입력해주세요.");
    }

    const verificationResult = await verifyEmail(emailInputRef.current?.value!);
    console.log(verificationResult);
    if (!verificationResult.ok) {
      setValidEmail(classes.invalid);
      setIsEmailOverlap(true);
    } else {
      setValidEmail(classes.valid);
      setIsEmailOverlap(false);
    }

    return setEmailInputMessage(verificationResult.message);
  };

  const allBtnEvent = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setCollectCheck(true);
      setUseCheck(true);
      setMarketingCheck(true);
    } else {
      setAllCheck(false);
      setCollectCheck(false);
      setUseCheck(false);
      setMarketingCheck(false);
    }
  };

  const ageBtnEvent = () => {
    if (collectCheck === false) {
      setCollectCheck(true);
    } else {
      setCollectCheck(false);
    }
  };

  const useBtnEvent = () => {
    if (useCheck === false) {
      setUseCheck(true);
    } else {
      setUseCheck(false);
    }
  };

  const marketingBtnEvent = () => {
    if (marketingCheck === false) {
      setMarketingCheck(true);
    } else {
      setMarketingCheck(false);
    }
  };

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (collectCheck === true && useCheck === true) {
        setValidAgreement(classes.valid);
      } else {
        setValidAgreement(classes.invalid);
      }
    }

    if (collectCheck === true && useCheck === true && marketingCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [collectCheck, useCheck, marketingCheck]);

  return (
    <main className={`${classes.main} ${pretendard.className}`}>
      <div className={classes.container}>
        <SocialLogin title="3초만에 회원가입"></SocialLogin>
        <Or></Or>
        <form className={classes.form} action={signUp}>
          <div className={classes.title}>이메일 회원가입</div>
          <label className={classes.label} htmlFor="email">
            이메일&#40;아이디&#41;<span className={classes.span}> *</span>
          </label>
          <div className={`${classes.inputBox} ${validEmail}`}>
            <input
              className={classes.emailInput}
              type="email"
              id="email"
              required
              ref={emailInputRef}
              name="email"
              placeholder="example@mail.com"
              autoComplete="off"
              spellCheck="false"
              maxLength={80}
              onChange={isFormDataVaild}
            />
            <button
              type="button"
              className={classes.emailButton}
              onClick={handleVerifyEmail}
              disabled={!isEmailOverlap ? true : false}
            >
              {!isEmailOverlap ? "사용 가능" : "중복 확인"}
            </button>
          </div>
          <div
            className={`${classes.message} ${
              validEmail === classes.valid ? classes.correct : classes.error
            }`}
          >
            {emailInputMessage}
          </div>
          <label className={classes.label} htmlFor="password">
            비밀번호<span className={classes.span}> *</span>
          </label>
          <input
            className={`${classes.input} ${validPassword}`}
            type="password"
            id="password"
            required
            ref={passwordInputRef}
            name="password"
            placeholder="8자리 이상의 영문, 숫자, 특수문자 조합"
            autoComplete="new-passowrd"
            onChange={isFormDataVaild}
            minLength={8}
            maxLength={50}
          />
          <div
            className={`${classes.message} ${
              validPassword === classes.valid ? classes.correct : classes.error
            }`}
          >
            {validPassword === classes.first
              ? null
              : validPassword === classes.valid
              ? "유효한 비밀번호입니다."
              : "8자 이상, 영문과 숫자 및 (@$!%*#?&) 각 하나 이상씩 포함"}
          </div>
          <label className={classes.label} htmlFor="confirmPassword">
            비밀번호 확인<span className={classes.span}> *</span>
          </label>
          <input
            className={`${classes.input} ${validConfirmPassword}`}
            type="password"
            id="confirmPassword"
            required
            ref={confirmPasswordInputRef}
            name="confirmPassword"
            placeholder="비밀번호를 똑같이 입력하세요."
            autoComplete="new-passowrd"
            onChange={isFormDataVaild}
            minLength={8}
            maxLength={50}
          />
          <div
            className={`${classes.message} ${
              validConfirmPassword === classes.valid
                ? classes.correct
                : classes.error
            }`}
          >
            {validConfirmPassword === classes.first
              ? null
              : validConfirmPassword === classes.valid
              ? "같은 비밀번호입니다."
              : "다른 비밀번호입니다."}
          </div>
          <div className={classes.agreementContainer}>
            <div className={classes.agreementAll}>
              <CheckBox
                id={"all-check"}
                checked={allCheck}
                size={24}
                borderColor="2b2f2f"
                onChange={allBtnEvent}
              ></CheckBox>
              <div className={classes.agreementAllText}>전체 동의</div>
            </div>
            <div className={classes.agreementList}>
              <div className={classes.agreementItem}>
                <div className={classes.agreementBox}>
                  <CheckBox
                    id={"check1"}
                    checked={collectCheck}
                    size={20}
                    borderColor="2b2f2f"
                    onChange={ageBtnEvent}
                  ></CheckBox>
                  <div className={classes.agreementItemText}>
                    &#40;필수&#41; 서비스이용약관에 동의합니다.
                  </div>
                </div>
                <div className={classes.agreeContent}>보기</div>
              </div>
              <div className={classes.agreementItem}>
                <div className={classes.agreementBox}>
                  <CheckBox
                    id={"check2"}
                    checked={useCheck}
                    size={20}
                    borderColor="2b2f2f"
                    onChange={useBtnEvent}
                  ></CheckBox>
                  <div className={classes.agreementItemText}>
                    &#40;필수&#41; 개인정보 수<span>집・</span>이용에
                    동의합니다.
                  </div>
                </div>
                <div className={classes.agreeContent}>보기</div>
              </div>
              <div className={classes.agreementItem}>
                <div className={classes.agreementBox}>
                  <CheckBox
                    id={"check3"}
                    checked={marketingCheck}
                    size={20}
                    borderColor="2b2f2f"
                    onChange={marketingBtnEvent}
                  ></CheckBox>
                  <div className={classes.agreementItemText}>
                    &#40;선택&#41; 광고 및 마케팅 정보 수신에 동의합니다.
                  </div>
                </div>
                <div className={classes.agreeContent}></div>
              </div>
            </div>
          </div>
          <div
            className={`${classes.message} ${
              validAgreement === classes.valid ? classes.correct : classes.error
            }`}
          >
            {validAgreement === classes.first
              ? null
              : validAgreement === classes.valid
              ? "필수 동의가 되었습니다."
              : "필수 동의를 체크해주세요."}
          </div>
          <LongFormButton
            disabled={
              !(
                validEmail === classes.valid &&
                validPassword === classes.valid &&
                validConfirmPassword === classes.valid &&
                useCheck &&
                collectCheck &&
                !isEmailOverlap
              )
            }
          >
            가입하기
          </LongFormButton>
        </form>
      </div>
    </main>
  );
}
