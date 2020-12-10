import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';

const ApodImg = props => {

    const {load, apod, date} = props;

    useEffect(() => {
        load(date);
    }, []);

    return (<div className="apod-img">
        <h2>{apod.title}</h2>
        <p>Date: {apod.date}</p>
        {apod.media_type === "video" ? <ReactPlayer url={apod.url}/> : <img src={apod.url} alt={apod.name} />}
        <div className="explanation">
            {apod.explanation}
        </div>
    </div>)
}

export default ApodImg;