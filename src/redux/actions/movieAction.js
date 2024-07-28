// https://www.freecodecamp.org/news/how-to-work-with-redux-thunk/
import axios from "axios";
import { MOVIE_LIST_URL } from "../../constants/constant";

// -------- ACTION TYPES ---- //

export const fetchMovieRequest = () => ({ type: "FETCH_MOVIE_REQUEST" });
export const fetchMovieSuccess = (data) => ({
  type: "FETCH_MOVIE_SUCCESS",
  payload: data,
});
export const fetchMovieFailure = (error) => ({
  type: "FETCH_MOVIE_FAILURE",
  payload: error,
});

// -------- ACTION TYPES ENDS ---- //

// ---------- THUNK ACTION CREATOR -------- //

export const fetchMovie = () => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());
    try {
      const response = await axios.get(MOVIE_LIST_URL);
      // These functions have access to the dispatch and getState methods of the Redux store,
      // perform asynchronous operations and dispatch actions based on the results.
      dispatch(fetchMovieSuccess(response?.data?.results));
    } catch (error) {
      dispatch(fetchMovieFailure(error.message));
    }
  };
};

// Writing thunk functions in Redux involves defining asynchronous action creators that return a function 
// instead of a plain action object.
