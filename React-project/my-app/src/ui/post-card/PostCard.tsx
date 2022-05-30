import styles from "./PostCard.module.css";
type PostCardProps = {
  id: number | string;
  image: string | undefined;
  text: string;
  date: string;
  title: string;
};

export const PostCard: React.FC<PostCardProps> = ({
  id,
  image,
  text,
  date,
  title,
}) => {
  return (
    <div className={styles.cardContainer} id={`post.${id}`}>
      <img className={styles.img} src={image} alt=""></img>
      <div className={styles.description}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
