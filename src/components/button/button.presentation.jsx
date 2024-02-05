import React from "react";
import styles from "./button.module.scss";

function Button(props) {
  const buttonFunction = props.onClick;
  const buttonParameter = props.buttonParameter || undefined;
  return (
    <button
      className={styles[props.style]}
      onClick={() => buttonFunction(buttonParameter)}
    >
      {props.text}
    </button>
  );
}

export default Button;
