import { call, put, takeEvery } from "typed-redux-saga";
import {
  getAllPosts,
  getAllPostsSuccess,
  getAllPostsFailure,
} from "./allPostsSlice";
import { PostsApi } from "./api";

export function* allPostsSaga() {
  yield takeEvery(getAllPosts, function* () {
    try {
      const response = yield* call(PostsApi.getPosts);
      yield* put(getAllPostsSuccess(response.results));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(getAllPostsFailure());
      }
    }
  });
}
