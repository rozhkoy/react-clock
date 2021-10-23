import react, { useEffect } from 'react';
import { useState } from 'react';
import TimerSectionItem from './TimerSectionItem';

const Timer = () => {
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHourse, setTimerHourse] = useState(0);
    const [TimerMinut, setTimerMinut] = useState(0);
    const [TimerSecond, setTimerSecond] = useState(0);
    let timer;
    // useEffect(() => {
    //     timer = setInterval(() => {
    //         setTimerHourse((TimerHourse) => TimerHourse + 1);
    //         console.log(TimerHourse);
    //     }, 500);
    //     return () => {
    //         clearInterval(timer);
    //     };
    // });
    const updateHourse = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerHourse <= 0) {
                        setTimerHourse(60);
                    } else {
                        setTimerHourse((TimerHourse) => TimerHourse - 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerHourse == 60) {
                        setTimerHourse(0);
                    } else {
                        setTimerHourse((TimerHourse) => TimerHourse + 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
        }
        console.log(TimerHourse, TimerMinut, TimerSecond);
    };

    const updateMinut = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerMinut <= 0) {
                        setTimerMinut(60);
                    } else {
                        setTimerMinut((TimerMinut) => TimerMinut - 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerMinut == 60) {
                        setTimerMinut(0);
                    } else {
                        setTimerMinut((TimerMinut) => TimerMinut + 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
        }
        console.log(TimerHourse, TimerMinut, TimerSecond);
    };

    const updateSecond = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerSecond <= 0) {
                        setTimerSecond(60);
                    } else {
                        setTimerSecond((TimerSecond) => TimerSecond - 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (setTimerSecond == 60) {
                        setTimerSecond(0);
                    } else {
                        setTimerSecond((TimerSecond) => TimerSecond + 1);
                    }
                } else {
                    console.log('timer now worked');
                }
                break;
        }
        console.log(TimerHourse, TimerMinut, TimerSecond);
    };

    return (
        <div class="wrap-timer">
            <div class="timer__section-group">
                <TimerSectionItem desription={'Hrs'} maxSize={24} stateTimer={StateTimer} displayedNumber={TimerHourse} updateNumber={updateHourse} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} maxSize={60} stateTimer={StateTimer} displayedNumber={TimerMinut} updateNumber={updateMinut} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Sec'} maxSize={60} stateTimer={StateTimer} displayedNumber={TimerSecond} updateNumber={updateSecond} />
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
