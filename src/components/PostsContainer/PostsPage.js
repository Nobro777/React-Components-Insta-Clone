//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("postspage", props)
  return (
    <div className="posts-container-wrapper">
      {
        props.postData.map( post => (
          <Post
          key = {post.userName}
          post = {post}
          />
        ))}
      </div>
  );
};

export default PostsPage;

