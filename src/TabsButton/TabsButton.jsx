import react from "react";
import Stopwatch from "../Stopwatch/Stopwatch";

const TabsButton = () => {
    return(
        <div class="timer">
            <div class="tabs">
                <button class="timer__button tabs__button ">TIMER</button>
                <button class="timer__button tabs__button tabs__button--center">STOPWATCH</button>
                <button class="timer__button tabs__button tabs__button--active">CLOCK</button>
            </div>
            <Stopwatch />
        </div>
    )
}

export default TabsButton;