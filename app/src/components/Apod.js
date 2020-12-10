import React from 'react';
import {connect} from 'react-redux';

import ApodImg from './ApodImg';

import {getAPODobj} from './../actions/apodAction';

const Apod = props => {

    const {getAPODobj, apiObj} = props

    return (<div className="apod-component">
        APOD
        <ApodImg load={getAPODobj} apod={apiObj}/>
    </div>)
}

const mapStateToProps = state => {
    return {
        isFetching: state.APOD.isFetching,
        apiObj: state.APOD.apiObj,
        err: state.APOD.err
    };
  };

export default connect(mapStateToProps,{getAPODobj})(Apod);