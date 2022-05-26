import styles from "../input.module.css";
import React from "react";

type PasswordProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
};

export const Password: React.FC<PasswordProps> = ({ value, onChange }) => {
  return (
    <label className={styles.label}>
      Password
      <input
        className={styles.input}
        type="password"
        value={value}
        onChange={onChange}
        placeholder="Enter your password"
      ></input>
      <button></button>
    </label>
  );
};

// export const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
//   ({ label, value, onChange }, ref) => {
//     // const [isPasswordShown, setIsPasswordShown] = useState(false);
//     return (
//       <label className={styles.label}>
//         {label}
//         <input
//           ref={ref}
//           className={styles.input}
//           type="password"
//           value={value}
//           onChange={onChange}
//         ></input>
//         {/* <button
//         type="button"
//         onClick={() => {
//           setIsPasswordShown(!isPasswordShown);
//         }}
//       >
//         {isPasswordShown ? 'Hide Password' : 'Show Password'}
//       </button>
//     </label>
//   );
// };
