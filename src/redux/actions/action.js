export const getPosts = () => {
  return async (dispatch) => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts");
    const jsonData = await response.json();
    dispatch({
      type: "GET_POSTS",
      payload: jsonData,
    });
  };
};

export const createPost = (post,id) => {
  console.log(id);
    return async (dispatch) => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title:post,
        postId:id
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonData = await response.json();
    dispatch({
      type: "CREATE_POST",
      payload: jsonData,
    });
  };
};
