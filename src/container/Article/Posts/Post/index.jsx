import React from "react";
import { connect } from "react-redux";
import style from "./style.module.css";
import  {getPost}  from "../../../../redux/actions/action";

const Post = (props) => {
  const { post, getPost } = props;
  const takePost = () => {
    getPost(post)
  }
  return (
    <div className={style.Post}> 
        <div className={style.title} onClick = {takePost}>
          {post.title}
        </div>
    </div>
  );
};

export default connect(null,{getPost})(Post);