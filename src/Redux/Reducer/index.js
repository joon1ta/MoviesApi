import {GET_MOVIES} from '../Actions/index';

const initialState = {
    movies: []
}


function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES: 
            return {
                ...state,
                movies: action.payload
            };
        default: 
            return state;
    }
}


export default rootReducer;