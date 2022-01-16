import axios from "../../../API/axios";
import * as MovieActionTypes from '../../ActionTypes/moviesActionTypes';



// Get upcomming movies
export const getUpcommingMovies = (url) => {
    return async dispatch => {
        await axios.get(url)
            .then(res =>
                dispatch({
                    type: MovieActionTypes.GET_UPCOMMING_MOVIES,
                    payload: res.data
                })
            ).catch(error => {
                dispatch({
                    type: MovieActionTypes.GET_UPCOMMING_MOVIES_ERROR,
                    error: error
                })
            })
    }
};

// Get top rated movies
export const getTopRatedMovies = (url) => {
    return async dispatch => {
        await axios.get(url)
            .then(res =>
                dispatch({
                    type: MovieActionTypes.GET_TOP_RATED_MOVIES,
                    payload: res.data,
                    random: res.data.results[Math.floor(Math.random() * res.data.results.length-1)]
                })
            ).catch(error => {
                dispatch({
                    type: MovieActionTypes.GET_TOP_RATED_MOVIES_ERROR,
                    error: error
                })
            })
    }
};

// Get top rated movies
export const getPopularMovies = (url) => {
    return async dispatch => {
        await axios.get(url)
            .then(res =>
                dispatch({
                    type: MovieActionTypes.GET_POPULAR_MOVIES,
                    payload: res.data,
                })
            ).catch(error => {
                dispatch({
                    type: MovieActionTypes.GET_POPULAR_MOVIES_ERROR,
                    error: error
                })
            })
    }
};
export const getLatestMovie = (url) => {
    return async dispatch => {
        await axios.get(url)
            .then(res =>
                dispatch({
                    type: MovieActionTypes.GET_LATEST_MOVIE,
                    payload: res.data
                })
            ).catch(error => {
                dispatch({
                    type: MovieActionTypes.GET_LATEST_MOVIE_ERROR,
                    error: error
                })
            })
    }
};
