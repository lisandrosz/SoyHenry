export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const ADD_MOVIE_FAVORITE = "ADD_MOVIE_FAVORITE";
export const REMOVE_MOVIE_FAVORITE = "REMOVE_MOVIE_FAVORITE";
const apiKey = "2d0b6852";

export const getMovies = (titulo) => {
  return function (dispatch) {
    return fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${titulo}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_MOVIES,
          payload: data,
        });
      });
  };
};

export const getMovieDetail = (id) => {
  return function (dispatch) {
    return fetch(`https://omdbapi.com/?apikey=${apiKey}&i=${id}`)
      .then((response) => response.json())
      .then((info) => {
        dispatch({
          type: GET_MOVIE_DETAIL,
          payload: info,
        });
      });
  };
};

export const addMovieFavorite = (titulo) => {
  return {
    type: ADD_MOVIE_FAVORITE,
    payload: titulo,
  };
};

export const removeMovieFavorite = (titulo) => {
  return {
    type: REMOVE_MOVIE_FAVORITE,
    payload: titulo,
  };
};
