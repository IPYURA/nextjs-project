import { ReactNode } from "react";
import classes from "./LongFormButton.module.css";

const LongFormButton = ({
  disabled,
  children,
}: {
  disabled: boolean;
  children: React.ReactNode;
}) => {
  return (
    <button className={classes.button} disabled={disabled}>
      {/* <button className={classes.button} disabled={disabled} type="submit"> */}
      {children}
    </button>
  );
};

export default LongFormButton;
