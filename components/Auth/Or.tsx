import { aclonica } from "@/app/fonts";
import classes from "./Or.module.css"

const Or = () => {
  return (
    <div className={classes.container}>
      <hr className={classes.hr}></hr>
      <div className={`${classes.or} ${aclonica.className}`}>또는</div>
    </div>
  );
};

export default Or;
