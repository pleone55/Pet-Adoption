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
} from '../actions/types';

const initialState = {
    pets: null,
    current: null,
    loading: false,
    error: null
};

export default(state = initialState, action) => {
    switch(action.type) {
        case GET_PETS:
            return {
                ...state,
                pets: action.payload,
                loading: false
            }
        case GET_PET:
            return {
                ...state,
                pets: action.payload,
                loading: false
            }
        case ADD_PET:
            return {
                ...state,
                pets: [...state.pets, action.payload],
                loading: false
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case PETS_ERROR:
            return {
                ...state,
                error: action.payload
            }
        default:
            return state
    }
}