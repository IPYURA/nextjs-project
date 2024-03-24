import { pretendard } from "@/app/fonts";
import classes from "./TargetItem.module.css";

const TargetItem = ({
  title,
  content,
  children,
}: {
  title: string;
  content: string | React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className={`${classes.container} ${pretendard.className}`}>
      <div className={classes.logoBox}>{children}</div>
      <div className={classes.textBox}>
        <div className={classes.title}>{title}</div>
        <div className={classes.content}>{content}</div>
      </div>
    </div>
  );
};

export default TargetItem;
