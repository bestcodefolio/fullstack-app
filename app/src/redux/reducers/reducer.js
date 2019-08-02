import { combineReducers } from 'redux';
import {
    SELECT_QUERY, INVALIDATE_QUERY,
    REQUEST_GIFS, RECEIVE_GIFS
} from '../actions/actions.js';

const selectedQuery = (state = '', action) => {
    switch (action.type) {
        case SELECT_QUERY:
            return action.query;
        default:
            return state;
    }
};

const gifs = (state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
}, action) => {
    switch (action.type) {
        case INVALIDATE_QUERY:
            return {
                ...state,
                didInvalidate: true
            }
        case REQUEST_GIFS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_GIFS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.gifs,
            }
        default:
            return state;
    }
};

const gifsByQuery = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_QUERY:
        case RECEIVE_GIFS:
        case REQUEST_GIFS:
            return {
                ...state,
                [action.query]: gifs(state[action.query], action)
            }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    gifsByQuery,
    selectedQuery
});

export default rootReducer;
