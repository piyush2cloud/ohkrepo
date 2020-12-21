import { config } from "../../../constants";
import ActionTypes from '../../../constants/action-types';

/**
 * Function to fetch the  list of movies and transform it to array for displaying
 */
export const fetchMoviesList = (categoryId) => {
  const endpoint = `${config.API_ENDPOINT}/${categoryId}?classification_id=5&device_identifier=web&locale=es&market_code=es`;
  return (dispatch) => {
    dispatch(getMovies());
    fetch(`${endpoint}`)
      .then((movieListResponse) => movieListResponse.json())
      .then((movies) => {
        return dispatch(getMoviesSuccess(movies));
      })
      .catch((moviesListError) => {
        dispatch(getMoviesError(moviesListError));
      });
  };
};


/**
 * Action creator for fetching movies status indicator
 */
const getMovies = () => {
  return {
    type: ActionTypes.FETCH_MOVIES_LIST_LOADING,
  };
};


/**
 * Action creator for movies fetch success status indicator
 */
const getMoviesSuccess = (movies) => {
  return {
    type: ActionTypes.FETCH_MOVIES_LIST_SUCCESS,
    data: movies,
  };
};


/**
 * Action creator for movies fetch failure status indicator
 */
const getMoviesError = () => {
  return {
    type: ActionTypes.FETCH_MOVIES_LIST_SUCCESS,
  };
};

