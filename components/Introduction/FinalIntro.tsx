import { pretendard } from "@/app/fonts";
import classes from "./FinalIntro.module.css";

const FinalIntro = () => {
  return (
    <section className={`${classes.section} ${pretendard.className}`}>
      <div>Lorem ipsum dolor</div>
      <div>&quot;sit amet consectetur&quot;</div>
    </section>
  );
};

export default FinalIntro;
