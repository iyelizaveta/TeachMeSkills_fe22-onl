import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Email } from "../../ui/form/inputs/email-input/Email";
import { Password } from "../../ui/form/inputs/password-input/Password";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { AppPages } from "../../types";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./LoginPage.module.css";
import { useAppDispatch } from "../../hooks";
import { login } from "../../features/auth";

type LoginPageProps = {};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  const dispatch = useAppDispatch();
  return (
    <WelcomeTemplate
      className={styles.container}
      title={
        <Title>
          Login |{" "}
          <Link to={AppPages.REGISTRATION}>
            <span className={styles.label}> Registration </span>
          </Link>
        </Title>
      }
      description={
        <p>
          Forgot your password?{" "}
          <span className={styles.log}>Reset password</span>
        </p>
      }
    >
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(login({ email: emailValue, password: passwordValue }));
          console.log(e);
        }}
      >
        <Email
          ref={emailRef}
          label={<span className={styles.label}>Email</span>}
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        ></Email>
        <Password
          ref={passwordRef}
          label={<span className={styles.label}>Password</span>}
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        ></Password>
        <PrimaryButton
          onClick={() => {
            setEmailValue("");
            setPasswordValue("");
            emailRef.current?.focus();
          }}
          className={styles.button}
        >
          Reset
        </PrimaryButton>
        <PrimaryButton className={styles.button} type="submit">
          Login
        </PrimaryButton>
      </form>
    </WelcomeTemplate>
  );
};
