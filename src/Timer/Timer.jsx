import react, { useContext, useEffect, useRef } from 'react';
import { useState } from 'react';
import TimerSectionItem from './TimerSectionItem';
import { Timer } from 'ez-timer';

const TimerC = (props) => {
    return (
        <div className="wrap-timer">
            <div className="timer__section-group">
                <TimerSectionItem desription={'Hrs'} stateTimer={props.StateTimer} displayedNumber={props.TimerHourse} updateNumber={props.updateHourse} />
                <span className="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} stateTimer={props.StateTimer} displayedNumber={props.TimerMinut} updateNumber={props.updateMinut} />
                <span className="timer-colon">:</span>
                <TimerSectionItem desription={'Sec'} stateTimer={props.StateTimer} displayedNumber={props.TimerSecond} updateNumber={props.updateSecond} />
            </div>
            <div className="timer-button__group">
                <button className="timer__button timer__button--start" onClick={() => props.timerStart()}>
                    Start
                </button>
                <button className="timer__button timer__button--stop" onClick={() => props.timerStop()}>
                    Stop
                </button>
                <button className="timer__button timer__button--reset" onClick={() => props.timerReset()}>
                    Reset
                </button>
            </div>
        </div>
    );
};
export default TimerC;
