export const INFO_FETCHED = 'INFO_FETCHED';
export const NEW_INFO = 'NEW_INFO';

export function fetchtInfo() {
    return (dispatch) => {
        return fetch(
                  'http://www.json-generator.com/api/json/get/cjqOJstqzS?indent=2',
                  {method: 'GET'}
                )
                .then(response => response.json())
                .then(json => {dispatch(loadInfo(json))})
                .catch(error => console.log(error));
    }
}

export function postInfo() {
    return (dispatch) => {
        return fetch(
                'http://www.json-generator.com/api/json/get/cjqOJstqzS?indent=2',
                {method: 'POST', body: JSON.stringify({hi: 'info'})}
               )
                .then(response => response.json())
                .then(json => {dispatch(newInfo(json))})
                .catch(error => console.log(error));
    }
}

export function loadInfo(results) {
    return {
        type: INFO_FETCHED,
        payload: results
    }
}

export function newInfo(results) {
    return {
        type: NEW_INFO,
        payload: results
    }
}