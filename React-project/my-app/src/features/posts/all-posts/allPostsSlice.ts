import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [],
    isLoading: false,
  } as {
    posts: Post[];
    isLoading: boolean;
  },
  reducers: {
    getAllPosts(state) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action: { payload: Post[] }) {
      state.posts = action.payload;
      state.isLoading = false;
    },
    getAllPostsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { getAllPosts, getAllPostsSuccess, getAllPostsFailure } =
  allPostsSlice.actions;
export default allPostsSlice.reducer;
