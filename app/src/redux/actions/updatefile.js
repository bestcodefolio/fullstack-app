import { API_URL } from '../constants/constants.js';
const UPDATE_DOCUMENT_FAILED = 'UPDATE_DOCUMENT_FAILED';

export const updateFail = error => {
    return { 
        type: UPDATE_DOCUMENT_FAILED,
        error
    };
}

export const UpdateDocumentRequest = (id, file) => async dispatch => {
    return await fetch(`${API_URL}${id}`, {
        method: 'put',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(file)
    })
}