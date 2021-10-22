import react from "react";
import TimerSectionItem from "./TimerSectionItem";

const Timer = () => {
    
    return(
        <div class="wrap-timer">
                <div class="timer__section-group">
                    <TimerSectionItem />
                    <span class="timer-colon">:</span>
                    <TimerSectionItem />
                    <span class="timer-colon">:</span>
                    <TimerSectionItem />
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