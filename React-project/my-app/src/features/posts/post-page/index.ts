import { all } from "redux-saga/effects";
import { postSaga } from "./postPageSagas";

export function* postSagas() {
  yield all([postSaga()]);
}
