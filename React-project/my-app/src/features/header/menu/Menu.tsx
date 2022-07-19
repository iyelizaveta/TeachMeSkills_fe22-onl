import { MenuLogIn } from "./MenuLogIn";
import { MenuLogOut } from "./MenuLogOut";
import styles from "./Menu.module.css";
import { CloseOutlined } from "@ant-design/icons";

type MenuProps = {
  isLogin: boolean;
};

export const Menu: React.FC<MenuProps> = ({ isLogin }) => {
  return (
    <div className={styles.menu}>
      <CloseOutlined className={styles.buttonOpen} />
      {isLogin ? <MenuLogIn /> : <MenuLogOut />}
    </div>
  );
};
