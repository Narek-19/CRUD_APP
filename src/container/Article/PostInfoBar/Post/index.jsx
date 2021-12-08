import React, { useEffect, useRef, useState } from "react";
import style from "./style.module.css";
import { connect } from "react-redux";
import { selectPost } from "../../../../redux/selectors";
import DeletePost from "./DeletePost";
import EditPost from "./EditPost";
import { editPost } from "../../../../redux/actions/action";

const Post = (props) => {
  const [postValue, setPost] = useState("");
  const [time, setTime] = useState();
  const textAreaRef = useRef();
  const { post, editPost } = props;

  useEffect(() => {
    if (post[0].title !== "") {
      setPost(post[0].title);
    }
  }, [post]);

  const updatePost = (e) => {
    clearTimeout(time);
    setPost(e.target.value);
    setTime(
      setTimeout(() => {
        console.log(editPost(e.target.value,post[0].id));
        console.log(e.target.value,post[0].id);
        
      }, 2000)
    );
  };
  return (
    <div className={style.Post}>
      <textarea
        readOnly
        spellCheck="false"
        ref={textAreaRef}
        value={postValue}
        onChange={updatePost}
      ></textarea>
      <DeletePost postId={post[0].id} />
      <EditPost textarea={textAreaRef} />
    </div>
  );
};
const mapStateToProps = (state) => ({
  post: selectPost(state),
});
export default connect(mapStateToProps, { editPost })(Post);
