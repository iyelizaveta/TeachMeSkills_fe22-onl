import React from "react";
import styles from "./textarea.module.css";
import labelStyles from "../input.module.css";

type TextareaProps = {
  value: string;
  label?: string;
  className?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export const Textarea: React.FC<TextareaProps> = ({
  value,
  label,
  className,
  onChange,
}) => {
  return (
    <label className={`${labelStyles.label} ${className}`}>
      {label}
      <textarea
        className={styles.textarea}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};
