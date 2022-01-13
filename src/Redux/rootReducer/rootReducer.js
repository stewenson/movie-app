import authReducer from '../Reducers/authReducer';
import { combineReducers } from 'redux';
import moviesReducer from '../Reducers/moviesReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    movie: moviesReducer,
});

export default rootReducer;