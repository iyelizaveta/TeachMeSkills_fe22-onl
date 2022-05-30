import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./RegistrationSuccess.module.css";

type RegistrationSuccessProps = {};

export const RegistrationSuccess: React.FC<RegistrationSuccessProps> = () => {
  return (
    <WelcomeTemplate
      title={<Title>Success</Title>}
      actionButton={
        <PrimaryButton className={styles.button}>Login</PrimaryButton>
      }
    >
      <p className={styles.text}>
        Email confirmed. Your registration is now completed
      </p>
    </WelcomeTemplate>
  );
};
