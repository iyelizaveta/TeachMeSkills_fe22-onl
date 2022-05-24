import React from "react";
import styles from "../input.module.css";

type InputProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Email: React.FC<InputProps> = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Email
      <input
        className={styles.input}
        type="email"
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};
