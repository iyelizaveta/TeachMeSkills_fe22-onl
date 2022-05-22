import React from 'react';
import textareaStyles from './textarea.module.css';
import labelStyles from '../input.module.css';

type TextareaProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export const Textarea: React.FC<TextareaProps> = ({ value, onChange }) => {
  return (
    <label className={labelStyles.label}>
      Text
      <textarea
        className={textareaStyles.textarea}
        onChange={onChange}
        value={value}
      ></textarea>
    </label>
  );
};
