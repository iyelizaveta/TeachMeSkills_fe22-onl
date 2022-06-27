import { all } from "redux-saga/effects";
import { allPostsSaga } from "./allPostsSagas";

export function* allPostsSagas() {
  yield all([allPostsSaga()]);
}
