"use client";

import classes from "./page.module.css";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { signUp } from "@/actions/sign-up";
import { pretendard } from "../fonts";
import Logo from "@/public/svgs/Logo.svg";
import {
  isValidEmail,
  isValidName,
  isValidPassword,
  isValidPhone,
  isValidSsm7,
} from "@/utils/user-info-check";
import verifyEmail from "@/actions/verify-email";

export default function SignupOld() {
  const [validName, setValidName] = useState<string>(classes.first);
  const [validSsm7, setValidSsm7] = useState<string>(classes.first);
  const [validEmail, setValidEmail] = useState<string>(classes.first);
  const [validPassword, setValidPassword] = useState<string>(classes.first);
  const [validEmailCode, setVaildEmailCode] = useState<string>(classes.first);
  const [validConfirmPassword, setValidConfirmPassword] = useState<string>(
    classes.first
  );
  const [validPhone, setValidPhone] = useState<string>(classes.first);

  const [emailInputMessage, setEmailInputMessage] = useState<string>("");
  const [emailVerificationCode, setEmailVerificationCode] = useState<
    string | null
  >();
  const [emailCodeInputMessage, setEmailCodeInputMessage] =
    useState<string>("");

  const [timer, setTimer] = useState(180);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const confirmPasswordInputRef = useRef<HTMLInputElement>(null);
  const ssm7InputRef = useRef<HTMLInputElement>(null);
  const emailInputRef = useRef<HTMLInputElement>(null);
  const emailCodeInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  const isFormDataVaild = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    switch (event.target.name) {
      case "name":
        if (isValidName(event.target.value)) {
          console.log(isValidName(event.target.value));
          setValidName(classes.valid);
        } else {
          setValidName(classes.invalid);
        }
        break;
      case "ssm7":
        if (isValidSsm7(event.target.value)) {
          console.log(isValidSsm7(event.target.value));
          setValidSsm7(classes.valid);
        } else {
          setValidSsm7(classes.invalid);
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
      case "phone":
        if (isValidPhone(event.target.value)) {
          console.log(isValidPhone(event.target.value));
          setValidPhone(classes.valid);
        } else {
          setValidPhone(classes.invalid);
        }
        break;
    }
  };

  const handleVerifyEmail = async () => {
    if (!emailInputRef.current || !emailInputRef.current?.value) {
      setValidEmail(classes.invalid);

      return setEmailInputMessage("이메일을 입력하세요.");
    }

    // console.log(emailInputRef.current?.value!);
    // if (!isValidEmail(emailInputRef.current?.value!)) {
    //   setValidEmail(classes.invalid);
    //   return setEmailInputMessage("잘못된 이메일 형식입니다.");
    // }

    // const verificationResult = await verifyEmail(emailInputRef.current?.value!);
    // console.log(verificationResult);
    // if (!verificationResult.verificationCode) {
    //   setValidEmail(classes.invalid);
    //   setEmailVerificationCode(verificationResult.verificationCode);
    // } else {
    //   setValidEmail(classes.valid);
    //   setEmailVerificationCode(verificationResult.verificationCode);
    // }

    // return setEmailInputMessage(verificationResult.message);
  };

  const handleVerifyEmailCode = () => {
    if (timer <= 0) {
      setEmailVerificationCode(null);
      setEmailInputMessage("");
      setTimer(180);
      setVaildEmailCode(classes.invalid);
      setValidEmail(classes.first);
      return setEmailCodeInputMessage(
        "인증시간이 만료되었습니다. 이메일 인증을 다시 하세요."
      );
    }

    if (!emailCodeInputRef.current || !emailCodeInputRef.current?.value) {
      setVaildEmailCode(classes.invalid);

      return setEmailCodeInputMessage("인증번호를 입력하세요.");
    }

    console.log(emailInputRef.current?.value!);
    if (emailCodeInputRef.current?.value! !== emailVerificationCode) {
      setVaildEmailCode(classes.invalid);
      return setEmailCodeInputMessage("잘못된 인증번호입니다.");
    }
    setVaildEmailCode(classes.valid);

    return setEmailCodeInputMessage("인증이 완료되었습니다.");
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (validEmail === classes.valid) {
      timer = setInterval(() => {
        setTimer((prevTime) => {
          const currentTime = prevTime - 1;
          if (currentTime === 0) {
            clearInterval(timer);
          }
          return currentTime;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [validEmail]);

  return (
    <main className={`${classes.main} ${pretendard.className}`}>
      <form className={classes.form} action={signUp}>
        <div className={classes.titleBox}>
          <div className={classes.title}>3초만에 회원가입</div>
        </div>
        <label className={classes.label} htmlFor="email">
          이메일(아이디)<span className={classes.span}> *</span>
        </label>
        <div className={`${classes.inputBox} ${validEmail}`}>
          <input
            className={classes.emailInput}
            type="email"
            id="email"
            required
            ref={emailInputRef}
            name="email"
            placeholder="이메일을 입력하세요. example@mail.com"
            autoComplete="no"
            spellCheck="false"
            maxLength={80}
          />
          <button
            type="button"
            className={classes.emailButton}
            onClick={handleVerifyEmail}
            disabled={emailVerificationCode ? true : false}
          >
            이메일 인증
          </button>
        </div>
        <div
          className={`${classes.message} ${
            validEmail === classes.valid ? classes.correct : classes.error
          }`}
        >
          {emailInputMessage}
          {validEmail === classes.valid ? `, 남은 시간 ${timer} 초` : null}
        </div>
        <label className={classes.label} htmlFor="emailCode">
          이메일 인증번호 입력<span className={classes.span}> *</span>
        </label>
        <div className={`${classes.inputBox} ${validEmailCode}`}>
          <input
            className={classes.emailCodeInput}
            type="string"
            id="emailCode"
            required
            ref={emailCodeInputRef}
            name="emailCode"
            placeholder="이메일로 전송된 6자리의 인증번호를 입력하세요."
            autoComplete="no"
            spellCheck="false"
            maxLength={6}
          />
          <button
            type="button"
            className={classes.emailCodeButton}
            onClick={handleVerifyEmailCode}
            disabled={validEmailCode === classes.valid ? true : false}
          >
            인증
          </button>
        </div>
        <div
          className={`${classes.message} ${
            validEmailCode === classes.valid ? classes.correct : classes.error
          }`}
        >
          {emailCodeInputMessage}
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
          placeholder="8자리 이상의 영문 대/소문자, 숫자, 특수문자 조합"
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
            : "8글자 이상, 알파벳과 숫자 및 특수문자(@$!%*#?&) 각 하나 이상 포함"}
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
        <button
          className={classes.button}
          disabled={
            !(
              validPhone === classes.valid &&
              validEmail === classes.valid &&
              validName === classes.valid &&
              validSsm7 === classes.valid &&
              validEmailCode === classes.valid &&
              validPassword === classes.valid &&
              validConfirmPassword === classes.valid &&
              validPhone === classes.valid
            )
          }
          type="submit"
        >
          가입하기
        </button>
      </form>
    </main>
  );
}
// async function submitHandler(event: FormEvent<HTMLFormElement>) {
//   event.preventDefault();

//   if (
//     !usernameInputRef.current ||
//     !passwordInputRef.current ||
//     !nameInputRef.current ||
//     !emailInputRef.current ||
//     !birthdateInputRef.current ||
//     !maleInputRef.current ||
//     !femaleInputRef.current
//   )
//     return;

//   const enteredUsername = usernameInputRef.current.value;
//   const enteredPassword = passwordInputRef.current.value;
//   const enteredName = nameInputRef.current.value;
//   const enteredEmail = emailInputRef.current.value;
//   const enteredBirthdate = birthdateInputRef.current.value;
//   const enteredGender: Gender = maleInputRef.current.checked
//     ? Gender.MALE
//     : Gender.FEMALE;
//   if (
//     !enteredEmail ||
//     !enteredEmail.includes("@") ||
//     !enteredPassword ||
//     enteredPassword.trim().length < 7
//   ) {
//     return;
//   }
//   const data: User = {
//     auth: {
//       username: enteredUsername,
//       password: enteredPassword,
//     },
//     profile: {
//       name: enteredName,
//       email: enteredBirthdate,
//       birthdate: new Date(enteredBirthdate),
//       gender: enteredGender,
//     },
//   };
//   console.log(data);
//   // optional: Add validation
//   try {
//     const result = await createUser(data);
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }
// async function createUser( user : User) {
//   const response = await fetch("/api/user", {
//     method: "POST",
//     body: JSON.stringify(user),
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//   });
//   console.log("response까지 보냄");

//   const data = await response.json();

//   console.log("data까지 받음");

//   if (!response.ok) {
//     throw new Error(data.message || "Something went wrong!");
//   }

//   return data;
// }

{
  /* <div className={classes.rowBox}>
                        <div className={classes.columnBox}>
                          <label className={classes.label} htmlFor="name">
                            실명<span className={classes.span}> *</span>
                          </label>
                          <input
                            className={`${classes.input} ${validName}`}
                            type="text"
                            id="name"
                            required
                            ref={nameInputRef}
                            name="name"
                            onChange={isFormDataVaild}
                            placeholder="홍길동"
                            autoComplete="off"
                            spellCheck="false"
                            minLength={2}
                            maxLength={19}
                          />
                          <div
                            className={`${classes.message} ${
                              validName === classes.valid ? classes.correct : classes.error
                            }`}
                          >
                            {validName === classes.first
                              ? null
                              : validName === classes.valid
                              ? "유효한 실명입니다."
                              : "잘못된 실명 형식입니다."}
                          </div>
                        </div>
                        <div className={classes.columnBox}>
                          <label className={classes.label} htmlFor="ssm7">
                            주민번호 앞 7자리<span className={classes.span}> *</span>
                          </label>
                          <input
                            className={`${classes.input} ${validSsm7}`}
                            type="text"
                            id="ssm7"
                            required
                            ref={ssm7InputRef}
                            name="ssm7"
                            onChange={isFormDataVaild}
                            spellCheck="false"
                            minLength={7}
                            maxLength={7}
                            placeholder="9001011"
                            autoComplete="off"
                            />
                            <div
                            className={`${classes.message} ${
                              validSsm7 === classes.valid ? classes.correct : classes.error
                            }`}
                            >
                            {validSsm7 === classes.first
                              ? null
                              : validSsm7 === classes.valid
                              ? "유효한 주민번호입니다."
                              : "잘못된 주민번호입니다."}
                          </div>
                        </div>
                      </div> */
}
{
  /* <label className={classes.label} htmlFor="phone">
                                전화번호<span className={classes.span}> *</span>
                              </label>
                              <input
                                className={`${classes.input} ${validPhone}`}
                                type="tel"
                                id="phone"
                                required
                                ref={phoneInputRef}
                                name="phone"
                                onChange={isFormDataVaild}
                                autoComplete="off"
                                spellCheck="false"
                                minLength={10}
                                maxLength={11}
                                placeholder="01012345678"
                                />
                              <div
                                className={`${classes.message} ${
                                  validPhone === classes.valid ? classes.correct : classes.error
                                }`}
                                >
                                {validPhone === classes.first
                                  ? null
                                  : validPhone === classes.valid
                                  ? "유효한 전화번호입니다."
                                  : "최소 10자리, -없이 입력해주세요."}
                              </div> */
}
