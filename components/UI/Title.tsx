import { dmSerifText } from "@/app/fonts";
import classes from "./Title.module.css";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${classes.text} ${dmSerifText.className}`}>{children}</div>
  );
};

export default Title;
