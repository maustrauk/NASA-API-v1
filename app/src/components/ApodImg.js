import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';
import Paper from '@material-ui/core/Paper';
import {Box} from '@material-ui/core';

const ApodImg = props => {

    const {load, apod, date} = props;

    useEffect(() => {
        load(date);
    }, [date]);

    return (<Box className="apod-img" >
        <h2>{apod.title}</h2>
        <p>Date: {apod.date}</p>
        <Paper elevation={3} className="apod-paper">
            {apod.media_type === "video" ? <ReactPlayer className="apod-player" url={apod.url}/> : <img src={apod.url} alt={apod.name} />}
        </Paper>
        <Paper elevation={3} className="explanation">
            {apod.explanation}
        </Paper>
    </Box>)
}

export default ApodImg;