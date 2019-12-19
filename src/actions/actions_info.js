export const INFO_FETCHED = 'INFO_FETCHED';

export function fetchtInfo() {
    return (dispatch) => {
        return fetch('', {method: 'GET'})
        .then(response => response.json())
        .then(json => {dispatch(loadInfo(json))})
        .catch(error => console.log(error));
    }
}

export function loadInfo(results) {
    return {
        type: INFO_FETCHED,
        payload: results
    }
}