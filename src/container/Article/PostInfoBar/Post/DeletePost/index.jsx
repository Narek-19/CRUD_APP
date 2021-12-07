import React from "react";
import { connect } from "react-redux";
import { deletePost } from "../../../../../redux/actions/action";

const DeletePost = (props) => {
    const {postId,deletePost} = props;

    const removePost = () => {
        deletePost(postId);
    }
    return(
        <div className = "style.DeletePost">
            <button
            onClick = {removePost}>
                Delete
            </button>
        </div>
    )
}

export default connect(null,{deletePost})(DeletePost);