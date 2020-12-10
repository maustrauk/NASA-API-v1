import {combineReducers} from 'redux';

import apodReducer from './apodReducer';


const rootReducer = combineReducers({
    APOD: apodReducer
});

export default rootReducer;