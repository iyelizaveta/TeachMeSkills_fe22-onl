import React from "react";
import styles from "../input.module.css";

type InputProps = {
  label: React.ReactNode;
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Email = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, value, onChange }, ref) => {
    return (
      <label className={styles.label}>
        {label}
        <input
          ref={ref}
          className={styles.input}
          type="email"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    );
  }
);
