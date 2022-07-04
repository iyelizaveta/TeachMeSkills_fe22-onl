import { useEffect } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "../../features/posts/all-posts/allPostsSlice";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { AppPages } from "../../types";
import { PostCard } from "../post-card/PostCard";
import styles from "./PostList.module.css";

type PostListProps = {
  data: Array<{
    id: string | number;
    image?: string | undefined;
    text: string;
    date: string;
    title: string;
  }>;
  onPreviewClick?: (id: string | number) => void;
  LikeDislike?: React.ComponentType<{ id: string | number }>;
  MarkDismark?: React.ComponentType<{ id: string | number }>;
};

export const PostList: React.FC<PostListProps> = ({
  onPreviewClick,
  LikeDislike,
  MarkDismark,
}) => {
  const posts = useAppSelector((state) => state.allPosts.posts);
  const dispatch = useAppDispatch();
  // useEffect(() => {
  //   dispatch(getAllPosts());
  // }, [dispatch]);
  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <Link to={`${AppPages.ALL_POSTS}/${post.id}`} key={post.id}>
          <PostCard
            id={post.id}
            image={post.image}
            text={post.text}
            date={post.date}
            title={post.title}
            onPreviewClick={onPreviewClick}
            LikeDislike={LikeDislike}
            MarkDismark={MarkDismark}
          ></PostCard>
        </Link>
      ))}
    </div>
  );
};
