import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { PostList } from "../../../ui/post-list/PostList";
import { getAllPosts } from "../all-posts/allPostsSlice";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarkDismark } from "../mark-dismark/posts-mark-dismark";

type PostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
};

export const PostsCardList: React.FC<PostsCardListProps> = ({
  onPreviewClick,
}) => {
  const posts = useAppSelector((state) => state.allPosts.posts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  return (
    <PostList
      data={posts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      MarkDismark={PostsMarkDismark}
    />
  );
};
