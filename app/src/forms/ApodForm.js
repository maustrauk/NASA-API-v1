import React from 'react';
import moment from 'moment';
import {TextField} from '@material-ui/core';

const ApodForm = props => {

    const {date, changeAPODdate} = props;

    const onChange = e => {
        changeAPODdate(e.target.value);
    };

    return  (<div className="apod-form">
        <TextField id="date" 
            label="Choose your's date"
            type="date"
            defaultValue={date}
            onChange={onChange}
            InputProps={
                {inputProps: { 
                    min: moment().subtract(5, "year").format('YYYY-MM-DD'),
                    max: moment().format("YYYY-MM-DD")}
                    }}
        />
    </div>)
}

export default ApodForm;
