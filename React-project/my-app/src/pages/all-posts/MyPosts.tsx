import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { PostList } from "../../ui/post-list/PostList";
import { Title } from "../../ui/title/Title";
import styles from "./MyPosts.module.css";
import data from "./data.json";
import { useState, useEffect } from "react";

type MyPostsProps = {};

export const MyPosts: React.FC<MyPostsProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);
  return (
    <ContentTemplate
      className={styles.container}
      title={
        <Title>
          My posts{" "}
          <PrimaryButton className={styles.button}>+ Add</PrimaryButton>
        </Title>
      }
    >
      <PostList data={posts ?? []}></PostList>
    </ContentTemplate>
  );
};
