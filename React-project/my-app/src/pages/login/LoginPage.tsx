import { useState } from "react";
import { Email } from "../../form/inputs/email-input/Email";
import { Password } from "../../form/inputs/password-input/Password";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./LoginPage.module.css";

type LoginPageProps = {
  //   children: ReactNode;
};

export const LoginPage: React.FC<LoginPageProps> = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className={styles.container}>
      <h2>
        <span>Login</span> | Registration
      </h2>
      <Email
        label={<span>Email</span>}
        value={emailValue}
        onChange={(event) => setEmailValue(event.target.value)}
      ></Email>
      <Password
        label={<span>Password</span>}
        value={passwordValue}
        onChange={(event) => setPasswordValue(event.target.value)}
      ></Password>
      <PrimaryButton className={styles.button}>Login</PrimaryButton>
      <p>
        Forgot your password? <span>Reset password</span>
      </p>
    </div>
  );
};
