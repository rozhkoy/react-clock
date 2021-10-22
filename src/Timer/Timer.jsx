import react from "react";
import TimerSectionItem from "./TimerSectionItem";

const Timer = () => {
    
    return(
        <div class="wrap-timer">
                <div class="timer__section-group">
                    <TimerSectionItem desription={'Hrs'} maxSize={24}/>
                    <span class="timer-colon">:</span>
                    <TimerSectionItem desription={'Min'} maxSize={60} />
                    <span class="timer-colon">:</span>
                    <TimerSectionItem desription={'Sec'} maxSize={60} />
                </div>
                <div class="timer-button__group">
                    <button class="timer__button timer__button--start">Start</button>
                    <button class="timer__button timer__button--stop">Stop</button>
                    <button class="timer__button timer__button--reset">Reset</button>
                </div>
            </div>
    )
}
export default Timer;