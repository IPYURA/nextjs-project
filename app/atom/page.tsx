import classes from "./page.module.css";
import Banner from "@/components/Atom/Banner";
import Subscription from "@/components/Atom/Subscription";

export default function Atom() {
  

  return (
    <main className={classes.main}>
      <Banner></Banner>
      <Subscription></Subscription>
    </main>
  );
}
