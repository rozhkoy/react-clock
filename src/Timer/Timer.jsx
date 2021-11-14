import react, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import TimerSectionItem from './TimerSectionItem';
import { Timer } from 'ez-timer';
import { ContextPopupMesseges } from '../Wrap/Wrap';

const TimerC = () => {
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHourse, setTimerHourse] = useState(0);
    const [TimerMinut, setTimerMinut] = useState(0);
    const [TimerSecond, setTimerSecond] = useState(0);
    let timer;
    const endDate = useRef(0);
    const startDate = useRef(0);
    let assignmentMili;
    let calculateMili = {
        hourse: 0,
        minut: 0,
        second: 0,
        mili: 0,
        currentMili: 0,
    };

    const showMesseges = useContext(ContextPopupMesseges);

    function calculationDate() {
        startDate.current = new Date();
        console.log(startDate.current, 'add');
        calculateMili.mili = TimerHourse * 60 * 60 * 1000 + TimerMinut * 60 * 1000 + TimerSecond * 1000;
        console.log(calculateMili.mili, 'hourse to mili');
        endDate.current = calculateMili.mili + Date.now();
        console.log(endDate.current, 'end date');
    }

    useEffect(() => {
        console.log('state update');
        if (StateTimer) {
            timer = setInterval(() => {
                calculateMili.currentMili = new Date(endDate.current) - Date.now();
                console.log(calculateMili.currentMili);
                if (Math.floor(calculateMili.currentMili * 0.001) <= 0) {
                    clearInterval(timer);
                    timerStop();
                    console.log('end');
                    showMesseges('end');
                }
                calculateMili.hourse = Math.floor(calculateMili.currentMili / (1000 * 60 * 60));
                calculateMili.minut = Math.floor(calculateMili.currentMili / (1000 * 60)) - calculateMili.hourse * 60;
                calculateMili.second = Math.floor(calculateMili.currentMili / 1000) - Math.floor(calculateMili.currentMili / (1000 * 60)) * 60;
                console.log(calculateMili.hourse, calculateMili.minut, calculateMili.second, 'H:M:S');
                setTimerHourse(calculateMili.hourse);
                setTimerMinut(calculateMili.minut);
                setTimerSecond(calculateMili.second);
            }, 200);
        }

        return () => {
            clearInterval(timer);
        };
    }, [StateTimer, TimerHourse, TimerMinut, TimerSecond]);

    const updateHourse = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerHourse <= 0) {
                        setTimerHourse(24);
                    } else {
                        setTimerHourse((TimerHourse) => TimerHourse - 1);
                    }
                } else {
                    console.log('timer now worked');
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerHourse == 24) {
                        setTimerHourse(0);
                    } else {
                        setTimerHourse((TimerHourse) => TimerHourse + 1);
                    }
                } else {
                    console.log('timer now worked');
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
        }
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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
        }
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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerSecond >= 60) {
                        setTimerSecond(0);
                    } else {
                        setTimerSecond((TimerSecond) => TimerSecond + 1);
                    }
                } else {
                    console.log('timer now worked');
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
        }
    };

    function timerStart() {
        if (TimerHourse == 0 && TimerMinut == 0 && TimerSecond == 0) {
            showMesseges(() => 'Please, select time');
        } else {
            calculationDate();
            console.log(StateTimer, 'start');
            if (!StateTimer) {
                setStateTimer(true);
            } else {
                showMesseges(() => 'Ohh, Timer started');
            }
        }
    }

    function timerStop() {
        console.log(StateTimer, 'stop');
        if (StateTimer) {
            setStateTimer(false);
        } else {
            showMesseges('Ohh, timer stoped');
        }
    }

    function timerReset() {
        setTimerHourse(0);
        setTimerMinut(0);
        setTimerSecond(0);
        setStateTimer(false);
    }

    return (
        <div className="wrap-timer">
            <div className="timer__section-group">
                <TimerSectionItem desription={'Hrs'} stateTimer={StateTimer} displayedNumber={TimerHourse} updateNumber={updateHourse} />
                <span className="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} stateTimer={StateTimer} displayedNumber={TimerMinut} updateNumber={updateMinut} />
                <span className="timer-colon">:</span>
                <TimerSectionItem desription={'Sec'} stateTimer={StateTimer} displayedNumber={TimerSecond} updateNumber={updateSecond} />
            </div>
            <div className="timer-button__group">
                <button className="timer__button timer__button--start" onClick={timerStart}>
                    Start
                </button>
                <button className="timer__button timer__button--stop" onClick={timerStop}>
                    Stop
                </button>
                <button className="timer__button timer__button--reset" onClick={timerReset}>
                    Reset
                </button>
            </div>
        </div>
    );
};
export default TimerC;
