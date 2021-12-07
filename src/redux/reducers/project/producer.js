export const getPosts = (state, action) => {
  const dataPosts = action.payload.map((post) => {
    return {
      id: post.id,
      title: post.title,
    };
  });
  const stateClone = { ...state };
  stateClone.posts = dataPosts;
  return stateClone;
};

export const createPost = (state,action) => {
  const stateClone = { ...state };
  stateClone.posts = [...state.posts, action.payload];
  return stateClone; 
}

export const deletePost = (state,action) => {
  const stateClone = {...state};
  const updatedArray = state.posts.filter((res) => res.id !== action.payload );
  stateClone.posts = updatedArray;
  return stateClone; 
}
