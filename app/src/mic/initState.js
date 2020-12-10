import moment from 'moment';

const textBackground_color = "#E9C46A";
const inputBackground_color = "#3B5864";

export const APODinitState = {
    apiObj: {},
    isFetching: false,
    err: "",
    formDate: moment().format('YYYY-MM-DD'),
    styles: {
        apodImg: {
            paper: {
                backgroundColor: textBackground_color
            },
            explanation: {
                backgroundColor: textBackground_color
            },
            date: {
                color: textBackground_color
            },
            title: {
                color: "black"
            }
        },
        apodForm: {
            text: {
                color: textBackground_color
            },
            input: {
                backgroundColor: inputBackground_color,
                color: textBackground_color
            }
        }
    }
}