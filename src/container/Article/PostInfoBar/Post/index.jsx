import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { connect } from "react-redux";
import { selectPost } from "../../../../redux/selectors";
import DeletePost from "./DeletePost";

const Post = (props) => {
  const [postValue, setPost] = useState("");
  const { post } = props;
  useEffect(() => {
    if (post[0].title !== "") {
      setPost(post[0].title);
    }
  }, [post]);

  const updatePost = (e) => {
    setPost(e.target.value);
  };
  return (
    <div className={style.Post}>
      <textarea
        value={postValue}
        onChange={updatePost}
      ></textarea>
      <DeletePost postId = {post[0].id}/>
    </div>
  );
};
const mapStateToProps = (state) => ({
  post: selectPost(state),
});
export default connect(mapStateToProps)(Post);
