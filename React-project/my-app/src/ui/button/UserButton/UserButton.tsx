import styles from "./UserButton.module.css";
import { UserOutlined } from "@ant-design/icons";

type ButtonProps = {
  children: React.ReactNode;
};

export const UserButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      <UserOutlined></UserOutlined>
      {children}
    </button>
  );
};
