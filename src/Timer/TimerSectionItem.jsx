import react, { useEffect, useState }  from "react";
import arrow from "./arrow.svg"

const TimerSectionItem = (props) => {
    const [indicator, SetIndicator] = useState(16);
    let timer ;

    useEffect(() =>{
        timer = setInterval(() => {
        SetIndicator((indicator) => indicator - 1)
        }, 500);
        if(indicator <= 0){
            
            SetIndicator(60)
        }
        return () => {
            clearInterval(timer);
        }
    })

    function minus(){
        if(!props.stateTimer){
            if(indicator <= 0){
                SetIndicator(props.maxSize);

            }else{
                SetIndicator((indicator) => indicator - 1);
            }
        }else{
            console.log("timer now worked")
        }
    }
    function plus(){
        if(!props.stateTimer){
            if(indicator == props.maxSize){
                SetIndicator(0);

            }else{
                SetIndicator((indicator) => indicator + 1);
            }
        }else{
            console.log("timer now worked")
        }    
    }
    return(

    <div class="timer__section-item">
        <button class=" timer__button button__plus" onClick={plus}><img src={arrow} alt=""/></button>
        <span class="numer__item">{indicator < 10 ? "0" + indicator: indicator}</span>
        <span class="number__desription">{props.desription}</span>
        <button class=" timer__button button__minus" onClick={minus}><img src={arrow} alt=""/></button>
    </div>
    )
}
export default TimerSectionItem;