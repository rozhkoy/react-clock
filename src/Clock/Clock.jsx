import react, { useEffect, useRef, useState } from "react";
import ClockSectionItem from "./ClocksectionItem";
import { DateTime, Settings } from "luxon";


const Clock = () => {
    let dateTime = DateTime.local();
    const resultListArray = useRef([])
    console.log("Current Date", dateTime.toISOTime());
    const [cc , setcc] = useState(0) 


    const [rusultList, setResultList] = useState([
        {id: 0, text: "Moscow, Russia"},
        {id: 1, text: "Tokyo, Japan"},
        {id: 2, text: "Oslo, Norway"}])
    console.log(rusultList)
    function changeResult() {
        resultListArray.current[cc].classList.add('active__list');
        // console.log(resultListArray)
        setcc((num)=>num + 1)
    }
    useEffect(()=>{
        document.addEventListener("keyup", changeResult);

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