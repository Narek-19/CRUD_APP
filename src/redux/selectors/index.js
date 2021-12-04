import { createSelector } from "reselect";

export const getProject = (state) => state.project;
export const getPost = (state) => state.postReducer;


export const  selectPosts  = createSelector(getProject,(project)=>{
    return project.posts;
});

export const selectPost = createSelector(getPost,(project)=>{
    return project.post;
});