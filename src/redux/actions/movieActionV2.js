import { createAction } from "@reduxjs/toolkit";
import { MOVIE_LIST_URL } from "../../constants/constant";
import axios from "axios";

// ------------- ACTIONS -------------------------- //

export const fetchMovieRequest = createAction('FETCH_MOVIE_REQUEST_V2');
export const fetchMovieSuccess = createAction('FETCH_MOVIE_SUCCESS_V2');
export const fetchMovieFailure = createAction('FETCH_MOVIE_FAILURE_V2');


export const fetchMovieV2 = () => {
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
  