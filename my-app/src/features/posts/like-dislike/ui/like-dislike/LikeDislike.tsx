import {
  DislikeOutlined,
  LikeOutlined,
  LikeFilled,
  DislikeFilled,
} from "@ant-design/icons";
import styles from "./LikeDislike.module.css";

type LikeDislikeProps = {
  onLikeClick: () => void;
  onDilslikeClick: () => void;
  currentState: "like" | "dislike" | null;
  count: number;
};

export const LikeDislike: React.FC<LikeDislikeProps> = ({
  onLikeClick,
  onDilslikeClick,
  currentState,
  count,
}) => {
  const Like = (
    <LikeOutlined
      className={styles.like}
      onClick={(event) => {
        event.preventDefault();
        onLikeClick();
      }}
      role="button"
    />
  );
  const PressedLike = (
    <LikeFilled
      className={styles.pressedLike}
      onClick={(event) => {
        event.preventDefault();
        onLikeClick();
      }}
      role="button"
    />
  );

  const Dislike = (
    <DislikeOutlined
      className={styles.dislike}
      onClick={(event) => {
        event.preventDefault();
        onDilslikeClick();
      }}
      role="button"
    />
  );
  const PressedDislike = (
    <DislikeFilled
      className={styles.pressedDislike}
      onClick={(event) => {
        event.preventDefault();
        onDilslikeClick();
      }}
      role="button"
    />
  );

  return (
    <div className={styles.container}>
      <div className={styles.likesCont}>
        {currentState === "like" ? PressedLike : Like}{" "}
        {count > 0 ? count : null}{" "}
      </div>
      <div className={styles.likesCont}>
        {currentState === "dislike" ? PressedDislike : Dislike}{" "}
        {count < 0 ? Math.abs(count) : null}{" "}
      </div>
    </div>
  );
};
