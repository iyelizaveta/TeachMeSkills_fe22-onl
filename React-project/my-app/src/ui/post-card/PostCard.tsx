import { PreviewButton } from "../preview-button/PreviewButton";
import styles from "./PostCard.module.css";
type PostCardProps = {
  id: number | string;
  image?: string | undefined;
  text: string;
  date: string;
  title: string;
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
};

export const PostCard: React.FC<PostCardProps> = ({
  id,
  image,
  text,
  date,
  title,
  onPreviewClick,
  LikeDislike,
}) => {
  return (
    <div className={styles.cardContainer} id={`post.${id}`}>
      <img className={styles.img} src={image} alt=""></img>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <p className={styles.date}>
          {date}{" "}
          <PreviewButton
            onClick={(event) => {
              onPreviewClick?.(id);
              event.preventDefault();
            }}
          ></PreviewButton>
        </p>
        {LikeDislike ? <LikeDislike id={id} /> : null}
        {/* <LikeDislike
          onLikeClick={() => null}
          onDilslikeClick={() => null}
          currentState={null}
          count={-28}
        ></LikeDislike> */}
      </div>
    </div>
  );
};
