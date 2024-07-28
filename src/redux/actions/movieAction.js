import axios from "axios";
import { MOVIE_LIST_URL } from "../../constants/constant";

export const fetchMovieRequest = () => ({ type: "FETCH_MOVIE_REQUEST" });
export const fetchMovieSuccess = (data) => ({
  type: "FETCH_MOVIE_SUCCESS",
  payload: data,
});
export const fetchMovieFailure = (error) => ({
  type: "FETCH_MOVIE_FAILURE",
  payload: error,
});

export const fetchMovie = () => {
  return async (dispatch) => {
    dispatch(fetchMovieRequest());
    try {
      const response = await axios.get(MOVIE_LIST_URL);
      dispatch(fetchMovieSuccess(response?.data?.results));
    } catch (error) {
      dispatch(fetchMovieFailure(error.message));
    }
  };
};
