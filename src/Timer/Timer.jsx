import react, { useEffect } from 'react';
import { useState } from 'react';
import TimerSectionItem from './TimerSectionItem';

const Timer = () => {
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHourse, setTimerHourse] = useState(0);
    const [TimerMinut, setTimerMinut] = useState(0);
    const [TimerSecond, setTimerSecont] = useState(0);
    let timer;
    useEffect(() => {
        timer = setInterval(() => {
            setTimerHourse((TimerHourse) => TimerHourse + 1);
            console.log(TimerHourse);
        }, 500);
        return () => {
            clearInterval(timer);
        };
    });

    return (
        <div class="wrap-timer">
            <div class="timer__section-group">
                <TimerSectionItem desription={'Hrs'} maxSize={24} stateTimer={StateTimer} displayedNumber={TimerHourse} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} maxSize={60} stateTimer={StateTimer} displayedNumber={TimerMinut} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Sec'} maxSize={60} stateTimer={StateTimer} displayedNumber={TimerSecond} />
            </div>
            <div class="timer-button__group">
                <button class="timer__button timer__button--start">Start</button>
                <button class="timer__button timer__button--stop">Stop</button>
                <button class="timer__button timer__button--reset">Reset</button>
            </div>
        </div>
    );
};
export default Timer;
