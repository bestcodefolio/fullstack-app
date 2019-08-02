export const UPLOAD_DOCUMENT_SUCCESS = 'UPLOAD_DOCUMENT_SUCCESS';
export const UPLOAD_DOCUMENT_FAILED = 'UPLOAD_DOCUMENT_FAILED';

export const uploadSuccess = ({ data }) => {
    return {
        type: UPLOAD_DOCUMENT_SUCCESS,
        data
    };
}

export const uploadFail = error => {
    return { 
        type: UPLOAD_DOCUMENT_FAILED,
        error
    };
}

export const uploadDocumentRequest = file => async dispatch => {
    return await fetch('http://localhost:5000/gifs', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(file)
    })
};