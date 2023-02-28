import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";

const PostList = () => {
  //refer to intitial state for state
  const posts = useSelector((state) => state.posts);
  //   console.log("posts", posts);
  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
