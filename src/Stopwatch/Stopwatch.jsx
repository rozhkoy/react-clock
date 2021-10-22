import react from "react";
import ListLap from "./ListLap";
import SectionItem from "./SectionItem";

const Stopwatch = () => {
    return(
        <div class="wrap-stop-watch">
            <div class="stop-watch__section-group">
                <SectionItem desription={"Hrs"} />
                <span class="stop-watch-colon">:</span>
                <SectionItem desription={"Min"} />
                <span class="stop-watch-colon">:</span>
                <SectionItem desription={"Sec"} />
                <span class="stop-watch-colon">:</span>
                <SectionItem desription={"Ms"} />
                
            </div>
            <div class="stop-watch-button__group">
                <button class="timer__button timer__button--one timer__button--start">Start</button>
                <button class="timer__button timer__button--two timer__button--stop">Stop</button>
                <button class="timer__button timer__button--three timer__button--stop">Lap</button>
                <button class="timer__button timer__button--four timer__button--reset">Reset</button>
            </div>
            <ListLap />
                    
        </div>
    )
}


export default Stopwatch;