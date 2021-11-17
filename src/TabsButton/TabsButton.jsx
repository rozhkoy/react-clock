import {useEffect, useRef, useState, useContext} from 'react';
import Clock from '../Clock/Clock';
import TimerC from '../Timer/Timer';
import {ContextPopupMesseges} from '../Wrap/Wrap';
import {DateTime} from "luxon";


const TabsButton = () => {
    const [selectTab, setTab] = useState(1);
    const timer = useRef(null);
    const clock = useRef(null);
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHourse, setTimerHourse] = useState(0);
    const [TimerMinut, setTimerMinut] = useState(0);
    const [TimerSecond, setTimerSecond] = useState(0);
    let timerInterval;
    const endDate = useRef(0);
    const startDate = useRef(0);
    let calculateMili = {
        hourse: 0,
        minut: 0,
        second: 0,
        mili: 0,
        currentMili: 0,
    };
    const dataDate = useRef({});
    const [dateString, setDateString] = useState(DateTime.local().setLocale('en').toFormat('DDDD'));
    const [useOtherTime, setUseOtherTime] = useState(false);
    const [mainTime, setMainTimer] = useState(DateTime.local().toFormat('TT').split(':'));


    const showMesseges = useContext(ContextPopupMesseges);

    function calcDifferenceTime(dateObject) {
        dataDate.current = {};
        dataDate.current.difference = Math.floor((new Date() - new Date(dateObject.date_time_txt)) / (1000 * 60 * 60));
        dataDate.current.fullDate = dateObject.date_time_txt;
        setUseOtherTime(true);
    }

    function setTime(time) {
        setMainTimer(time.split(':'));
    }

    function optionTab() {
        switch (selectTab) {
            case 1:
                timer.current.classList.remove('tabs__button--active');
                clock.current.classList.add('tabs__button--active');
                setTab(1);
                break;
            case 2:
                timer.current.classList.add('tabs__button--active');
                clock.current.classList.remove('tabs__button--active');
                setTab(2);
                break;
            default:
                setTab(1);
                break;
        }
    }

    function calculationDate() {
        startDate.current = new Date();
        calculateMili.mili = TimerHourse * 60 * 60 * 1000 + TimerMinut * 60 * 1000 + TimerSecond * 1000;
        endDate.current = calculateMili.mili + Date.now();
    }

    useEffect(() => {
        let timer;
        timer = setInterval(() => {
            if (useOtherTime) {
                if (dataDate.current.difference < 0) {
                    dataDate.current.dateTime = DateTime.local().plus({ hours: dataDate.current.difference * -1, minutes: 0 });

                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));

                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                } else {
                    dataDate.current.dateTime = DateTime.local().minus({ hours: dataDate.current.difference, minutes: 0 });

                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                }
            } else {
                setMainTimer(DateTime.local().toFormat('TT').split(':'));
            }
        }, 1000)
        console.log(StateTimer);
        if (StateTimer) {
            timerInterval = setInterval(() => {
                calculateMili.currentMili = new Date(endDate.current) - Date.now();
                if (Math.floor(calculateMili.currentMili * 0.001) <= 0) {
                    clearInterval(timer);
                    timerStop();
                    showMesseges('Time is up');
                }
                calculateMili.hourse = Math.floor(calculateMili.currentMili / (1000 * 60 * 60))
                calculateMili.minut = Math.floor(calculateMili.currentMili / (1000 * 60)) - calculateMili.hourse * 60;
                calculateMili.second = Math.floor(calculateMili.currentMili / 1000) - Math.floor(calculateMili.currentMili / (1000 * 60)) * 60;
                setTimerHourse(calculateMili.hourse);
                setTimerMinut(calculateMili.minut);
                setTimerSecond(calculateMili.second);
            }, 250);
        }


        optionTab();

        return () => {
            clearInterval(timerInterval);
            if (timer) clearInterval(timer);
        };
    }, [StateTimer, TimerHourse, TimerMinut, TimerSecond, selectTab]);

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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerHourse === 24) {
                        setTimerHourse(0);
                    } else {
                        setTimerHourse((TimerHourse) => TimerHourse + 1);
                    }
                } else {
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerHourse(0);
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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerMinut === 60) {
                        setTimerMinut(0);
                    } else {
                        setTimerMinut((TimerMinut) => TimerMinut + 1);
                    }
                } else {
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerMinut(0);
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
                    showMesseges('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerSecond(0);
                break;
        }
    };

    function timerStart() {
        if (TimerHourse === 0 && TimerMinut === 0 && TimerSecond === 0) {
            showMesseges(() => 'Please, select time');
        } else {
            calculationDate();
            if (!StateTimer) {
                setStateTimer(true);
            } else {
                showMesseges(() => 'Ohh, Timer started');
            }
        }
    }

    function timerStop() {
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
        <div className="timer">
            <div className="tabs">
                <button ref={clock} className="timer__button tabs__button " onClick={() => setTab(1)}>
                    CLOCK
                </button>
                <button ref={timer} className="timer__button tabs__button " onClick={() => setTab(2)}>
                    TIMER
                </button>
            </div>
            {selectTab === 1 &&
            <Clock calcDifferenceTime={calcDifferenceTime}  mainTime={mainTime} dataString={dateString}/>}
            {selectTab === 2 &&
            <TimerC StateTimer={StateTimer} TimerHourse={TimerHourse} TimerMinut={TimerMinut} TimerSecond={TimerSecond}
                    timerReset={timerReset} timerStop={timerStop} timerStart={timerStart} updateHourse={updateHourse}
                    updateMinut={updateMinut} updateSecond={updateSecond}/>}
        </div>
    );
};

export default TabsButton;
