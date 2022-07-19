import styles from "./Title.module.css";
type TitleProps = {
  children: React.ReactNode;
};

export const Title: React.FC<TitleProps> = ({ children }) => {
  return <h1 className={styles.h1}>{children}</h1>;
};
