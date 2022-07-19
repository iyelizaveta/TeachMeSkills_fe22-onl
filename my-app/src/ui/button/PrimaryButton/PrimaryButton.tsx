import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  role?: string;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
  role,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      role={role}
    >
      {children}
    </button>
  );
};
