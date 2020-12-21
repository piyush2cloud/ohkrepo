import ActionTypes from '../../../constants/action-types';

const initialState = {
  movies: [],
  isLoading: false,
  movieDetail: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_LIST_SUCCESS:
      return {
        ...state,
        movies: action.data,
        isLoading: false,
      };
    case ActionTypes.FETCH_MOVIES_LIST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_MOVIE_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default homeReducer;
