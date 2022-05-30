import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./MainPage.module.css";

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className={styles.main}>
      <WelcomeTemplate
        title={
          <h2>
            Make your Blog <span>Online</span>
          </h2>
        }
        actionButton={
          <PrimaryButton className={styles.button}>Learn More</PrimaryButton>
        }
      >
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been...
        </p>
      </WelcomeTemplate>
    </div>
  );
};
