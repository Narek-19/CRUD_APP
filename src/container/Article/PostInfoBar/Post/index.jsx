import React from "react";
import style from './style.module.css';
import { connect } from "react-redux";
import { selectPost } from "../../../../redux/selectors";

const Post = (props) => {
    const {post} = props;
    return(
        <div className = {style.Post}>
            <p>{post[0].title}</p>
        </div>
    )
}
const mapStateToProps = (state) => ({
    post: selectPost(state),
  });
export default connect(mapStateToProps)(Post);