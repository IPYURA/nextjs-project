import { pretendard } from "@/app/fonts";
import classes from "./SubTitle.module.css";

const SubTitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${classes.text} ${pretendard.className}`}>{children}</div>
  );
};

export default SubTitle;
