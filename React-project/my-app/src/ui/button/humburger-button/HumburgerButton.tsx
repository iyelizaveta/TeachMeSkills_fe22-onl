import styles from "./HumburgerButton.module.css";
import { MenuOutlined } from "@ant-design/icons";

type HumburgerButtonProps = {
  //   children: React.ReactNode;
  className?: string;
};

export const HumburgerButton: React.FC<HumburgerButtonProps> = ({
  className,
}) => {
  return (
    <div className={styles.hamburger}>
      <MenuOutlined className={styles.button} />
    </div>
  );
};
