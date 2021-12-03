import { createSelector } from "reselect";

export const getProject = (state) => state.project;


export const  selectPosts  = createSelector(getProject,(project)=>{
    return project.posts;
});
