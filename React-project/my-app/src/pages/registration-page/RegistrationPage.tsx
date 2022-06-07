import { Title } from "../../ui/title/Title";
import { useState } from "react";
import { Email } from "../../ui/form/inputs/email-input/Email";
import { Password } from "../../ui/form/inputs/password-input/Password";
import { TextInput } from "../../ui/form/inputs/text-input/TextInput";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./RegistrationPage.module.css";
import { Link, useNavigate } from "react-router-dom";
import { AppPages } from "../../types";

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [textInputValue, setTextInputValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <WelcomeTemplate
        title={
          <Title>
            <Link to={AppPages.LOGIN}>
              <span className={styles.label}>Login</span>
            </Link>{" "}
            | Registration
          </Title>
        }
        actionButton={
          <PrimaryButton
            className={styles.button}
            onClick={() => navigate(AppPages.SUCCESS_PAGE)}
          >
            Registration
          </PrimaryButton>
        }
        description={
          <p>
            If you have account you can{" "}
            <Link to={AppPages.LOGIN}>
              <span className={styles.log}>Login</span>
            </Link>
          </p>
        }
      >
        <TextInput
          label={<span className={styles.label}>User name</span>}
          value={textInputValue}
          onChange={(event) => setTextInputValue(event.target.value)}
        ></TextInput>
        <Email
          label={<span className={styles.label}>Email</span>}
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        ></Email>
        <Password
          label={<span className={styles.label}>Password</span>}
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        ></Password>
        <Password
          label={<span className={styles.label}>Confirm password</span>}
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        ></Password>
      </WelcomeTemplate>
    </div>
  );
};
