import { expectSaga } from "redux-saga-test-plan";
import { allPostsSaga } from "./allPostsSagas";
import * as matchers from "redux-saga-test-plan/matchers";
import { PostsApi } from "./api";
import {
  getAllPostsSuccess,
  getAllPosts,
  getAllPostsFailure,
} from "./allPostsSlice";
import { throwError } from "redux-saga-test-plan/providers";

test("Success Saga flow", () => {
  return expectSaga(allPostsSaga)
    .provide([[matchers.call.fn(PostsApi.getPosts), { results: [] }]])
    .put(getAllPostsSuccess([]))
    .not.put.like({ action: { type: getAllPostsFailure().type } })
    .dispatch(getAllPosts())
    .run();
});

test("Failure Saga flow", () => {
  return expectSaga(allPostsSaga)
    .provide([
      [matchers.call.fn(PostsApi.getPosts), throwError(new Error("failure"))],
    ])
    .put(getAllPostsFailure())
    .not.put.like({ action: { type: getAllPostsSuccess([]).type } })
    .dispatch(getAllPosts())
    .run();
});
