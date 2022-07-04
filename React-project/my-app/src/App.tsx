import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppPages } from "./types";
import "./App.css";
import { LoginPage } from "./pages/login/LoginPage";
import { RegistrationPage } from "./pages/registration-page/RegistrationPage";
import { MainPage } from "./pages/main-page/MainPage";
import { RegistrationSuccess } from "./pages/registration-success/RegistrationSuccess";
import { MyPosts } from "./pages/my-posts/MyPosts";
import { SelectedPost } from "./pages/selected-post/SelectedPost";
import { RegistrationConfirmation } from "./pages/registration-confirm/RegistrationConfirmation";
import { InformationPage } from "./pages/information/InformationPage";
import { Activate } from "./pages/activate/Activate";
import { AllPosts } from "./pages/all-posts-page/AllPostsPage";
import { PostPage } from "./pages/post-page/PostPage";
import { AddPostPage } from "./pages/add-post/AddPostPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={`${AppPages.ACTIVATE}/:uid/:token`}
          element={<Activate />}
        ></Route>
        <Route path={AppPages.ADD_POST} element={<AddPostPage />}></Route>
        <Route path={AppPages.ALL_POSTS} element={<AllPosts />}></Route>
        <Route
          path={AppPages.CONFIRMATION}
          element={<RegistrationConfirmation />}
        ></Route>
        <Route path={AppPages.INFO_PAGE} element={<InformationPage />}></Route>
        <Route path={AppPages.LOGIN} element={<LoginPage />}></Route>
        <Route path={AppPages.MAIN_PAGE} element={<MainPage />}></Route>
        <Route path={AppPages.MY_POSTS} element={<MyPosts />}></Route>
        <Route
          path={`${AppPages.POST_PAGE}/:id`}
          element={<PostPage />}
        ></Route>
        <Route
          path={AppPages.REGISTRATION}
          element={<RegistrationPage />}
        ></Route>
        <Route
          path={`${AppPages.ALL_POSTS}/:id`}
          element={<SelectedPost />}
        ></Route>
        <Route
          path={AppPages.SUCCESS_PAGE}
          element={<RegistrationSuccess />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
