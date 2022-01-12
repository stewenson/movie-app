import * as AuthActionTypes from '../ActionTypes/Auth/authActionTypes';
import app from '../../base';
import { getAuth } from "firebase/auth";

const auth = getAuth(app);

const INITIAL_STATE = {
    isLoading: false,
    authUser: auth,
    authError: null
};

const authReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        // sign up actions
        case AuthActionTypes.SIGNUP_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AuthActionTypes.SIGNUP_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: action.payload
            };
         // sign in actions
         case AuthActionTypes.SIGNIN_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AuthActionTypes.SIGNIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: action.payload
            };
        case AuthActionTypes.SIGNIN_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                authUser: null,
                authError: action.err.message
            };
            // sign out actions
        case AuthActionTypes.SIGNOUT_USER_REQUEST:
            return {
                ...state,
                isLoading: true
            };
        case AuthActionTypes.SIGNOUT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                authUser: null
            };

        case AuthActionTypes.SIGNOUT_USER_ERROR:
            return {
                ...state,
                isLoading: false,
                authError: action.err.message
            };
        default:
            return state;
    }
}

export default authReducer;