import React from 'react';
import moment from 'moment'

const ApodForm = props => {

    const {date, changeAPODdate} = props;

    const onChange = e => {
        changeAPODdate(e.target.value);
    };

    return  (<div className="apod-form">
        <form>
            <p>Choose your's date</p>
            <input type="date"
            onChange={onChange}
            value={date}
            max={moment().format("YYYY-MM-DD")}
            min={moment().subtract(5, "year").format('YYYY-MM-DD')}/>
        </form>
    </div>)
}

export default ApodForm;