// import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
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
};

export const PostList: React.FC<PostListProps> = ({
  data,
  onPreviewClick,
  LikeDislike,
}) => {
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <Link to={`${AppPages.POSTS}/${post.id}`} key={post.id}>
          <PostCard
            id={post.id}
            image={post.image}
            text={post.text}
            date={post.date}
            title={post.title}
            onPreviewClick={onPreviewClick}
            LikeDislike={LikeDislike}
          ></PostCard>
        </Link>
      ))}
    </div>
  );
};
