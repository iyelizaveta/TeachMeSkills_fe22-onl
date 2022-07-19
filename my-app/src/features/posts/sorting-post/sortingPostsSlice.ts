import { createSlice } from "@reduxjs/toolkit";
import { AllPosts } from "../all-posts/types";
import { SortingPayload } from "./types";

const sortedPostsSlice = createSlice({
  name: "sortedPosts",
  initialState: {
    response: null,
  } as {
    response: AllPosts | null;
  },
  reducers: {
    getSortedPosts(state, action: { payload: SortingPayload }) {},
    getSortedPostsSuccess(state, action: { payload: AllPosts }) {
      state.response = action.payload;
    },
    getSortedPostsFailure(state, action: { payload: string }) {},
  },
});

export const { actions } = sortedPostsSlice;
export default sortedPostsSlice.reducer;
