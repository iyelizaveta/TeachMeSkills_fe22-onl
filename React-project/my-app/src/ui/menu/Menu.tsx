import styles from "./Menu.module.css";
import { LogoutOutlined } from "@ant-design/icons";
import { HumburgerButton } from "../button/humburger-button/HumburgerButton";
import { UserButton } from "../button/UserButton/UserButton";

type MenuProps = {
  //   children: React.ReactNode;
  className?: string;
};

export const Menu: React.FC<MenuProps> = ({
  //   children,
  className,
}) => {
  return (
    <div className={styles.menu}>
      <div className={styles.navigation}>
        <HumburgerButton></HumburgerButton>
        <UserButton>Username</UserButton>
      </div>
      <ul>
        <li>
          <a href="All posts"> All posts</a>
        </li>
        <li>
          <a href="My posts">My posts</a>
          <ul>
            <li>
              <a href="Add posts"> Add posts</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="Log out">Log out</a>
          <LogoutOutlined />
        </li>
      </ul>
    </div>
  );
};
