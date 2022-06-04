// import React, { ReactNode } from "react";
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
};

export const PostList: React.FC<PostListProps> = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((post) => (
        <PostCard
          id={post.id}
          key={post.id}
          image={post.image}
          text={post.text}
          date={post.date}
          title={post.title}
        ></PostCard>
      ))}
    </div>
  );
};
