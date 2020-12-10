import React from 'react';
import {connect} from 'react-redux';

import ApodImg from './ApodImg';
import ApodForm from './../forms/ApodForm';

import {getAPODobj, changeAPODdate} from './../actions/apodAction';

const Apod = props => {

    const {getAPODobj, changeAPODdate, apiObj, date, styles} = props

    return (<div className="apod-component">
        <ApodForm changeAPODdate={changeAPODdate} date={date} styles={styles.apodForm}/>
        <ApodImg load={getAPODobj} apod={apiObj} date={date} styles={styles.apodImg}/>
    </div>)
}

const mapStateToProps = state => {
    return {
        isFetching: state.APOD.isFetching,
        apiObj: state.APOD.apiObj,
        err: state.APOD.err,
        date: state.APOD.formDate,
        styles: state.APOD.styles
    };
  };

export default connect(mapStateToProps,{getAPODobj, changeAPODdate})(Apod);