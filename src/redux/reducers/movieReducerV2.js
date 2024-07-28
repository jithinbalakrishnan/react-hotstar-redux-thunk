import { createReducer } from "@reduxjs/toolkit";
import { fetchMovieSuccess } from "../actions/movieActionV2";
const initialState = {
    data: [],
    isLoading: false,
    error: null,
};

const reducer = createReducer(
    initialState,
    (builder) => {
        builder.addCase(fetchMovieSuccess, (state,action) => {
            state.data = action.payload
            state.error = initialState.requestMovieError
            state.isLoading = true
        })
        // .. ADD REMAINING CASES FOR FAILURE
    }
);

export default reducer