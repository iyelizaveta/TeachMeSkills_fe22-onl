import { Link } from "react-router-dom";
import { WelcomeTemplate } from "../../templates/welcome/WelcomeTemplate";
import { AppPages } from "../../types";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import styles from "./MainPage.module.css";

type MainPageProps = {};

export const MainPage: React.FC<MainPageProps> = () => {
  return (
    <div className={styles.main}>
      <WelcomeTemplate
        title={
          <h2 className={styles.h2}>
            Make your Blog <span className={styles.span}>Online</span>
          </h2>
        }
        actionButton={
          <Link to={AppPages.REGISTRATION}>
            <PrimaryButton className={styles.button}>Learn More</PrimaryButton>
          </Link>
        }
      >
        <p className={styles.p}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been...
        </p>
      </WelcomeTemplate>
    </div>
  );
};
