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
  className?: string;
  children?: React.ReactNode;
};

export const PostCard: React.FC<PostCardProps> = ({
  id,
  image,
  text,
  date,
  title,
  onPreviewClick,
  LikeDislike,
  className,
  children,
}) => {
  return (
    <div className={`${styles.cardContainer} ${className}`} id={`post.${id}`}>
      {children}
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
      </div>
    </div>
  );
};
