import React from "react";
import Post from "./Post";
import style from "./style.module.css";

export const PostInfoBar = () => {

  return (
    <div className={style.PostInfoBar}>
      <h1>Post Info</h1>
      <Post/>
    </div>
  );
};

