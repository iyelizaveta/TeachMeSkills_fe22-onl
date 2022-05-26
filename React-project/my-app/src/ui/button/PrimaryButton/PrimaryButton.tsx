import styles from "./PrimaryButton.module.css";

type PrimaryButtonProps = {
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
};

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  className = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
