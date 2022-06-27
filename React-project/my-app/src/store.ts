import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import markedPostReducer from "./features/posts/mark-dismark/markDismarkSlice";
import authReducer from "./features/auth/authSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from "./features/user/userSlice";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    selectedPost: selectedPostReducer,
    likeDislike: likeDislikeReducer,
    markedPost: markedPostReducer,
    register: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
