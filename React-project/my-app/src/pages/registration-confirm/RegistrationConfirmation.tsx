import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./RegistrationConfirmation.module.css";

type RegistrationConfirmationProps = {};

export const RegistrationConfirmation: React.FC<
  RegistrationConfirmationProps
> = () => {
  return (
    <div className={styles.container}>
      <Title>Registration Confirmation</Title>
      <p className={styles.text}>
        Please activate your account with the activator link in the email{" "}
        <span>test@gmail.com</span>. Please, check your email
      </p>
      <PrimaryButton className={styles.button}>Home</PrimaryButton>
    </div>
  );
};
