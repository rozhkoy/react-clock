import react, { useEffect, useRef, useState } from "react";
import Clock from "../Clock/Clock";
import Stopwatch from "../Stopwatch/Stopwatch";
import Timer from "../Timer/Timer";

const TabsButton = () => {
    const [selectTab, setTab] = useState(1);
    const timer = useRef(null)
    const stopwatch = useRef(null)
    const clock = useRef(null)
    function optionTab(){
        switch(selectTab){
            case 1: 
                timer.current.classList.add('tabs__button--active');
                stopwatch.current.classList.remove('tabs__button--active');
                clock.current.classList.remove('tabs__button--active');
                setTab(1);
                break;
            case 2: 
                timer.current.classList.remove('tabs__button--active');
                stopwatch.current.classList.add('tabs__button--active');
                clock.current.classList.remove('tabs__button--active');
                setTab(2);
                break;
            case 3: 
                timer.current.classList.remove('tabs__button--active');
                stopwatch.current.classList.remove('tabs__button--active');
                clock.current.classList.add('tabs__button--active');
                setTab(3);   
                break;
        }
    }
    useEffect(()=>{
        optionTab()
    },[selectTab])
    return(
        <div class="timer">
            <div class="tabs">
                <button ref={timer} class="timer__button tabs__button " onClick={() => setTab(1)}>TIMER</button>
                <button ref={stopwatch} class="timer__button tabs__button " onClick={() => setTab(2)}>STOPWATCH</button>
                <button ref={clock} class="timer__button tabs__button " onClick={() => setTab(3)}>CLOCK</button>
            </div>
            {selectTab == 1 && <Timer />}
            {selectTab == 2 && <Stopwatch/>}
            {selectTab == 3 && <Clock />}
        </div>
    )
}

export default TabsButton;