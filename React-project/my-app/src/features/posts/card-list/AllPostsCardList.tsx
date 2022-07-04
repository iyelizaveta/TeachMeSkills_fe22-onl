import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../hooks";
import { PostList } from "../../../ui/post-list/PostList";
import { getAllPosts } from "../all-posts/allPostsSlice";
import { PostsLikeDislike } from "../like-dislike/posts-like-dislike";
import { PostsMarkDismark } from "../mark-dismark/posts-mark-dismark";
import { SortBar } from "../sorting-post";
import { actions } from "../sorting-post/sortingPostsSlice";

type AllPostsCardListProps = {
  onPreviewClick?: (id: string | number) => void;
};

export const AllPostsCardList: React.FC<AllPostsCardListProps> = ({
  onPreviewClick,
}) => {
  const posts = useAppSelector((state) => state.allPosts.posts);
  const sortedPosts = useAppSelector(
    (state) => state.sortedPosts.response?.results
  );
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  let data = [];
  if (!sortedPosts) {
    data = posts;
  } else {
    data = sortedPosts;
  }

  return (
    <div>
      <SortBar
        onChange={(e) => {
          dispatch(actions.getSortedPosts({ text: e.currentTarget.value }));
        }}
      ></SortBar>
      <PostList
        data={data}
        onPreviewClick={onPreviewClick}
        LikeDislike={PostsLikeDislike}
        MarkDismark={PostsMarkDismark}
      />
    </div>
  );
};
