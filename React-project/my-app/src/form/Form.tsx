import { useState } from 'react';
import { Email } from './inputs/email-input/Email';
import { Password } from './inputs/password-input/Password';
import { Textarea } from './inputs/textarea-input/Textarea';
import formStyles from './form.module.css';

export const Form: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [textareaValue, setTextareaValue] = useState('');

  return (
    <form className={formStyles.form}>
      <div>
        <Email
          value={emailValue}
          onChange={(event) => setEmailValue(event.target.value)}
        ></Email>
        <Password
          value={passwordValue}
          onChange={(event) => setPasswordValue(event.target.value)}
        ></Password>
      </div>
      <Textarea
        value={textareaValue}
        onChange={(event) => setTextareaValue(event.target.value)}
      ></Textarea>
    </form>
  );
};
