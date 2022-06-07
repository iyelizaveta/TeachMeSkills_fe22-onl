import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./RegistrationSuccess.module.css";
import { Link } from "react-router-dom";
import { AppPages } from "../../types";

type RegistrationSuccessProps = {};

export const RegistrationSuccess: React.FC<RegistrationSuccessProps> = () => {
  return (
    <WelcomeTemplate
      className={styles.container}
      title={<Title>Success</Title>}
      actionButton={
        <Link to={AppPages.LOGIN}>
          <PrimaryButton className={styles.button}>Login</PrimaryButton>
        </Link>
      }
    >
      <p className={styles.text}>
        Email confirmed. Your registration is now completed
      </p>
    </WelcomeTemplate>
  );
};
