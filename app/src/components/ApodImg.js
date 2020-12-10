import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';

const ApodImg = props => {

    const {load, apod} = props;

    useEffect(() => {
        load();
    }, []);

    return (<div className="apod-img">
        APODImg
        {apod.media_type === "video" ? <ReactPlayer url={apod.url}/> : <img src={apod.url} alt={apod.name} />}
    </div>)
}

export default ApodImg;