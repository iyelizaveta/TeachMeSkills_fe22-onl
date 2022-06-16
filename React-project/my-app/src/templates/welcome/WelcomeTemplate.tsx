import { Header } from "../../features/header/Header";
import styles from "./WelcomeTemplate.module.css";

type WelcomeTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  actionButton: React.ReactNode;
  description?: React.ReactNode;
};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({
  title,
  children,
  actionButton,
  description,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
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
