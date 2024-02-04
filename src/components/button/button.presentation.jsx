import React from "react";
import styles from "./button.module.scss";

function Button(props) {
  return (
    <button className={styles[props.style]} onClick={props.onClick}>
      {props.text}
    </button>
  );
}

export default Button;
