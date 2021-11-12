import react from 'react';
import ClockSectionItem from './ClocksectionItem';

const MainClock = (props) => {
    return (
        <div class="clock__section-group">
            <ClockSectionItem number={props.time[0]} description={'Hrs'} />
            <span class="clock-colon">:</span>
            <ClockSectionItem number={props.time[1]} description={'Min'} />
            <span class="clock-colon">:</span>
            <ClockSectionItem number={props.time[2]} description={'Sec'} />
        </div>
    );
};

export default MainClock;
