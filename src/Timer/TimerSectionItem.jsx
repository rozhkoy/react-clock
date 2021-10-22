import react, { useState }  from "react";
import arrow from "./arrow.svg"

const TimerSectionItem = (props) => {
    const [indicator, SetIndicator] = useState(0);
    

    function minus(){
        if(indicator <= 0){
            SetIndicator(props.maxSize);

        }else{
            SetIndicator((indicator) => indicator - 1);
        }
        }
    function plus(){
        if(indicator == props.maxSize){
            SetIndicator(0);

        }else{
            SetIndicator((indicator) => indicator + 1);
        }
    }
        return(

        <div class="timer__section-item">
            <button class=" timer__button button__plus" onClick={plus}><img src={arrow} alt=""/></button>
            <span class="numer__item">{indicator}</span>
            <span class="number__desription">{props.desription}</span>
            <button class=" timer__button button__minus" onClick={minus}><img src={arrow} alt=""/></button>
        </div>
    )
}
export default TimerSectionItem;