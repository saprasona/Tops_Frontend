import { MdMessage } from "react-icons/md";
import styles from "./Button.module.css";

function Button(props) {
  const { isOutline, icon, text, ...rest } = props;
  return (
    <button {...rest} className={isOutline ? styles.outline_btn : styles.primary_btn}>
      {icon}
      {text}
    </button>
  );
  // return (
  //   <button className={props.isOutline ? styles.outline_btn : styles.primary_btn}>
  //     {props.icon}
  //     {props.text}
  //   </button>
  // );     second method
};

export default Button;
