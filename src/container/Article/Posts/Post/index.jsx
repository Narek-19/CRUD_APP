import React from "react";
import { connect } from "react-redux";
import "./style.css";

const Post = (props) => {
  const { post } = props;

  return (
    <div className="Post"> 
        <div id="title">
          {post.title}
        </div>
    </div>
  );
};
export default connect(null)(Post);