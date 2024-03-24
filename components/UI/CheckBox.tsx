import classes from "./CheckBox.module.css";

const CheckBox = ({
  id,
  checked,
  size,
  borderColor,
  onChange,
}: {
  id: string;
  checked: boolean;
  size: number;
  borderColor: string;
  onChange: () => void;
}) => {
  return (
    <div className={classes.box}>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} name={id}/>
      <label
        htmlFor={id}
        style={{
          width: `${size / 10}rem`,
          height: `${size / 10}rem`,
          fontSize: `${size / 10}rem`,
          border: `0.2rem solid #${borderColor}`,
        }}
      >
        <div
          className={classes.ckeck}
          style={{
            visibility: checked ? "visible" : "hidden",
            width: `${size / 20}rem`,
            height: `${size / 20}rem`,
          }}
        ></div>
      </label>
    </div>
  );
};

export default CheckBox;
