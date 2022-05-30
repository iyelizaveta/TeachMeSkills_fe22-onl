import React from "react";
import { useState } from "react";
import { Email } from "../../form/inputs/email-input/Email";
import { Password } from "../../form/inputs/password-input/Password";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./LoginPage.module.css";

type LoginPageProps = {
  //   children: ReactNode;
};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const emailRef = React.createRef<HTMLInputElement>();
  const passwordRef = React.createRef<HTMLInputElement>();
  return (
    <div className={styles.container}>
      <WelcomeTemplate
        title={
          <Title>
            Login | <span> Registration </span>
          </Title>
        }
        actionButton={
          <PrimaryButton className={styles.button}>Login</PrimaryButton>
        }
        description={
          <p>
            Forgot your password?{" "}
            <span className={styles.log}>Reset password</span>
          </p>
        }
      >
        <Email
          ref={emailRef}
          label={<span>Email</span>}
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        ></Email>
        <Password
          ref={passwordRef}
          label={<span>Password</span>}
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
      </WelcomeTemplate>
    </div>
  );
};
