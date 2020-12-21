import ActionTypes from '../../../constants/action-types';

const initialState = {
  detailData: [],
  isLoading: false,
  movieDetail: null,
  isVideoModule: false
};

const detailReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIE_DETAIL_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case ActionTypes.FETCH_MOVIE_DETAIL_ERROR:
      return {
        ...state,
        isLoading: false,
      };
    case ActionTypes.FETCH_MOVIE_DETAIL_SUCCESS:
      return {
        ...state,
        detailData: action.data,
        isLoading: false,
      };
    case ActionTypes.IS_VIDEO_PLAYER_MODULE_OPEN:
        return {
          ...state,
          isVideoModule: true
        };
    case ActionTypes.IS_VIDEO_PLAYER_MODULE_CLOSE:
        return {
            ...state,
            isVideoModule: false
          };
    default:
      return state;
  }
};

export default detailReducer;
