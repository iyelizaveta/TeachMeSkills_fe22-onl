import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { PostList } from "../../../ui/post-list/PostList";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarkDismark } from "../mark-dismark/posts-mark-dismark";
import { getMyPosts } from "../my-posts/myPostsSlice";

type MyPostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
};

export const MyPostsCardList: React.FC<MyPostsCardListProps> = ({
  onPreviewClick,
}) => {
  const myPosts = useAppSelector((state) => state.myPosts.myPosts);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getMyPosts());
  }, [dispatch]);

  return (
    <PostList
      data={myPosts ?? []}
      onPreviewClick={onPreviewClick}
      LikeDislike={PostsLikeDislike}
      MarkDismark={PostsMarkDismark}
    />
  );
};
