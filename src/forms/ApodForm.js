import React from 'react';
import moment from 'moment';

const ApodForm = props => {

    const {date, changeAPODdate, styles} = props;

    const onChange = e => {
        changeAPODdate(e.target.value);
    };

    return  (<div className="apod-form" style={styles.text}>
        <label>Choose your's date:
            <input type="date"
                    value={date}
                    onChange={onChange}
                    max={moment().format('YYYY-MM-DD')}
                    min={moment().subtract(5, "year").format('YYYY-MM-DD')}
                    style={styles.input}/>
        </label>          
    </div>)
}


export default ApodForm;
