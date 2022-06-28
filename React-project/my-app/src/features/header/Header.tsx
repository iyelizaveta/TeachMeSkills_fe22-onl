import { useState } from "react";
import { HumburgerButton } from "../../ui/button/humburger-button/HumburgerButton";
import { SearchBar } from "../search";
import styles from "./Header.module.css";

type HeaderProps = {
  children?: React.ReactNode;
};
export const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={isOpen ? styles.openHeader : styles.header}>
      <HumburgerButton onClick={() => setIsOpen(!isOpen)}>
        {children}
      </HumburgerButton>
      <SearchBar></SearchBar>
    </header>
  );
};
