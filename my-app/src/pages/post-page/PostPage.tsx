import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { PostsLikeDislike } from "../../features/posts/like-dislike/posts-like-dislike";
import { PostsMarkDismark } from "../../features/posts/mark-dismark/posts-mark-dismark";
import { getPost } from "../../features/posts/post-page/postPageSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { ContentTemplate } from "../../templates/content/ContentTemplate";
import { Post } from "../../ui/post/Post";
import styles from "./PostPage.module.css";

type PostPageProps = {};

export const PostPage: React.FC<PostPageProps> = () => {
  const post = useAppSelector((state) => state.post.post);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getPost({ id }));
    }
  }, [dispatch, id]);
  return (
    <div className={styles.container}>
      <ContentTemplate>
        <Post
          id={post.id}
          image={post.image}
          text={post.text}
          title={post.title}
          LikeDislike={PostsLikeDislike}
          MarkDismark={PostsMarkDismark}
        ></Post>
      </ContentTemplate>
    </div>
  );
};
