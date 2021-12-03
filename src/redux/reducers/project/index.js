import { createPost } from "./producer";
import { getPosts } from "./producer";


const initialState = {
  posts: [],
};

const project = (state = initialState, action) => {
  console.log("action>>", action.payload);

  switch (action.type) {
    case "GET_POSTS":
      return getPosts(state, action);
    case "CREATE_POST":
      return createPost(state,action);
    default:
      return state;
  }
};
export default project;
