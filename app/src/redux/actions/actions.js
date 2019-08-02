import { API_URL } from '../constants/constants.js';

export const REQUEST_GIFS = 'REQUEST_GIFS';
export const RECEIVE_GIFS = 'RECEIVE_GIFS';
export const SELECT_QUERY = 'SELECT_QUERY';
export const INVALIDATE_QUERY = 'INVALIDATE_QUERY';

export const selectQuery = query => ({
    type: SELECT_QUERY,
    query
});

export const invalidateQuery = query => ({
    type: INVALIDATE_QUERY,
    query
});

const requestGifs = query => ({
    type: REQUEST_GIFS,
    query,
});

const receiveGifs = (query, json) => ({
    type: RECEIVE_GIFS,
    query,
    gifs: json//.data
});

const fetchGifs = (query, number) => async dispatch => {
    dispatch(requestGifs(query, number));
    // const response = await fetch(`${API_URL}?q=${query}&api_key=${API_KEY}&limit=${number}`);
    if (query && number != null) {
        const response = await fetch(`${API_URL}?q=${query}&limit=${number}`);
        const data = await response.json();
        return dispatch(receiveGifs(query, data));
    }
};

const shouldFetchGifs = (state, query, number) => {
    const gifs = state.gifsByQuery[query];
    if (!gifs) {
        return true;
    } else {
        if (gifs.items.length !== number) {
            return true;
        }
    }
    if (gifs.isFetching) {
        return false;
    }
    return gifs.didInvalidate;
};

export const fetchGifsIfNeeded = (query, number) => (dispatch, getState) => {
    if (shouldFetchGifs(getState(), query, number)) {
        return dispatch(fetchGifs(query, number));
    }
};

export const getGifById = id => (dispatch, getState) => {
    const gifs = getState().gifsByQuery[getState().selectedQuery].items;
    return gifs.find(gif => gif.id === id);
};
