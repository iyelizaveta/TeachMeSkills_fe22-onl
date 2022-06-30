import { all } from "redux-saga/effects";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { authSagas } from "./features/auth";
import { userSagas } from "./features/user";
import { allPostsSagas } from "./features/posts/all-posts";
import { postSaga } from "./features/posts/post-page/postPageSagas";
import { searchSagas } from "./features/search";

export function* rootSaga() {
  yield all([
    logSetState(),
    authSagas(),
    userSagas(),
    allPostsSagas(),
    postSaga(),
    searchSagas(),
  ]);
}
