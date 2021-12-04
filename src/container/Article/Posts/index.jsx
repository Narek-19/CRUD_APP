import React, { useEffect } from "react";
import { connect } from "react-redux";
import style from "./style.module.css";
import { selectPosts } from "../../../redux/selectors";
import { getPosts } from "../../../redux/actions/action";
import  Post from "./Post";
import {CreatePost} from "./CreatePost";

const Posts = (props) => {
  const { posts, getPosts } = props;
  useEffect(() => {
    getPosts();
  }, []);
console.log(posts);
  return (
    <div className={style.Posts}>
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
