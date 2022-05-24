import { Title } from "../../ui/title/Title";
import { useState } from "react";
import { Email } from "../../form/inputs/email-input/Email";
import { Password } from "../../form/inputs/password-input/Password";
import { TextInput } from "../../form/inputs/text-input/TextInput";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./RegistrationPage.module.css";

type RegistrationPageProps = {
  //   children: ReactNode;
};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  return (
    <div className={styles.container}>
      <WelcomeTemplate
        title={
          <Title>
            Login | <span>Registration</span>
          </Title>
        }
        actionButton={
          <PrimaryButton className={styles.button}>Login</PrimaryButton>
        }
        description={
          <p>
            If you have account you can{" "}
            <span className={styles.log}>Login</span>
          </p>
        }
      >
        <TextInput
          label={<span>User name</span>}
          value={textInputValue}
          onChange={(event) => setTextInputValue(event.target.value)}
        ></TextInput>
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
        <Password
          label={<span>Confirm password</span>}
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        ></Password>
      </WelcomeTemplate>
    </div>
  );
};
