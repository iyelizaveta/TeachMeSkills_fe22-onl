import { all } from "redux-saga/effects";
import { sortedPostsSaga } from "./sortingPostsSagas";
import { actions } from "./sortingPostsSlice";
export { SortBar } from "./sort-bar/SortBar";
export { default } from "./sortingPostsSlice";
export const { getSortedPosts, getSortedPostsSuccess, getSortedPostsFailure } =
  actions;

export function* sortingPostsSagas() {
  yield all([sortedPostsSaga()]);
}
