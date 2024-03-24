import classes from "./Spinner.module.css";

const Spinner = ({ width, height }: { width: string; height: string }) => {
  return (
    <>
      <span className={classes.loader}
      style={{width: `${width}`, height: `${height}`}}></span>
    </>
  );
};

export default Spinner;
