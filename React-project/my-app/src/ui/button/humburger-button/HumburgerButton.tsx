import styles from "./HumburgerButton.module.css";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Menu } from "../../menu/Menu";

type HumburgerButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export const HumburgerButton: React.FC<HumburgerButtonProps> = ({
  onClick,
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
      <Menu>
        <CloseOutlined className={styles.buttonOpen} />
      </Menu>
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
    </button>
  );
};
