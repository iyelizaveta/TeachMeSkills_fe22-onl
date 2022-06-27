import { createSlice } from "@reduxjs/toolkit";
import { AllPosts } from "./types";

const allPostsSlice = createSlice({
  name: "allPosts",
  initialState: {
    posts: [],
    isLoading: false,
  } as {
    posts: AllPosts[];
    isLoading: boolean;
  },
  reducers: {
    getAllPosts(state) {
      state.isLoading = true;
    },
    getAllPostsSuccess(state, action) {
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
