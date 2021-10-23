import react, { useEffect, useState } from 'react';
import arrow from './arrow.svg';

const TimerSectionItem = (props) => {
    const [indicator, SetIndicator] = useState(0);

    useEffect(() => {
        SetIndicator(props.displayedNumber);
    }, [props.displayedNumber]);

    function minus() {
        props.updateNumber('minus');
    }

    function plus() {
        props.updateNumber('plus');
    }
    return (
        <div class="timer__section-item">
            <button class=" timer__button button__plus" onClick={plus}>
                <img src={arrow} alt="" />
            </button>
            <span class="numer__item">{indicator < 10 ? '0' + indicator : indicator}</span>
            <span class="number__desription">{props.desription}</span>
            <button class=" timer__button button__minus" onClick={minus}>
                <img src={arrow} alt="" />
            </button>
        </div>
    );
};
export default TimerSectionItem;
