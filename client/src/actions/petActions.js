import axios from 'axios';
import {
    GET_PETS,
    GET_PET,
    SET_LOADING,
    PETS_ERROR,
    ADD_PET,
    DELETE_PET,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PET,
    SEARCH_PETS
} from './types';

//get pets
export const getPets = () => async dispatch => {
    try {
        setLoading();

        const res = await axios.get('http://localhost:4000/api/pets');
        dispatch({
            type: GET_PETS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.msg
        });
    }
};

//get pet
export const getPet = petId => async dispatch => {
    try {
        setLoading();

        const res = await axios.get(`http://localhost:4000/api/pets/${petId}`);

        dispatch({
            type: GET_PET,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.msg
        });
    }
};

//add pet
export const addPet = pet => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };

    try {
        setLoading();

        const res = await axios.post('http://localhost:4000/api/pets', pet, config);

        dispatch({
            type: ADD_PET,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.msg
        });
    }
};

//set loading to true that pet has loaded
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};