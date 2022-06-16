import { all } from "redux-saga/effects";
import { logSetState } from "./features/posts/like-dislike/likeDislikeSagas";
import { registerSaga } from "./features/auth/authSagas";

export function* rootSaga() {
  yield all([logSetState(), registerSaga()]);
}
