import React from 'react';
import {connect} from 'react-redux';

import ApodImg from './ApodImg';
import ApodForm from './../forms/ApodForm';

import {getAPODobj} from './../actions/apodAction';

const Apod = props => {

    const {getAPODobj, apiObj, date} = props

    return (<div className="apod-component">
        <ApodImg load={getAPODobj} apod={apiObj} date={date}/>
        <ApodForm date={date}/>
    </div>)
}

const mapStateToProps = state => {
    return {
        isFetching: state.APOD.isFetching,
        apiObj: state.APOD.apiObj,
        err: state.APOD.err,
        date: state.APOD.formDate
    };
  };

export default connect(mapStateToProps,{getAPODobj})(Apod);