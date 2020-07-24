import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from './types';

//load user
export const loadUser = () => async dispatch => {
    //load token into global headers. Private Route.
    setAuthToken(localStorage.token);

    try {
        const res = await axios.get('http://localhost:4000/api/auth');
        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: AUTH_ERROR
        });
    }
};

//login user
export const loginUser = (formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        const res = await axios.post('http://localhost:4000/api/auth', formData, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data,
        });

        dispatch(loadUser());

    } catch (err) {
        dispatch({
            type: LOGIN_FAIL,
            payload: err.response.data
        });
    }
};

//logout user
export const logout = () => async dispatch => {
    dispatch({ type: LOGOUT });
}

//clear errors
export const clearErrors = () => async dispatch => {
    dispatch({ type: CLEAR_ERRORS });
}
