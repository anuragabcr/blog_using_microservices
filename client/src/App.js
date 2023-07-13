import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (
    <div className="container">
      <h2>Create a Post</h2>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
