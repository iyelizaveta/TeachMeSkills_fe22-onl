import styles from "./Menu.module.css";
import { LogoutOutlined } from "@ant-design/icons";

type MenuProps = {
  children: React.ReactNode;
};

export const Menu: React.FC<MenuProps> = ({ children }) => {
  return (
    <div className={styles.menu}>
      {children}
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
