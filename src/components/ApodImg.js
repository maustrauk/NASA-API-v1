import React, {useEffect} from 'react';
import ReactPlayer from 'react-player';

const ApodImg = props => {

    const {load, apod, date, styles} = props;

    useEffect(() => {
        load(date);
    }, [load, date]);



    return (<div className="apod-img" >
        <h2 className="apod-title" style={styles.title}>{apod.title}</h2>
        <p className="apod-date" style={styles.date}>Date: {apod.date}</p>
        <div className="apod-paper" style={styles.paper}>
            {apod.media_type === "video" ? <ReactPlayer className="apod-player" url={apod.url}/> : <img src={apod.url} alt={apod.name} />}
        </div>
        <div className="explanation" style={styles.explanation}>
            {apod.explanation}
        </div>
    </div>)
}


export default ApodImg;