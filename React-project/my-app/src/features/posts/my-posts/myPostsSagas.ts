import { call, put, takeEvery } from "typed-redux-saga";
import {
  getMyPosts,
  getMyPostsSuccess,
  getMyPostsFailure,
} from "./myPostsSlice";
import { MyPostsApi } from "./api";

export function* myPostsSaga() {
  yield takeEvery(getMyPosts, function* () {
    const accessToken = yield* call([localStorage, "getItem"], "access-token");
    if (accessToken) {
      try {
        const response = yield* call(MyPostsApi.getMyPosts, { accessToken });
        yield* put(getMyPostsSuccess(response));
      } catch (e) {
        if (e instanceof Error) {
          yield* put(getMyPostsFailure());
        }
      }
    }
  });
}
