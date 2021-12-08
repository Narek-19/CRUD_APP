import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post";
import style from "./style.module.css";

export const PostInfoBar = () => {
  const currentPost = useSelector((state) => {
    const { postReducer } = state;
    return postReducer.post[0].title;
  });

  return (
    <div className={style.PostInfoBar}>
      <h1>Post</h1>
      {(function () {
        if (currentPost !== "") {
          return <Post />;
        }
      })()}
    </div>
  );
};
