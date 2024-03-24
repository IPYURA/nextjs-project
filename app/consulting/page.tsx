"use client";

import classes from "./page.module.css";
import MokStdRequest from "@/components/MobileOk/mok_react_index";

export default function Consulting() {
  return (
    <>
      <main className={classes.main}>
        <h1>Consulting</h1>
        <MokStdRequest></MokStdRequest>
      </main>
    </>
  );
}
