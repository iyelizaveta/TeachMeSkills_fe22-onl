import { call, takeEvery, put } from "typed-redux-saga";
import { sendLikeDislike } from "./api";
import { setState, reset } from "./likeDislikeSlice";

export function* logSetState() {
  yield takeEvery(setState, function* (action) {
    try {
      const result = yield* call(sendLikeDislike, action.payload);
      console.log(result);
    } catch (e) {
      console.log(e);
      yield put(reset({ id: action.payload.id }));
    }
  });
}
