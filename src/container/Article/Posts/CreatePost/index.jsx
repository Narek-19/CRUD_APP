import React from "react";
import Post from "./Post";
import style from './style.module.css';

export const CreatePost = () => {
  return (
    <div className={style.Post}>
      <Post />
    </div>
  );
};
