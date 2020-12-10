import React from 'react';
import Iframe from 'react-iframe';

const path = "https://www.youtube.com/embed/xDMP3i36naA";

const BoxShooter = props => {
    return (<div className="box-shooter-component">
        <Iframe url={path} />
    </div>)
}

export default BoxShooter;