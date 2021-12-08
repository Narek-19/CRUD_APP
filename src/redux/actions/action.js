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

export const createPost = (post, id) => {
  return async (dispatch) => {
    const response = await fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: post,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const jsonData = await response.json();
    dispatch({
      type: "CREATE_POST",
      payload: { ...jsonData, id: id },
    });
  };
};

export const getPost = (post) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${post.id}`
    );
    const jsonData = await response.json();
    dispatch({
      type: "GET_POST",
      payload: { ...jsonData, id: post.id, title: post.title },
    });
  };
};
export const deletePost = (id) => {
  return async (dispatch) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${id}`,
      {
        method: "DELETE",
      }
    );
    dispatch({
      type: "DELETE_POST",
      payload: id,
    });
  };
};

export const editPost = (post, id) => {
  return async (dispatch) => {
    const response = await fetch(
      `http://jsonplaceholder.typicode.com/post/${id}`,
      {
        method: "POST",
        body: JSON.stringify({
          id: id,
          title: post,
        }),
      }
    );
    const jsonData = await response.json();
    dispatch({
      type: "EDIT_POST",
      payload: {id:id,title:post},
    });
  };
};
