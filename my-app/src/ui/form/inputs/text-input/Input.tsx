import React from "react";
import styles from "../input.module.css";

type InputProps = {
  label: React.ReactNode;
  value?: string;
  type?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Input: React.FC<InputProps> = ({
  label,
  value,
  type,
  className,
  onChange,
}) => {
  return (
    <label className={`${styles.label} ${className}`}>
      {label}
      <input
        className={`${styles.input} ${className}`}
        type={type}
        value={value}
        onChange={onChange}
      ></input>
    </label>
  );
};
