import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppPages } from "./types";
import "./App.css";
// import "antd/dist/antd.css";
import { LoginPage } from "./pages/login/LoginPage";
import { RegistrationPage } from "./pages/registration-page/RegistrationPage";
import { MainPage } from "./pages/main-page/MainPage";
import { RegistrationSuccess } from "./pages/registration-success/RegistrationSuccess";
import { MyPosts } from "./pages/all-posts/MyPosts";
import { SelectedPost } from "./pages/selected-post/SelectedPost";
import { RegistrationConfirmation } from "./pages/registration-confirm/RegistrationConfirmation";
import { InformationPage } from "./pages/information/InformationPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path={AppPages.CONFIRMATION}
          element={<RegistrationConfirmation />}
        ></Route>
        <Route path={AppPages.INFO_PAGE} element={<InformationPage />}></Route>
        <Route path={AppPages.LOGIN} element={<LoginPage />}></Route>
        <Route path={AppPages.MAIN_PAGE} element={<MainPage />}></Route>
        <Route path={AppPages.POSTS} element={<MyPosts />}></Route>
        <Route
          path={AppPages.REGISTRATION}
          element={<RegistrationPage />}
        ></Route>
        <Route
          path={`${AppPages.POSTS}/:id`}
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
