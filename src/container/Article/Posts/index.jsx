import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./style.css";
import { selectPosts } from "../../../redux/selectors";
import { getPosts } from "../../../redux/actions/action";
import  Post from "./Post";
import CreatePost from "./Post/CreatePost";

const Posts = (props) => {
  const { posts, getPosts } = props;
  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="Posts">
      <CreatePost/>
      {
        posts.map((post)=>{
          return (
            <Post post = {post} key = {post.id}/>
          ) 
        })
      }
    </div>
  );
};
const mapStateToProps = (state) => ({
  posts: selectPosts(state),
});

export default connect(mapStateToProps, { getPosts })(Posts);
