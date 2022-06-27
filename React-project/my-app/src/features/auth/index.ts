import { all } from "redux-saga/effects";
import {
  activateSaga,
  loginSaga,
  loginSuccessSaga,
  registerSaga,
  refreshSaga,
} from "./authSagas";

export function* authSagas() {
  yield all([
    registerSaga(),
    activateSaga(),
    loginSuccessSaga(),
    loginSaga(),
    refreshSaga(),
  ]);
}
