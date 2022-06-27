import { all } from "redux-saga/effects";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { authSagas } from "./features/auth";
import { userSagas } from "./features/user";

export function* rootSaga() {
  yield all([logSetState(), authSagas(), userSagas()]);
}
