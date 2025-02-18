import styles from "./HumburgerButton.module.css";
import { MenuOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "../menu/Menu";

type HumburgerButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isLogin: boolean;
};

export const HumburgerButton: React.FC<HumburgerButtonProps> = ({
  onClick,
  children,
  isLogin,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <button
      type="button"
      className={styles.hamburger}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick?.();
      }}
    >
      <Menu isLogin={isLogin}></Menu>
    </button>
  ) : (
    <button
      type="button"
      className={styles.hamburger}
      onClick={() => {
        setIsOpen(!isOpen);
        onClick?.();
      }}
    >
      <MenuOutlined className={styles.button} />
      {children}
    </button>
  );
};
