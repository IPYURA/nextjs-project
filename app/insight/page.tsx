import Academy from "@/components/Insight/Academy";
import classes from "./page.module.css";
import Banner from "@/components/Insight/Banner";
import Book from "@/components/Insight/Book";

export default function Insight() {

  return (
    <main className={classes.main}>
      <Banner></Banner>
      <Book></Book>
      <Academy></Academy>
    </main>
  );
}