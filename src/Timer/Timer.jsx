import react, { useEffect, useRef } from 'react';
import { useState } from 'react';
import TimerSectionItem from './TimerSectionItem';
import { Timer } from 'ez-timer';

const TimerC = () => {
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHourse, setTimerHourse] = useState(0);
    const [TimerMinut, setTimerMinut] = useState(0);
    const [TimerSecond, setTimerSecond] = useState(0);
    let timer;
    const endDate = useRef(0) ;
    const startDate = useRef(0);
    let assignmentMili;
    let calculateMili = {
        hourse: 0,
        minut: 0,
        second: 0,
        mili: 0,
        calcmili: 0,
        currentMili: 0
    }
    function calculationDate(){
        startDate.current = new Date();  
        console.log(startDate.current , "add")
        calculateMili.mili = (TimerHourse * 60 * 60 * 1000) + (TimerMinut * 60 * 1000) + (TimerSecond * 1000);
        console.log(calculateMili.mili , "hourse to mili")
        endDate.current = calculateMili.mili + Date.now();
        console.log(endDate.current , "end date");
    }
    

    useEffect(() => {
    
        if(StateTimer){
            timer = setInterval(() => {
                console.time("f")
                calculateMili.currentMili =  ( new Date(endDate.current) - Date.now());
                // calculateMili.calcmili = new Date(endDate) - startDate;
                console.log(calculateMili.currentMili)
                calculateMili.hourse = Math.floor(calculateMili.currentMili / (1000 * 60 * 60));
                calculateMili.minut = Math.floor(calculateMili.currentMili / (1000 * 60)) - calculateMili.hourse * 60;
                calculateMili.second =  Math.floor(calculateMili.currentMili / 1000) - Math.floor(calculateMili.currentMili / (1000 * 60)) * 60
                console.log(calculateMili.hourse,calculateMili.mili,calculateMili.second, "H:M:S")
                console.timeEnd("f")
                setTimerHourse(calculateMili.hourse)
                setTimerMinut(calculateMili.minut)
                setTimerSecond(calculateMili.second)
            }, 200);
        }

        return () =>{
            clearInterval(timer);
        }
        
    }, [StateTimer, TimerHourse]);

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
    };
    

    function timerStart() {
        calculationDate()
        console.log(StateTimer, "start");
        if (!StateTimer) {
            setStateTimer(true);
        } else {
            console.log('timer now worked');
        }
    }

    function timerStop() {
        console.log(StateTimer, "stop");
        if (StateTimer) {
            setStateTimer(false);
        } else {
            console.log('timer not started');
        }
    }

    return (
        <div class="wrap-timer">
            <div class="timer__section-group">
                <TimerSectionItem desription={'Hrs'} stateTimer={StateTimer} displayedNumber={TimerHourse} updateNumber={updateHourse} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} stateTimer={StateTimer} displayedNumber={TimerMinut} updateNumber={updateMinut} />
                <span class="timer-colon">:</span>
                <TimerSectionItem desription={'Sec'} stateTimer={StateTimer} displayedNumber={TimerSecond} updateNumber={updateSecond} />
            </div>
            <div class="timer-button__group">
                <button class="timer__button timer__button--start" onClick={timerStart}>
                    Start
                </button>
                <button class="timer__button timer__button--stop" onClick={timerStop}>
                    Stop
                </button>
                <button class="timer__button timer__button--reset">Reset</button>
            </div>
        </div>
    );
};
export default TimerC;
