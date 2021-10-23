import react from 'react';
import ListLap from './ListLap';
import { useState } from 'react';
import StopwatchSectionItem from './StopwatchSectionItem';

const Stopwatch = () => {
    const [hourse, setHpurse] = useState(1);
    return (
        <div class="wrap-stop-watch">
            <div class="stop-watch__section-group">
                <StopwatchSectionItem desription={'Hrs'} />
                <span class="stop-watch-colon">:</span>
                <StopwatchSectionItem desription={'Min'} />
                <span class="stop-watch-colon">:</span>
                <StopwatchSectionItem desription={'Sec'} />
                <span class="stop-watch-colon">:</span>
                <StopwatchSectionItem desription={'Ms'} />
            </div>
            <div class="stop-watch-button__group">
                <button class="timer__button timer__button--one timer__button--start">Start</button>
                <button class="timer__button timer__button--two timer__button--stop">Stop</button>
                <button class="timer__button timer__button--three timer__button--stop">Lap</button>
                <button class="timer__button timer__button--four timer__button--reset">Reset</button>
            </div>
            <ListLap />
        </div>
    );
};

export default Stopwatch;
