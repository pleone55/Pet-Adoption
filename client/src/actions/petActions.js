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

        const res = await fetch('http://localhost:4000/api/pets');
        const data = await res.json();

        dispatch({
            type: GET_PETS,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.data
        });
    }
};

//get pet
export const getPet = petId => async dispatch => {
    try {
        setLoading();

        const res = await fetch(`http://localhost:4000/api/pets/${petId}`);
        const data = await res.json();

        dispatch({
            type: GET_PET,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.data
        });
    }
};

//add pet
export const addPet = pet => async dispatch => {
    try {
        setLoading();

        const res = await fetch('http://localhost:4000/api/pets', {
            method: 'POST',
            body: JSON.stringify(pet),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await res.json();

        dispatch({
            type: ADD_PET,
            payload: data
        });
    } catch (err) {
        dispatch({
            type: PETS_ERROR,
            payload: err.response.data
        });
    }
};

//set loading to true that pet has loaded
export const setLoading = () => {
    return {
        type: SET_LOADING
    };
};