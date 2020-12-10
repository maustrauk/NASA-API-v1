import {FETCHING_QUOTE_START, FETCHING_QUOTE_SUCCESS, FETCHING_QUOTE_FAIL} from './../actions/apodAction';

export const initState = {
    apiObj: {},
    isFetching: false,
    err: ""
}

const apodReducer = (state = initState, action) => {
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
        default:
            return state;
    }
}

export default apodReducer;