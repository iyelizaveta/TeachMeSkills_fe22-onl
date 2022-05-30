import React from "react";
import "./App.css";
import { MyPosts } from "./pages/all-posts/MyPosts";
import { SelectedPost } from "./pages/selected-post/SelectedPost";

function App() {
  return (
    <div className="App">
      <MyPosts></MyPosts>
    </div>
  );
}

export default App;
