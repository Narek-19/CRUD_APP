import React from "react";
import style from './style.module.css';
const EditPost = (props) => {
    const {textarea} = props;
    console.log(textarea);
    const editPost = () => {
        textarea.current.removeAttribute("readonly");
        textarea.current.focus();
    }
    return(
        <div className = {style.EditPost}>
            <button onClick = {editPost}>Edit</button>
        </div>
    )
}
export default EditPost;