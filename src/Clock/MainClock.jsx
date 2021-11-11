import react from 'react';
import ClockSectionItem from './ClocksectionItem';

const MainClock = () => {
    return (
        <div class="clock__section-group">
            <ClockSectionItem description={'Hrs'} />
            <span class="clock-colon">:</span>
            <ClockSectionItem description={'Min'} />
            <span class="clock-colon">:</span>
            <ClockSectionItem description={'Sec'} />
        </div>
    );
};

export default MainClock;
