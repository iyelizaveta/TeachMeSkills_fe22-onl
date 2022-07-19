import { Title } from "../../ui/title/Title";
import { useState } from "react";
import { Email } from "../../ui/form/inputs/email-input/Email";
import { Password } from "../../ui/form/inputs/password-input/Password";
import { Input } from "../../ui/form/inputs/text-input/Input";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./RegistrationPage.module.css";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";
import { useAppDispatch } from "../../hooks";
import { register } from "../../features/auth";

type RegistrationPageProps = {};

export const RegistrationPage: React.FC<RegistrationPageProps> = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  return (
    <WelcomeTemplate
      className={styles.container}
      title={
        <Title>
          <Link to={AppPages.LOGIN}>
            <span className={styles.label}>Login</span>
          </Link>{" "}
          | Registration
        </Title>
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
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(register({ email, password, username: name }));
        }}
      >
        <Input
          label={<span className={styles.label}>User name</span>}
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></Input>
        <Email
          label={<span className={styles.label}>Email</span>}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        ></Email>
        <Password
          label={<span className={styles.label}>Password</span>}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Password>
        <Password
          label={<span className={styles.label}>Confirm password</span>}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        ></Password>
        <PrimaryButton type="submit" className={styles.button}>
          Registration
        </PrimaryButton>
      </form>
    </WelcomeTemplate>
  );
};
