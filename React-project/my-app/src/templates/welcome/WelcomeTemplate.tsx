import { Header } from "../../features/header/Header";
import styles from "./WelcomeTemplate.module.css";

type WelcomeTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  actionButton: React.ReactNode;
  description?: React.ReactNode;
};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({
  title,
  children,
  actionButton,
  description,
}) => {
  return (
    <div className={styles.container}>
      <Header></Header>
      <div className={styles.body}>
        {title}
        {children}
        {actionButton}
        {description}
      </div>
    </div>
  );
};
