import react, { useContext, useEffect, useRef, useState } from 'react';
import ClockSectionItem from './ClocksectionItem';
import { DateTime, Settings } from 'luxon';
import { countryListObject } from '../App';
import SaerchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';

const Clock = () => {
    const [DataDate, setDataDate] = useState();

    return (
        <div class="wrap-clock">
            <SaerchPanel />
            <MainClock />
            <DateString />
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
        </div>
    );
};
export default Clock;
