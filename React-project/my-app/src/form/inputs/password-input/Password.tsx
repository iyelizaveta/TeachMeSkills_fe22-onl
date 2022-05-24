// import React, { useState } from "react";
import styles from "../input.module.css";

type PasswordProps = {
  label: React.ReactNode;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Password: React.FC<PasswordProps> = ({
  label,
  value,
  onChange,
}) => {
  // const [isPasswordShown, setIsPasswordShown] = useState(false);
  return (
    <label className={styles.label}>
      {label}
      <input
        className={styles.input}
        type="password"
        value={value}
        onChange={onChange}
      ></input>
      {/* <button
        type="button"
        onClick={() => {
          setIsPasswordShown(!isPasswordShown);
        }}
      >
        {isPasswordShown ? 'Hide Password' : 'Show Password'}
      </button> */}
    </label>
  );
};
