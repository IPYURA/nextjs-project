"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, FormEvent, useState } from "react";
import classes from "./page.module.css";
import { pretendard } from "../fonts";
import Or from "@/components/Auth/Or";
import SocialLogin from "@/components/Auth/SocialLogin";
import LongFormButton from "@/components/UI/LongFormButton";

type LoginInput = {
  email: string;
  password: string;
};

type PageProps = {
  searchParams: { error?: string };
};

export default function Login({ searchParams }: PageProps) {
  const [inputs, setInputs] = useState<LoginInput>({
    email: "",
    password: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    // await signIn("credentials", {
    //   username: inputs.email,
    //   password: inputs.password,
    //   callbackUrl: "/",
    // });
  };

  return (
    <main className={`${classes.main} ${pretendard.className}`}>
      <div className={classes.container}>
        <SocialLogin title="간편 로그인"></SocialLogin>
        <Or></Or>
        <form className={classes.form} onSubmit={handleSubmit}>
          <div className={classes.title}>직접 로그인</div>
          <label className={classes.label} htmlFor="email">
            이메일&#40;아이디&#41;<span className={classes.span}> *</span>
          </label>
          <input
            className={classes.input}
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            required
            spellCheck="false"
            placeholder="example@mail.com"
            value={inputs.email || ""}
            maxLength={80}
            onChange={handleChange}
          />
          <label className={classes.label} style={{marginTop: "2.4rem"}} htmlFor="password">
            비밀번호<span className={classes.span}> *</span>
          </label>
          <input
            className={classes.input}
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            required
            placeholder="비밀번호을 입력하세요."
            value={inputs.password || ""}
            onChange={handleChange}
            style={{marginBottom: "2.4rem"}}
          />
          <LongFormButton disabled={false}>로그인</LongFormButton>
          {searchParams.error && <p>Login failed.</p>}
        </form>
      </div>
    </main>
  );
}
