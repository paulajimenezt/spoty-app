import React from "react";
import styles from "./login-screen.module.scss";
import Button from "../button/button.presentation";
import { authorize } from "../../scripts/spotify.authorization"

const Login = () => {
  return (
    <div className={styles.loginContainer}>
    <div className={styles.login}>
      <h1 className={styles.title}>Welcome to the app</h1>
      <span>Please Log in with Spotify to continue</span>
      <div className={styles.buttonContainer}>
        <Button onClick={authorize} text="Login" buttonStyle="loginButton" />
      </div>
    </div>
    </div>
  );
};

export default Login;
