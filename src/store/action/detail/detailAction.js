import { config } from "../../../constants";
import ActionTypes from '../../../constants/action-types';

/**
 * Function to fetch the movie detail based on id
 */
export const fetchMovieDetail = (movieId) => {
  const endpoint = `${config.VID_ENDPOINT}`;
  return (dispatch) => {
    dispatch(fetchMovie());
    fetch(`${endpoint}`)
      .then((movieDetailResponse) => movieDetailResponse.json())
      .then((movieDetail) => {
        return dispatch(getMovieDetailSuccess(movieDetail));
      })
      .catch((movieDetailError) => {
        dispatch(getMovieDetailError(movieDetailError));
      });
  };
};

/**
 * Action creator for fetching movie detail status indicator
 */
const fetchMovie = () => {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAIL_LOADING,
  };
};

/**
 * Action creator for movie detail fetch success status indicator
 */
const getMovieDetailSuccess = (movieDetail) => {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAIL_SUCCESS,
    data: movieDetail,
  };
};

/**
 * Action creator for get movie detail failure status indicator
 */
const getMovieDetailError = () => {
  return {
    type: ActionTypes.FETCH_MOVIE_DETAIL_ERROR,
  };
};

/**
 * Action creator for opening Video Module
 */
export const openVideoPlayerModule = () => {
  return {
    type: ActionTypes.IS_VIDEO_PLAYER_MODULE_OPEN,
  };
};


/**
 * Action creator for closing Video Module
 */
export const closeVideoPlayerModule = () => {
  return {
    type: ActionTypes.IS_VIDEO_PLAYER_MODULE_CLOSE,
  };
};


