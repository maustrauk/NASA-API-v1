import {FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAIL, CHANGE_APOD_DATE} from './../actions/apodAction';

import {APODinitState} from './../mic/initState';



const apodReducer = (state = APODinitState, action) => {
    switch (action.type) {
        case(FETCHING_QUOTE_START):
        return ({
            ...state,
            isFetching: true
        });

        case(FETCHING_QUOTE_FAIL):
        return ({
            ...state,
            isFetching: false,
            err: action.payload
        });

        case(FETCHING_QUOTE_SUCCESS):
        return ({
            ...state,
            isFetching: false,
            apiObj: action.payload
        });

        case(CHANGE_APOD_DATE):
        return ({
            ...state,
            formDate: action.payload
        });
        
        default:
            return state;
    }
}

export default apodReducer;