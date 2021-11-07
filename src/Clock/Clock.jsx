import react, { useEffect, useRef, useState } from "react";
import ClockSectionItem from "./ClocksectionItem";
import { DateTime, Settings } from "luxon";


const Clock = () => {
    let dateTime = DateTime.local();
    const resultListArray = useRef([])
    // console.log("Current Date", dateTime.toISOTime());
    // const [counterRow , setCounterRow] = useState(0) 
    const counterRow = useRef(0)


    const [rusultList, setResultList] = useState([
        {id: 0, text: "Moscow, Russia"},
        {id: 1, text: "Tokyo, Japan"},
        {id: 2, text: "Oslo, Norway"},
        {id: 1, text: "Tokyo, Japan"}])
    console.log(rusultList)
    function changeResult(event) {


        //  to bottom
        if(event.keyCode === 40){
            resultListArray.current[rusultList.length - 1].classList.remove('active__list')

            counterRow.current++;
            if(resultListArray.current[counterRow.current - 1]){
                resultListArray.current[counterRow.current - 1].classList.add('active__list');
                if(resultListArray.current[counterRow.current - 1].previousSibling){
                    resultListArray.current[counterRow.current - 1].previousSibling.classList.remove('active__list');
                }
            }
            if(counterRow.current == rusultList.length){
                counterRow.current = 0;
            }
            console.log(" - ",counterRow.current)
        }
                    
        
        if(event.keyCode === 38){
            counterRow.current--;
            if(counterRow.current <= 0){
                counterRow.current = rusultList.length; 
                resultListArray.current[0].classList.remove('active__list');
            }
            resultListArray.current[counterRow.current - 1].classList.add('active__list');
            if(resultListArray.current[counterRow.current - 1].nextSibling){
                resultListArray.current[counterRow.current - 1].nextSibling.classList.remove('active__list');
            }
            
        
            
            console.log(" + ",counterRow.current)
            
            
            
        }
    }
    useEffect(()=>{
        document.addEventListener("keyup", changeResult);
        console.log(counterRow, (rusultList.length - 1))
        return () =>{
            document.removeEventListener("keyup", changeResult);
        }
    }) 


    return(
        <div class="wrap-clock">
                <div className="search">
                    <input type="text" class="search__input" placeholder="Search by country or capital" onKeyPress={changeResult}/>
                    <button class="search__bttn">Search</button>
                    <ul className="search__result" >
                        {rusultList.map((Item)=> <li ref={elRef => resultListArray.current.push(elRef)} key={Item.id}>{Item.text}</li> )}
                    </ul>

                </div>
                <div class="clock__section-group">
                <ClockSectionItem  description={"Hrs"}/>
                <span class="clock-colon">:</span>
                <ClockSectionItem  description={"Min"}/>
                <span class="clock-colon">:</span>
                <ClockSectionItem  description={"Sec"}/>
                </div>
                <p class="clock__date">Sunday, November 07</p>
                <div class="preview-time">
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            London
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            los-hujantos
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            Kyiv
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            London
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            Moscow
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            Paris
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            Paris
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <div class="preview-time__item">
                        <div class="preview-time__capital">
                            Tokyo
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </div>
                    <button onclick="alert('time')" class="preview-time__item">
                        <div class="preview-time__capital">
                            Kigalikili
                        </div>
                        <div class="preview-time__sub-timer">
                            14:34
                        </div>
                    </button>

                </div>
            
        </div>
    )
}
export default Clock;