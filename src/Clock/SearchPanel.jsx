import { useContext, useEffect, useRef, useState } from 'react';
import { countryListObject } from '../App';
import { ContextPopupMesseges } from '../Wrap/Wrap';

const SaerchPanel = (props) => {
    const ListForHints = useContext(countryListObject);
    const showMesseges = useContext(ContextPopupMesseges);
    const resultListArray = useRef([]);
    const counterRow = useRef(-1);
    const searchDate = useRef({ enteredText: '' });
    const [enteredText, setEnteredText] = useState('');
    const hitsList = useRef(null);
    const [selectState, setSelectState] = useState(true);
    const [rusultList, setResultList] = useState([
        { id: 0, text: 'Kyiv' },
        { id: 1, text: 'Minsk' },
        { id: 2, text: 'Tokyo' },
        { id: 3, text: 'Moscow' },
    ]);
    const refInput = useRef();
    const [hintsListUpdate, setHintsListUpdate] = useState();
    const domNode = useRef();

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

        setHintsListUpdate(hintsList);
    }

    function UpdateInput(event) {
        let temporally = event.target.value;
        searchDate.current.enteredText = temporally;
        createHintsList(temporally);
        setEnteredText(temporally);
        counterRow.current = -1;
    }

    function changeInputDate(index, last) {
        if (selectState) {
            counterRow.current = index;
            if (last === true && index === -1) {
                setEnteredText(searchDate.current.enteredText);
            } else if (last === true && index === rusultList.length) {
                setEnteredText(searchDate.current.enteredText);
            } else {
                let offerResult = rusultList[index].text;
                setEnteredText(offerResult);
            }
            setSelectState(true);
        }
    }

    function hintSelection(event) {
        // enter
        if (event.keyCode === 13) {
            apiRequestDate();
            console.log('add');
        }
        //  to bottom
        if (selectState) {
            if (event.keyCode === 40) {
                resultListArray.current[rusultList.length - 1].classList.remove('active__list');
                counterRow.current++;
                if (counterRow.current >= rusultList.length) {
                    counterRow.current = -1;
                    changeInputDate(counterRow.current, true);
                }
                if (resultListArray.current[counterRow.current]) {
                    resultListArray.current[counterRow.current].classList.add('active__list');
                    changeInputDate(counterRow.current, false, rusultList[counterRow.current].latlng);
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
                if (counterRow.current === -1) {
                    changeInputDate(counterRow.current, true);
                    counterRow.current = rusultList.length;
                    resultListArray.current[0].classList.remove('active__list');
                }
                if (resultListArray.current[counterRow.current]) {
                    resultListArray.current[counterRow.current].classList.add('active__list');
                    changeInputDate(counterRow.current, false, rusultList[counterRow.current].latlng);
                    if (resultListArray.current[counterRow.current + 1]) {
                        resultListArray.current[counterRow.current + 1].classList.remove('active__list');
                    }
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
            if (ListForHints[i].capital.match(regex) && listSize <= 10) {
                newResultList.push({ id: newID, text: `${ListForHints[i].capital}` });
                newID++;
                listSize++;
            }
        }
        if (newResultList.length === 0) {
            hitsList.current.classList.remove('hintsList');
            newResultList.push({ id: newID, text: 'No search results' });
            setSelectState(false);
        } else {
            setSelectState(true);
        }
        listSize = 0;
        setResultList(newResultList);
        updateHintsList();
    }

    function focusInput() {
        hitsList.current.classList.add('hintsList');
    }

    function hideHintsresult(event) {
        if (!domNode.current.contains(event.target)) {
            hitsList.current.classList.remove('hintsList');
            refInput.current.blur();
        }
    }

    function apiRequestDate() {
        hitsList.current.classList.remove('hintsList');
        refInput.current.blur();
        fetch(`https://api.ipgeolocation.io/timezone?apiKey=1951161faacc41268be75b771f166a97&location=${enteredText}`)
            .then((response) => response.json())
            .then((commints) => {
                console.log(commints);
                if ('ip' in commints.geo) {
                    showMesseges('Oops, no such city found');
                } else {
                    props.FunCalcDifferenceTime(commints,enteredText);
                    setEnteredText('')
                }
            });
    }

    useEffect(
        (event) => {
            document.addEventListener('mousedown', hideHintsresult);
            updateHintsList();
            return () => {
                document.removeEventListener('mousedown', hideHintsresult);
            };
        },
        [enteredText]
    );
    return (
        <div className="search" ref={domNode}>
            <input type="text" ref={refInput} onFocus={focusInput} className="search__input" placeholder="Search by city name" onKeyDown={hintSelection} value={enteredText} onChange={UpdateInput} />
            <button className="search__bttn" onClick={apiRequestDate}>
                Search
            </button>
            <ul className="search__result" ref={hitsList}>
                {hintsListUpdate}
            </ul>
        </div>
    );
};

export default SaerchPanel;
