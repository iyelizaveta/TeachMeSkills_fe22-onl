import { createSlice } from "@reduxjs/toolkit";
import { Post } from "../../../types/post";

const myPostsSlice = createSlice({
  name: "myPosts",
  initialState: {
    myPosts: [],
    isLoading: false,
  } as {
    myPosts: Post[];
    isLoading: boolean;
  },
  reducers: {
    getMyPosts(state) {
      state.isLoading = true;
    },
    getMyPostsSuccess(state, action: { payload: Post[] }) {
      state.myPosts = action.payload;
      state.isLoading = false;
    },
    getMyPostsFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { getMyPosts, getMyPostsSuccess, getMyPostsFailure } =
  myPostsSlice.actions;
export default myPostsSlice.reducer;
