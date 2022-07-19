import { Link } from "react-router-dom";
import { AppPages } from "../../../types";
import styles from "./Menu.module.css";

type MenuLogOutProps = {};

export const MenuLogOut: React.FC<MenuLogOutProps> = () => {
  return (
    <ul className={styles.menuOut}>
      <Link to={AppPages.LOGIN}>
        <li>Login</li>
      </Link>

      <Link to={AppPages.REGISTRATION}>
        <li>Registration</li>
      </Link>
    </ul>
  );
};
