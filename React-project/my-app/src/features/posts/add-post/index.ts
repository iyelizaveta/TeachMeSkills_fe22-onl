import { actions } from "./addPostSlice";
import { all } from "redux-saga/effects";
import { addPostSaga } from "./addPostSaga";

export { default } from "./addPostSlice";
export { Form as AddPostForm } from "./ui/Form";

export const { addPost } = actions;

export function* addPostSagas() {
  yield all([addPostSaga()]);
}
