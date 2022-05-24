import { Menu } from "antd";
import { HumburgerButton } from "../../ui/button/humburger-button/HumburgerButton";
import { UserButton } from "../../ui/button/UserButton/UserButton";
import styles from "./Header.module.css";

type HeaderProps = {};
export const Header: React.FC<HeaderProps> = () => {
  return (
    <header>
      <div className={styles.header}>
        <HumburgerButton></HumburgerButton>
        <UserButton>Username</UserButton>
      </div>
      <Menu></Menu>
    </header>
  );
};
