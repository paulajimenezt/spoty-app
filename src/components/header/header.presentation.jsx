import React from "react";
import styles from "./header.module.scss";
import Button from "../button/button.presentation";
import { authorize } from "../../scripts/spotify.authorization";

function HeaderView() {
  return (
    <header>
      <h1>Spoty-App</h1>
      <div className= {styles.buttonContainer}>
        <Button onClick={authorize} text="Login" style="loginButton" />
      </div>
    </header>
  );
}

export default HeaderView;
