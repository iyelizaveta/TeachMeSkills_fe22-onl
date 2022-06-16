import styles from "./PreviewButton.module.css";
import { EyeOutlined } from "@ant-design/icons";

type PreviewButtonProps = {
  className?: string;
  type?: "button" | "submit" | "reset";
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  role?: string;
};

export const PreviewButton: React.FC<PreviewButtonProps> = ({
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
      <EyeOutlined />
    </button>
  );
};
