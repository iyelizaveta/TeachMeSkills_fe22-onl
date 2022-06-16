import styles from "./Menu.module.css";

type MenuOutProps = {
  children: React.ReactNode;
};

export const MenuOut: React.FC<MenuOutProps> = ({ children }) => {
  return (
    <div className={styles.menu}>
      {children}
      <ul className={styles.menuOut}>
        <li>
          <a href="All posts">Login</a>
        </li>
        <li>
          <a href="Log out">Registration</a>
        </li>
      </ul>
    </div>
  );
};
