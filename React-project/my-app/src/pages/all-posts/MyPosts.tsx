import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./MyPosts.module.css";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import data from "./data.json";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostCard } from "../../ui/post-card/PostCard";
import { PostsCardList } from "../../features/posts/card-list/CardList";
import { CloseOutlined } from "@ant-design/icons";

type MyPostsProps = {};

export const MyPosts: React.FC<MyPostsProps> = () => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  const [preview, setPreview] = useState(true);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);
  return (
    <div className={styles.container}>
      {selectedPostId != null ? (
        <div
          className={
            preview
              ? `${styles.overlayContainer}`
              : `${styles.overlayContainerClose}`
          }
        >
          <div className={styles.overlay} onClick={() => setPreview(false)}>
            {selectedPost ? (
              <PostCard {...selectedPost} className={styles.card}>
                <CloseOutlined
                  className={styles.close}
                  role="button"
                  onClick={(event) => {
                    setPreview(false);
                    event.preventDefault();
                  }}
                />
              </PostCard>
            ) : null}
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
        <PostsCardList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setPreview(true);
          }}
        ></PostsCardList>
      </ContentTemplate>
    </div>
  );
};
