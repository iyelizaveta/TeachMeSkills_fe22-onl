import styles from "./ContentTemplate.module.css";
import { Header } from "../../features/header/Header";
import { UserButton } from "../../ui/button/UserButton/UserButton";

type ContentTemplateProps = {
  title: React.ReactNode;
  children: React.ReactNode;
};

export const ContentTemplate: React.FC<ContentTemplateProps> = ({
  title,
  children,
}) => {
  return (
    <div className={styles.container}>
      <Header>
        <UserButton>Username</UserButton>
      </Header>
      <div className={styles.body}>
        {title}
        {children}
      </div>
    </div>
  );
};
