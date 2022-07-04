import { call, put, takeEvery } from "typed-redux-saga";
import { actions } from "./sortingPostsSlice";
import { SortingPostsApi } from "./api";

export function* sortedPostsSaga() {
  yield takeEvery(actions.getSortedPosts, function* (action) {
    try {
      const result = yield* call(
        SortingPostsApi.getOrderingPosts,
        action.payload
      );
      yield* put(actions.getSortedPostsSuccess(result));
    } catch (e) {
      if (e instanceof Error) {
        yield* put(actions.getSortedPostsFailure(e.message));
      }
    }
  });
}
