import movieReducer from './movieReducer';
import movieReducerV2 from './movieReducerV2'
import { combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
    movieList: movieReducer,
    movieListV2: movieReducerV2
});

export default rootReducer;