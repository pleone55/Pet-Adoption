import { combineReducers } from 'redux';
import petReducer from './petReducer';
import authReducer from './authReducer';

export default combineReducers({
    pet: petReducer,
    auth: authReducer
});