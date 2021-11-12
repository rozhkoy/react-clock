import react from 'react';

const DateString = (props) => {
    return (
        <div>
            <p class="clock__date">{props.dateString}</p>
        </div>
    );
};

export default DateString;
