import React from "react";
import "./App.css";
import { RegistrationConfirmation } from "./pages/registration-confirm/RegistrationConfirmation";
// import { LoginPage } from "./pages/login/LoginPage";
// import { PostCard } from "./ui/post-card/PostCard";
// import { PostList } from "./ui/post-list/PostList";

function App() {
  return (
    <div className="App">
      {/* <PostCard
        id={0}
        title="What is Lorem ipsum?"
        text="Lorem ipsum"
        date="15.05.2022"
        image={undefined}
      ></PostCard> */}
      {/* <PostList></PostList> */}
      {/* <LoginPage></LoginPage> */}
      <RegistrationConfirmation></RegistrationConfirmation>
    </div>
  );
}

export default App;
