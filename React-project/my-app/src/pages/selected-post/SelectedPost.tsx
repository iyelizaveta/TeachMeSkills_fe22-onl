import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../features/posts/post-page/postPageSlice";
import { useAppSelector, useAppDispatch } from "../../hooks";
import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { PostCard } from "../../ui/post-card/PostCard";
import { Title } from "../../ui/title/Title";
import styles from "./SelectedPost.module.css";

type SelectedPostProps = {};

export const SelectedPost: React.FC<SelectedPostProps> = () => {
  const post = useAppSelector((state) => state.post.post);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getPost({ id }));
    }
  }, [dispatch, id]);

  return (
    <ContentTemplate
      className={styles.container}
      title={<Title>Selected post</Title>}
    >
      <PostCard
        id={post.id}
        key={post.id}
        image={post.image}
        text={post.text}
        date={post.date}
        title={post.title}
      ></PostCard>
    </ContentTemplate>
  );
};
