import * as AuthActionTypes from "../../ActionTypes/Auth/authActionTypes";
import { getAuth } from "firebase/auth";
import app from "../../../base";
import { 
    signInWithEmailAndPassword, 
    onAuthStateChanged, 
    signOut, 
    createUserWithEmailAndPassword,
    updateProfile
} from "firebase/auth";

export const auth = getAuth(app);

// Auth state observer. This is triggered only on sign-in or sign-out.
export const authObserver = () => (dispatch) => {
    return onAuthStateChanged((auth), user => {
        if (user) {
            // User has signed in
            dispatch({
                type: AuthActionTypes.SIGNIN_USER_SUCCESS,
                payload: user
            });
        }
        else {
            // User has signed out
            dispatch({
                type: AuthActionTypes.SIGNOUT_USER_SUCCESS,
                payload: null
            });
        }
    });
};

export const signUpAction = (newUser) => async (dispatch) => {
    // The auth state listener/observer above will dispatch
    // a sign in action when the sign in is successfull.
    dispatch({ type: AuthActionTypes.SIGNUP_USER_REQUEST });
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            newUser.email, 
            newUser.password
            );
        await updateProfile((auth.currentUser),{
            displayName: newUser.name
        });
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNUP_USER_ERROR,
            err
        });
    }
};

export const signInAction = (user) => async (dispatch) => {
    // The auth state listener/observer above will dispatch
    // a sign in action when the sign in is successfull.
    dispatch({ type: AuthActionTypes.SIGNIN_USER_REQUEST });
    try {
        await signInWithEmailAndPassword(
            auth,
            user.email, 
            user.password
            );
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNIN_USER_ERROR,
            err
        });
    }
};

export const signOutAction = () => async (dispatch) => {
    // The auth state listener/observer above will dispatch
    // a sign out action when the sign out is successfull.
    dispatch({ type: AuthActionTypes.SIGNOUT_USER_REQUEST });
    try {
        await signOut(auth);
    }
    catch (err) {
        dispatch({
            type: AuthActionTypes.SIGNOUT_USER_ERROR,
            err
        });
    };
};
