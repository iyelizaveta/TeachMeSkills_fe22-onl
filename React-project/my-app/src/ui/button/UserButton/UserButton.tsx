/* eslint-disable jsx-a11y/alt-text */
import styles from './UserButton.module.css';
import './icon.png';

type ButtonProps = {
  children: React.ReactNode;
};

export const UserButton: React.FC<ButtonProps> = ({ children }) => {
  return (
    <button type="button" className={styles.button}>
      {children}
    </button>
  );
};
