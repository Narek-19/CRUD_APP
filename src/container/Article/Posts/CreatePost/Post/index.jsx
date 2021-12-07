import React,{useState} from "react";
import style from "./style.module.css";
import { connect } from "react-redux";
import {createPost} from '../../../../../redux/actions/action'
import { randomId } from "../helper";

const Post = (props) => {
  const [post, setPost] = useState("");

  const { createPost } = props;

  const handleChange = (e) => {
    setPost(e.target.value);
  }
  const handlePost = (e) => {
    e.preventDefault();
    const id = randomId();
    createPost(post,id);
  };
  return (
    <div className={style.Post}>
      <form onSubmit={handlePost}>
        <input placeholder="Add Post" onChange = {handleChange}/>
      </form>
    </div>
  );
};
export default connect(null, { createPost })(Post);
