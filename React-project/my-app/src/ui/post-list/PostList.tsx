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

export const PostList: React.FC<PostListProps> = () => {
  const data = [
    {
      id: 1,
      image:
        "https://cdn.britannica.com/89/131089-050-A4773446/flowers-garden-petunia.jpg?w=690&h=388&c=crop",
      text: "Lorem ipsum",
      date: "15.05.2022",
      title: "Why is lorem ipsum?",
    },
    {
      id: 2,
      image:
        "https://cdn.britannica.com/89/131089-050-A4773446/flowers-garden-petunia.jpg?w=690&h=388&c=crop",
      text: "Lorem ipsum",
      date: "15.05.2022",
      title: "Why is lorem ipsum?",
    },
    {
      id: 3,
      image:
        "https://cdn.britannica.com/89/131089-050-A4773446/flowers-garden-petunia.jpg?w=690&h=388&c=crop",
      text: "Lorem ipsum",
      date: "15.05.2022",
      title: "Why is lorem ipsum?",
    },
  ];
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
