export const GET_ALL_POSTS = "GET_ALL_POSTS";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_ALL_USERS_POST = "GET_ALL_USERS_POST";
export const GET_ALL_COMMENTS_POST = "GET_ALL_COMMENTS_POST";

export const getAllUsers = () => {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ALL_USERS, payload: data }));
  };
};

export const getAllUserPosts = (id) => {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ALL_USERS_POST, payload: data }));
  };
};

export const getAllCommentsPost = (id) => {
  return function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ALL_COMMENTS_POST, payload: data }));
  };
};

export const getAllPosts = () => {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => dispatch({ type: GET_ALL_POSTS, payload: data }));
  };
};
