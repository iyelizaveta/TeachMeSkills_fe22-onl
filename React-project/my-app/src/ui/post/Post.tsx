import { Title } from "../title/Title";
import styles from "./Post.module.css";

type PostProps = {
  id: number | string;
  image?: string | undefined;
  text: string;
  title: string;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  MarkDismark?: React.ComponentType<{ id: string | number }>;
  className?: string;
};

export const Post: React.FC<PostProps> = ({
  id,
  image,
  text,
  title,
  LikeDislike,
  MarkDismark,
  className,
}) => {
  return (
    <div className={`${styles.container} ${className}`} id={`post.${id}`}>
      <Title>{title}</Title>
      <img className={styles.img} src={image} alt=""></img>
      <div className={styles.description}>
        <p className={styles.text}>{text}</p>
        <div className={styles.featuresContainer}>
          {LikeDislike ? <LikeDislike id={id} /> : null}
          {MarkDismark ? <MarkDismark id={id} /> : null}
        </div>
      </div>
    </div>
  );
};
