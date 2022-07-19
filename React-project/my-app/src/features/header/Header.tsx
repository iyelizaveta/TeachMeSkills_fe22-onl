import { useState } from "react";
import { HumburgerButton } from "./humburger-button/HumburgerButton";
import { SearchBar } from "../search";
import styles from "./Header.module.css";

type HeaderProps = {
  children?: React.ReactNode;
  isLogin: boolean;
};
export const Header: React.FC<HeaderProps> = ({ children, isLogin }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className={isOpen ? styles.openHeader : styles.header}>
      <HumburgerButton onClick={() => setIsOpen(!isOpen)} isLogin={isLogin}>
        {children}
      </HumburgerButton>
      {isLogin ? <SearchBar /> : null}
    </header>
  );
};
