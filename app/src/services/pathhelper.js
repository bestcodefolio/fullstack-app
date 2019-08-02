const getSearchParams = (param) => {
    const queryParams = {};
    window.location.search
        .replace('?', '')
        .split('&')
        .forEach(param => {
            const chunk = param.split('=');
            queryParams[chunk[0]] = chunk[1];
        });
    return queryParams[param];
}

export const getQuery = () => {
    const param = decodeURI(getSearchParams('q'));
    if (param == null || param === '') window.history.pushState(null, null, '/');
    return param !== 'undefined' && param !== null ? param : '';
}

export const getNumber = () => {
    const param = decodeURI(getSearchParams('l'));
    const regex = new RegExp('^[0-9]+$');
    if (param === '0' || !regex.test(param)) window.history.pushState(null, null, '/');
    return param !== 'undefined' && param !== null ? param : null;
}