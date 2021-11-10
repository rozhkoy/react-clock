import react, { useContext, useEffect, useRef, useState } from 'react';
import ClockSectionItem from './ClocksectionItem';
import { DateTime, Settings } from 'luxon';
import { countryListObject } from '../App';

const Clock = () => {
    const ListForHints = useContext(countryListObject);
    const resultListArray = useRef([]);
    const counterRow = useRef(-1);
    const searchDate = useRef({ enteredText: 'jakoma' });
    const [showHints, setShowHints] = useState(false);
    const [enteredText, setEnteredText] = useState('');
    const searchInput = useRef('null');
    const hitsList = useRef(null);
    const [rusultList, setResultList] = useState([
        { id: 0, text: 'Moscow, Russia' },
        { id: 1, text: 'Tokyo, Japan' },
        { id: 2, text: 'Oslo, Norway' },
        { id: 3, text: 'Tokyo, Japan' },
    ]);
    const [hintsListUpdate, setHintsListUpdate] = useState();

    function updateHintsList() {
        resultListArray.current.length = 0;

        const hintsList = rusultList.map((Item, index) => (
            <li
                ref={(elRef) => {
                    resultListArray.current[index] = elRef;
                }}
                onClick={() => changeInputDate(Item.id, false)}
                key={Item.id}
            >
                {Item.text}
            </li>
        ));
        console.log(resultListArray);
        setHintsListUpdate(hintsList);
        console.log('====================================================');
    }

    function UpdateInput(event) {
        let temporally = event.target.value;
        searchDate.current.enteredText = temporally;
        createHintsList(temporally);
        setEnteredText(temporally);
    }

    function changeInputDate(index, last) {
        counterRow.current = index;
        if (last == true && index == -1) {
            setEnteredText(searchDate.current.enteredText);
        } else if (last == true && index == rusultList.length) {
            setEnteredText(searchDate.current.enteredText);
        } else {
            let offerResult = rusultList[index].text;
            setEnteredText(offerResult);
        }
    }

    function changeResult(event) {
        //  to bottom
        if (event.keyCode === 40) {
            resultListArray.current[rusultList.length - 1].classList.remove('active__list');
            counterRow.current++;
            if (counterRow.current >= rusultList.length) {
                counterRow.current = -1;
                changeInputDate(counterRow.current, true);
            }
            if (resultListArray.current[counterRow.current]) {
                resultListArray.current[counterRow.current].classList.add('active__list');
                changeInputDate(counterRow.current);
                if (resultListArray.current[counterRow.current].previousSibling) {
                    resultListArray.current[counterRow.current].previousSibling.classList.remove('active__list');
                }
            }
        }
        // to top
        if (event.keyCode === 38) {
            counterRow.current--;
            if (counterRow.current < -1) {
                counterRow.current = rusultList.length - 1;
                resultListArray.current[0].classList.remove('active__list');
            }
            if (counterRow.current == -1) {
                changeInputDate(counterRow.current, true);
                counterRow.current = rusultList.length;
                resultListArray.current[0].classList.remove('active__list');
            }
            if (resultListArray.current[counterRow.current]) {
                resultListArray.current[counterRow.current].classList.add('active__list');
                changeInputDate(counterRow.current);
                if (resultListArray.current[counterRow.current + 1]) {
                    resultListArray.current[counterRow.current + 1].classList.remove('active__list');
                }
            }
        }
    }

    function createHintsList(text) {
        let regex = new RegExp(`^${text}`, 'i', 'm');
        let newID = 0;
        let newResultList = [];
        let listSize = 0;

        for (let i = 0; i < ListForHints.length; i++) {
            if (ListForHints[i].capital.match(regex)) {
                console.log(ListForHints[i].capital.match(regex));
                newID++;
                newResultList.push({ id: newID, text: ListForHints[i].capital });
                listSize++;
            }
        }
        if (newResultList.length === 0) {
            newResultList.push({ id: newID, text: 'No search results' });
        }
        listSize = 0;
        setResultList(newResultList);
        updateHintsList();
    }

    function focusInpit() {
        hitsList.current.classList.add('hintsList');
    }
    useEffect(() => {
        updateHintsList();
        console.log(resultListArray.current);
    }, [enteredText]);

    return (
        <div class="wrap-clock">
            <div className="search" onFocus={focusInpit}>
                <input type="text" class="search__input" placeholder="Search by country or capital" onKeyDown={changeResult} value={enteredText} onChange={UpdateInput} />
                <button class="search__bttn">Search</button>
                <ul className="search__result" ref={hitsList}>
                    {hintsListUpdate}
                </ul>
            </div>
            <div class="clock__section-group">
                <ClockSectionItem description={'Hrs'} />
                <span class="clock-colon">:</span>
                <ClockSectionItem description={'Min'} />
                <span class="clock-colon">:</span>
                <ClockSectionItem description={'Sec'} />
            </div>
            <p class="clock__date">Sunday, November 07</p>
            <div class="preview-time">
                <div class="preview-time__item">
                    <div class="preview-time__capital">London</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">los-hujantos</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">Kyiv</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">London</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">Moscow</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">Paris</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">Paris</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <div class="preview-time__item">
                    <div class="preview-time__capital">Tokyo</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </div>
                <button onclick="alert('time')" class="preview-time__item">
                    <div class="preview-time__capital">Kigalikili</div>
                    <div class="preview-time__sub-timer">14:34</div>
                </button>
            </div>
            <button onClick={updateHintsList}>erererere</button>
        </div>
    );
};
export default Clock;
