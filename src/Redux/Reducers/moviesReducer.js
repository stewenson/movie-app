import * as MovieActionTypes from '../ActionTypes/moviesActionTypes';

const INITIAL_STATE = {
    netflixOriginals: [],
    upcomingMovies: [],
    topRatedMovies: [],
    popularMovies: [],
    latestMovie: [],
    random: [],
    error: ""
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Movies actions
        case MovieActionTypes.GET_NETFLIX_ORIGINALS:
            return {
                ...state,
                netflixOriginals: action.payload
            };
        case MovieActionTypes.GET_UPCOMMING_MOVIES:
            return {
                ...state,
                upcommingMovies: action.payload
            };
        case MovieActionTypes.GET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.payload,
                random: action.random
            };
        case MovieActionTypes.GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            };
        case MovieActionTypes.GET_LATEST_MOVIE:
            return {
                ...state,
                latestMovie: action.payload
            };
        default:
            return state;
    }
}

export default moviesReducer;