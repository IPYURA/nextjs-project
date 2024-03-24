import classes from "./ScrollDown.module.css";

const ScrollDown = ({isHidden} : {isHidden:boolean}) => {
  return (
    <div className={`${classes.container} ${isHidden ? classes.hidden : ""}`}>
      <div className={classes.chevron}></div>
      <div className={classes.chevron}></div>
      <div className={classes.chevron}></div>
      <span className={classes.text}>Scroll down</span>
    </div>
  );
};

export default ScrollDown;
