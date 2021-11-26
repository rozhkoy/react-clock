import {useEffect, useRef, useState, useContext} from 'react';
import Clock from '../Clock/Clock';
import TimerC from '../Timer/Timer';
import {ContextPopupMesseges} from '../Wrap/Wrap';
import {DateTime} from "luxon";


const TabsButton = () => {
    //change tab
    const [selectTab, setTab] = useState(1);
    const timer = useRef(null);
    const clock = useRef(null);


    // for timer
    const [StateTimer, setStateTimer] = useState(false);
    const [TimerHours, setTimerHours] = useState(0);
    const [TimerMinute, setTimerMinute] = useState(0);
    const [TimerSecond, setTimerSecond] = useState(0);
    let timerInterval;
    const endDate = useRef(0);
    const startDate = useRef(0);
    let calculateMili = {
        hours: 0,
        minute: 0,
        second: 0,
        mili: 0,
        currentMili: 0,
    };
    const dataDate = useRef({
        difference: 0,
    });
    const [dateString, setDateString] = useState(DateTime.local().setLocale('en').toFormat('DDDD'));
    const [cityName, setCityName] = useState('Local time')
    const [useOtherTime, setUseOtherTime] = useState(false);
    const [mainTime, setMainTimer] = useState(DateTime.local().toFormat('TT').split(':'));
    const showMessage = useContext(ContextPopupMesseges);
    const [savedCity, setSavedCity] = useState([
        // {id: 0, city: 'Local time', difference: 0, dateTime: DateTime.local().toFormat('T') }
    ]);



    function calcDifferenceTime(dateObject, name) {
        setCityName(name);
        dataDate.current = {};
        dataDate.current.difference = Math.floor((new Date() - new Date(dateObject.date_time_txt)) / (1000 * 60 * 60));
        dataDate.current.fullDate = dateObject.date_time_txt;
        setUseOtherTime(true);
    }

    function addCityInList() {
        let add = savedCity.slice();
        add.push({
            id: add.length,
            city: cityName,
            difference: dataDate.current.difference,
            dateTime: DateTime.local().toFormat('T')
        })
        console.log(add);
        setSavedCity(add);
    }

    function deleteSavedCity(idElem) {
        let arr = savedCity.slice()
        console.log("before", arr, idElem)
        arr = arr.filter(obj => obj.id !== idElem);
        console.log("after", arr, idElem, "====================")
        setSavedCity(arr)
    }

    function uppDataDateInSavedCity() {
        let newArray
        if (savedCity.length > 0) {
            for (let i = 0; i < savedCity.length; i++) {
                newArray = savedCity.slice();
                if (newArray[i].difference < 0) {
                    newArray[i].dateTime = DateTime.local().plus({
                        hours: newArray[i].difference * -1,
                        minutes: 0
                    }).toFormat('T');
                } else {
                    newArray[i].dateTime = DateTime.local().minus({
                        hours: newArray[i].difference,
                        minutes: 0
                    }).toFormat('T');
                }
            }
            setSavedCity(newArray);
        }

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
        calculateMili.mili = TimerHours * 60 * 60 * 1000 + TimerMinute * 60 * 1000 + TimerSecond * 1000;
        endDate.current = calculateMili.mili + Date.now();
    }

    useEffect(() => {
        console.log(useOtherTime);
        let timer;

        timer = setInterval(() => {
            uppDataDateInSavedCity()
            if (useOtherTime) {
                if (dataDate.current.difference < 0) {
                    dataDate.current.dateTime = DateTime.local().plus({
                        hours: dataDate.current.difference * -1,
                        minutes: 0
                    });
                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setMainTimer(dataDate.current.time.split(':'));
                } else {
                    dataDate.current.dateTime = DateTime.local().minus({
                        hours: dataDate.current.difference,
                        minutes: 0
                    });
                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setMainTimer(dataDate.current.time.split(':'));
                }
            } else {
                setMainTimer(DateTime.local().toFormat('TT').split(':'));
            }
        }, 1000)

        if (StateTimer) {
          timerInterval = setInterval(() => {
                calculateMili.currentMili = new Date(endDate.current) - Date.now();
                if (Math.floor(calculateMili.currentMili * 0.001) <= 0) {
                    clearInterval(timer);
                    timerStop();
                    showMessage('Time is up');
                }
                calculateMili.hours = Math.floor(calculateMili.currentMili / (1000 * 60 * 60))
                calculateMili.minute = Math.floor(calculateMili.currentMili / (1000 * 60)) - calculateMili.hours * 60;
                calculateMili.second = Math.floor(calculateMili.currentMili / 1000) - Math.floor(calculateMili.currentMili / (1000 * 60)) * 60;
                setTimerHours(calculateMili.hours);
                setTimerMinute(calculateMili.minute);
                setTimerSecond(calculateMili.second);
            }, 250);
        }

        optionTab();
        return () => {
            clearInterval(timerInterval);
            if (timer) clearInterval(timer);

        };
    });

    // for timer
    const updateHours = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerHours <= 0) {
                        setTimerHours(24);
                    } else {
                        setTimerHours((TimerHourse) => TimerHourse - 1)
                    }
                } else {
                    showMessage('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerHours === 24) {
                        setTimerHours(0);
                    } else {
                        setTimerHours((TimerHourse) => TimerHourse + 1);
                    }
                } else {
                    showMessage('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerHours(0);
                break;
        }
    };

    const updateMinute = function (plusMinus) {
        switch (plusMinus) {
            case 'minus':
                if (!StateTimer) {
                    if (TimerMinute <= 0) {
                        setTimerMinute(60);
                    } else {
                        setTimerMinute((TimerMinut) => TimerMinut - 1);
                    }
                } else {
                    showMessage('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            case 'plus':
                if (!StateTimer) {
                    if (TimerMinute === 60) {
                        setTimerMinute(0);
                    } else {
                        setTimerMinute((TimerMinut) => TimerMinut + 1);
                    }
                } else {
                    showMessage('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerMinute(0);
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
                    showMessage('The timer is running, if you want to change the time, leave the timer');
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
                    showMessage('The timer is running, if you want to change the time, leave the timer');
                }
                break;
            default:
                setTimerSecond(0);
                break;
        }
    };

    function timerStart() {
        if (TimerHours === 0 && TimerMinute === 0 && TimerSecond === 0) {
            showMessage(() => 'Please, select time');
        } else {
            calculationDate();
            if (!StateTimer) {
                setStateTimer(true);
            } else {
                showMessage(() => 'Ohh, Timer started');
            }
        }
    }

    function timerStop() {
        if (StateTimer) {
            setStateTimer(false);
        } else {
            showMessage('Ohh, timer stoped');
        }
    }

    function timerReset() {
        setTimerHours(0);
        setTimerMinute(0);
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
            <Clock
                   calcDifferenceTime={calcDifferenceTime}
                   addCityInList={addCityInList}
                   cityName={cityName}
                   mainTime={mainTime}
                   savedCity={savedCity}
                   deleteSavedCity={deleteSavedCity}

                   dateString={dateString}/>}
            {selectTab === 2 &&
            <TimerC StateTimer={StateTimer}
                    TimerHours={TimerHours}
                    TimerMinute={TimerMinute}
                    TimerSecond={TimerSecond}
                    timerReset={timerReset}
                    timerStop={timerStop}
                    timerStart={timerStart}
                    updateHours={updateHours}
                    updateMinute={updateMinute}
                    updateSecond={updateSecond}/>}

        </div>
    );
};

export default TabsButton;
