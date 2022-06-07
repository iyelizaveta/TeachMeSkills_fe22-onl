import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PostCard } from "../../ui/post-card/PostCard";
import { Title } from "../../ui/title/Title";
import styles from "./SelectedPost.module.css";

type SelectedPostProps = {};

export const SelectedPost: React.FC<SelectedPostProps> = () => {
  return (
    <div>
      <ContentTemplate
        className={styles.container}
        title={<Title>Selected post</Title>}
      >
        <PostCard
          id={1}
          key={1}
          image={
            "https://cdn.britannica.com/89/131089-050-A4773446/flowers-garden-petunia.jpg?w=690&h=388&c=crop"
          }
          text={"Lorem ipsum"}
          date={"15.05.2022"}
          title={"Why is lorem ipsum?"}
        ></PostCard>
      </ContentTemplate>
    </div>
  );
};
