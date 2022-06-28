import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Title } from "../../ui/title/Title";
import styles from "./AllPostsPage.module.css";
import { setSelectedPost } from "../../features/posts/selectedPostSlice";
// import data from "./data.json";
import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { PostCard } from "../../ui/post-card/PostCard";
import { PostsCardList } from "../../features/posts/card-list/CardList";
import { CloseOutlined } from "@ant-design/icons";
import { getAllPosts } from "../../features/posts/all-posts/allPostsSlice";

type AllPostsProps = {};

export const AllPosts: React.FC<AllPostsProps> = () => {
  const posts = useAppSelector((state) => state.allPosts.posts);
  console.log(posts, "all post page");
  const [preview, setPreview] = useState(true);
  const selectedPostId = useAppSelector((state) => state.selectedPost.id);
  const selectedPost =
    selectedPostId != null
      ? posts?.find((item) => item.id === selectedPostId)
      : null;
  console.log(selectedPost, "selected post");
  const dispatch = useAppDispatch();
  const onCloseClick = () => dispatch(setSelectedPost(null));
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);
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
        <PostsCardList
          onPreviewClick={(id) => {
            dispatch(setSelectedPost(id));
            console.log(id, "selected post ID");
            setPreview(true);
          }}
        ></PostsCardList>
      </ContentTemplate>
    </div>
  );
};
