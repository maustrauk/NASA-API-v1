import axios from 'axios';

import {API_KEY, APOD_URL} from './../mic';

export const FETCHING_QUOTE_START = 'FETCHING_QUOTE_START';
export const FETCHING_QUOTE_SUCCESS = 'FETCHING_QUOTE_SUCCESS';
export const FETCHING_QUOTE_FAIL = 'FETCHING_QUOTE_FAIL';

export const getAPODobj = (date) => {
    return (dispatch => {

        dispatch({type:FETCHING_QUOTE_START});

        axios
            .get(`${APOD_URL}api_key=${API_KEY}&date=${date}`)
            .then(res=> {
                dispatch({type:FETCHING_QUOTE_SUCCESS, payload:res.data});
            })
            .catch(err => {
                dispatch({type:FETCHING_QUOTE_FAIL, payload: err});
            });
    });
}