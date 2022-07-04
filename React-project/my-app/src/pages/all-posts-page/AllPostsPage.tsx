import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Title } from "../../ui/title/Title";
import styles from "./AllPostsPage.module.css";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostCard } from "../../ui/post-card/PostCard";
import { AllPostsCardList } from "../../features/posts/card-list/AllPostsCardList";
import { CloseOutlined } from "@ant-design/icons";

type AllPostsProps = {};

export const AllPosts: React.FC<AllPostsProps> = () => {
  const posts = useAppSelector((state) => state.allPosts.posts);
  const [preview, setPreview] = useState(true);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  const onCloseClick = () => dispatch(setSelectedPost(null));
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
          <div className={styles.overlay}>
            {selectedPost ? (
              <PostCard {...selectedPost} className={styles.card}>
                <CloseOutlined
                  className={styles.close}
                  role="button"
                  onClick={() => {
                    onCloseClick();
                  }}
                />
              </PostCard>
            ) : null}
          </div>
        </div>
      ) : null}
      <ContentTemplate title={<Title>All posts</Title>}>
        <AllPostsCardList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setPreview(true);
          }}
        ></AllPostsCardList>
      </ContentTemplate>
    </div>
  );
};
