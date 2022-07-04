import { all } from "redux-saga/effects";
import { myPostsSaga } from "./myPostsSagas";

export function* myPostsSagas() {
  yield all([myPostsSaga()]);
}
