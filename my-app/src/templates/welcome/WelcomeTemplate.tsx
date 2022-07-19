import { Header } from "../../features/header/Header";
import styles from "./WelcomeTemplate.module.css";

type WelcomeTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  description?: React.ReactNode;
};

export const WelcomeTemplate: React.FC<WelcomeTemplateProps> = ({
  title,
  children,
  description,
  className = "",
}) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <Header isLogin={false}></Header>
      <div className={styles.body}>
        {title}
        {children}
        {description}
      </div>
    </div>
  );
};
