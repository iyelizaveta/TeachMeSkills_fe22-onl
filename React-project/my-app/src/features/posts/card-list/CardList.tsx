import { useState, useEffect } from "react";
// import { useAppSelector, useAppDispatch } from "../../../hooks";
import { PostList } from "../../../ui/post-list/PostList";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarkDismark } from "../mark-dismark/posts-mark-dismark";
import data from "./data.json";

type PostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
};

export const PostsCardList: React.FC<PostsCardListProps> = ({
  onPreviewClick,
}) => {
  const [posts, setPosts] = useState<typeof data | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setPosts(data);
    }, 1000);
  }, []);

  return (
    <PostList
      data={posts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      MarkDismark={PostsMarkDismark}
    />
  );
};
