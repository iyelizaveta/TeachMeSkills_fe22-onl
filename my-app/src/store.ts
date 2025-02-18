import { configureStore } from "@reduxjs/toolkit";
import selectedPostReducer from "./features/posts/selectedPostSlice";
import likeDislikeReducer from "./features/posts/like-dislike/likeDislikeSlice";
import markedPostReducer from "./features/posts/mark-dismark/markDismarkSlice";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";
import userReducer from "./features/user/userSlice";
import allPostsReducer from "./features/posts/all-posts/allPostsSlice";
import postReducer from "./features/posts/post-page/postPageSlice";
import searchReducer from "./features/search";
import addPostReducer from "./features/posts/add-post";
import myPostsReducer from "./features/posts/my-posts/myPostsSlice";
import sortedPostsReducer from "./features/posts/sorting-post";
import { authReducer } from "./features/auth";

let sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
export const allReducers = {
  selectedPost: selectedPostReducer,
  likeDislike: likeDislikeReducer,
  markedPost: markedPostReducer,
  auth: authReducer,
  user: userReducer,
  allPosts: allPostsReducer,
  post: postReducer,
  search: searchReducer,
  addPost: addPostReducer,
  myPosts: myPostsReducer,
  sortedPosts: sortedPostsReducer,
};

export const store = configureStore({
  reducer: allReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
