import TimerSectionItem from './TimerSectionItem';

const TimerC = (props) => {
    return (
        <div className="wrap-timer">
            <div className="timer__section-group">
                <TimerSectionItem desription={'Hrs'} stateTimer={props.StateTimer} displayedNumber={props.TimerHours} updateNumber={props.updateHours} />
                <span className="timer-colon">:</span>
                <TimerSectionItem desription={'Min'} stateTimer={props.StateTimer} displayedNumber={props.TimerMinute} updateNumber={props.updateMinute} />
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
