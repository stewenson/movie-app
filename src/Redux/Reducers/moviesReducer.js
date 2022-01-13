import * as MovieActionTypes from '../ActionTypes/moviesActionTypes';

const INITIAL_STATE = {
    upcomingMovies: [],
    topRatedMovies: [],
    popularMovies: [],
    error: ""
};

const moviesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // Movies actions
        case MovieActionTypes.GET_UPCOMMING_MOVIES:
            return {
                ...state,
                upcommingMovies: action.payload
            };
        case MovieActionTypes.GET_TOP_RATED_MOVIES:
            return {
                ...state,
                topRatedMovies: action.payload
            };
        case MovieActionTypes.GET_POPULAR_MOVIES:
            return {
                ...state,
                popularMovies: action.payload
            };
        default:
            return state;
    }
}

export default moviesReducer;