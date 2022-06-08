import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { PostList } from "../../ui/post-list/PostList";
import { Title } from "../../ui/title/Title";
import styles from "./MyPosts.module.css";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import data from "../../features/posts/card-list/data.json";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostCard } from "../../ui/post-card/PostCard";

type MyPostsProps = {};

export const MyPosts: React.FC<MyPostsProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  console.log(selectedPostId);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);
  return (
    <div className={styles.container}>
      {selectedPostId != null ? (
        <div className={styles.overlayContainer}>
          <div className={styles.overlay}>
            {selectedPost ? <PostCard {...selectedPost}></PostCard> : null}
          </div>
        </div>
      ) : null}
      <ContentTemplate
        title={
          <Title>
            My posts{" "}
            <PrimaryButton className={styles.button}>+ Add</PrimaryButton>
          </Title>
        }
      >
        <PostList
          data={posts ?? []}
          onPreviewClick={(id) => dispatch(setSelectedPost(id))}
        ></PostList>
      </ContentTemplate>
    </div>
  );
};
