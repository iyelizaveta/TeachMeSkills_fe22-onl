import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PrimaryButton } from "../../ui/button/PrimaryButton/PrimaryButton";
import { Title } from "../../ui/title/Title";
import styles from "./MyPosts.module.css";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostCard } from "../../ui/post-card/PostCard";
import { CloseOutlined } from "@ant-design/icons";
import { MyPostsCardList } from "../../features/posts/card-list/MyPostsCardList";
import { useNavigate } from "react-router-dom";
import { AppPages } from "../../types";

type MyPostsProps = {};

export const MyPosts: React.FC<MyPostsProps> = () => {
  const posts = useAppSelector((state) => state.myPosts.myPosts);
  const [preview, setPreview] = useState(true);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  const dispatch = useAppDispatch();
  const onCloseClick = () => dispatch(setSelectedPost(null));
  const navigate = useNavigate();
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
      <ContentTemplate
        title={
          <Title>
            My posts{" "}
            <PrimaryButton
              className={styles.button}
              onClick={() => navigate(AppPages.ADD_POST)}
            >
              + Add
            </PrimaryButton>
          </Title>
        }
      >
        <MyPostsCardList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            setPreview(true);
          }}
        ></MyPostsCardList>
      </ContentTemplate>
    </div>
  );
};
