// import React, { ReactNode } from "react";
import { PostCard } from "../post-card/PostCard";
import styles from "./PostList.module.css";

type PostListProps = {
  //   children: ReactNode;
  //   items: typeof PostCard;
};

export const PostList: React.FC<PostListProps> = () => {
  return (
    <div className={styles.container}>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
      <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard>
    </div>
  );
};
