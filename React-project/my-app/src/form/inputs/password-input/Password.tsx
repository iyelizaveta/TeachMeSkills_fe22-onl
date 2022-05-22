import React, { useState } from 'react';
import styles from '../input.module.css';

type PasswordProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Password: React.FC<PasswordProps> = ({ value, onChange }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <label className={styles.label}>
      Password
      <input
        className={styles.input}
        type={isPasswordShown ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder="Enter your password"
      ></input>
      <button
        type="button"
        onClick={() => {
          setIsPasswordShown(!isPasswordShown);
        }}
      >
        {isPasswordShown ? 'Hide Password' : 'Show Password'}
      </button>
    </label>
  );
};
