const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_MOVIE_REQUEST":
      return { ...state, isLoading: true, error: null };
    case "FETCH_MOVIE_SUCCESS":
      return { ...state, data: action.payload, isLoading: false };
    case "FETCH_MOVIE_FAILURE":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};

export default movieReducer;
