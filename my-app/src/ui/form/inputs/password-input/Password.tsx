import React from "react";
import styles from "../input.module.css";

type PasswordProps = {
  label: React.ReactNode;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ label, value, onChange }, ref) => {
    return (
      <label className={styles.label}>
        {label}
        <input
          ref={ref}
          className={styles.input}
          type="password"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    );
  }
);
