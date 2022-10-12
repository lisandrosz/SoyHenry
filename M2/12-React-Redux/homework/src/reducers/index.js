import {
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  ADD_MOVIE_FAVORITE,
  REMOVE_MOVIE_FAVORITE,
} from "../actions";

const innitialState = {
  moviesFavorites: [],
  moviesLoaded: [],
  moviesDetail: {},
};

const rootReducer = (state = innitialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        moviesLoaded: action.payload.Search,
      };

    case GET_MOVIE_DETAIL:
      return {
        ...state,
        moviesDetail: action.payload,
      };

    case ADD_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.concat(action.payload),
      };

    case REMOVE_MOVIE_FAVORITE:
      return {
        ...state,
        moviesFavorites: state.moviesFavorites.filter(
          (movie) => movie.title !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
