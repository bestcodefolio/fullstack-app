const DELETE_DOCUMENT_FAILED = 'DELETE_DOCUMENT_FAILED';

export const deleteFail = error => {
    return { 
        type: DELETE_DOCUMENT_FAILED,
        error
    };
}

export const DeleteDocumentRequest = id => async dispatch => {
    return await fetch(`http://localhost:5000/gifs/${id}`, {
        method: 'DELETE',
    });
}