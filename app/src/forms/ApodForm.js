import React from 'react';

const ApodForm = props => {

    const {date} = props;

    const onChange = e => {

    };

    return  (<div className="apod-form">
        <form>
            <p>Choose your's date</p>
            <input type="date"
            onChange={onChange}
            value={date}/>
        </form>
    </div>)
}

export default ApodForm;