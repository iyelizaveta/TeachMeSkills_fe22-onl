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
  const Like = <LikeOutlined className={styles.like} />;
  const PressedLike = <LikeFilled className={styles.pressedLike} />;

  const Dislike = <DislikeOutlined className={styles.dislike} />;
  const PressedDislike = <DislikeFilled className={styles.pressedDislike} />;

  return (
    <div className={styles.container}>
      <div className={styles.likesCont}>
        {currentState === "like" ? PressedLike : Like} {count}{" "}
      </div>
      <div className={styles.likesCont}>
        {currentState === "dislike" ? PressedDislike : Dislike} {count}{" "}
      </div>
    </div>
  );
};
