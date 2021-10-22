import react  from "react";
import arrow from "./arrow.svg"

const TimerSectionItem = () => {
    return(
        <div class="timer__section-item">
            <button class=" timer__button button__plus"><img src={arrow} alt=""/></button>
            <span class="numer__item">10</span>
            <span class="number__desription">Sec</span>
            <button class=" timer__button button__minus"><img src={arrow} alt=""/></button>
        </div>
    )
}
export default TimerSectionItem;