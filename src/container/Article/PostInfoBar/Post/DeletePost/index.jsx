import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deletePost } from "../../../../../redux/actions/action";
import style from './style.module.css';

const DeletePost = (props) => {
    const {postId,deletePost,textarea} = props;

    const removePost = () => {
        deletePost(postId);
        textarea.current.value = "";
    }
    return(
        <div className = {style.DeletePost}>
            <button
            onClick = {removePost}>
                Delete
            </button>
        </div>
    )
}

export default connect(null,{deletePost})(DeletePost);