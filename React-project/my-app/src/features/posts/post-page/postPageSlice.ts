import { createSlice } from "@reduxjs/toolkit";
import { Post } from "./types";

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: {},
    isLoading: false,
  } as {
    post: {
      id: number | string;
      image?: string | undefined;
      text: string;
      title: string;
    };
    isLoading: boolean;
  },
  reducers: {
    getPost(state) {
      state.isLoading = true;
    },
    getPostSuccess(state, action: { payload: Post }) {
      state.post.id = action.payload.id;
      state.post.image = action.payload.image;
      state.post.text = action.payload.text;
      state.post.title = action.payload.title;
      state.isLoading = false;
    },
    getPostFailure(state) {
      state.isLoading = false;
    },
  },
});

export const { getPost, getPostSuccess, getPostFailure } = postSlice.actions;
export default postSlice.reducer;
