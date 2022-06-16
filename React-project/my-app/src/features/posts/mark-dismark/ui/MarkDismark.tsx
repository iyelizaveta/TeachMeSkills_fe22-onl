import { BookOutlined, BookFilled } from "@ant-design/icons";
import styles from "./MarkDismark.module.css";

type MarkDismarkProps = {
  onMarkClick: () => void;
  currentState: boolean | null;
};

export const MarkDismark: React.FC<MarkDismarkProps> = ({
  onMarkClick,
  currentState,
}) => {
  const Mark = (
    <BookOutlined
      className={styles.mark}
      onClick={(event) => {
        event.preventDefault();
        onMarkClick();
      }}
      role="button"
    />
  );
  const PressedMark = (
    <BookFilled
      className={styles.mark}
      onClick={(event) => {
        event.preventDefault();
        onMarkClick();
      }}
      role="button"
    />
  );

  return (
    <div className={styles.container}>
      {currentState === true ? PressedMark : Mark}{" "}
    </div>
  );
};
