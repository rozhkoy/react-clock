import react, { useContext, useEffect, useRef, useState } from 'react';
import ClockSectionItem from './ClocksectionItem';
import { DateTime, Settings } from 'luxon';
import { countryListObject } from '../App';
import SaerchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';

const Clock = () => {
    const dataDate = useRef({
        date: DateTime.local().setLocale('en').toFormat('DDDD'),
    });
    const [useOtherTime, setUseOtherTime] = useState(false);
    const [mainTime, setMainTimer] = useState([1, 1, 1]);

    function calcDifferenceTime(dateObject) {
        // setDataDate(dateObject);
        console.log('clock', dateObject);
        dataDate.current = {};
        dataDate.current.difference = Math.floor((new Date() - new Date(dateObject.date_time_txt)) / (1000 * 60 * 60));
        dataDate.current.fullDate = dateObject.date_time_txt;

        setUseOtherTime(true);
    }

    function setTime(time) {
        setMainTimer(time.split(':'));

        console.log(time.split(':'));
    }

    useEffect(() => {
        let timer;
        if (useOtherTime) {
            timer = setInterval(() => {
                if (dataDate.current.difference < 0) {
                    dataDate.current.dateTime = DateTime.local().plus({ hours: dataDate.current.difference * -1, minutes: 0 });
                    console.log('minus', dataDate.current.dateTime.toRFC2822());
                    dataDate.current.date = dataDate.current.dateTime.setLocale('en').toFormat('DDDD');
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                } else {
                    dataDate.current.dateTime = DateTime.local().minus({ hours: dataDate.current.difference, minutes: 0 });
                    console.log('plus', dataDate.current.dateTime.toRFC2822());
                    dataDate.current.date = dataDate.current.dateTime.setLocale('en').toFormat('DDDD');
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                }
                console.log(dataDate.current.date);
            }, 1000);
        } else {
        }
        return () => {
            if (timer) clearInterval(timer);
        };
    }, [dataDate.current.date]);

    return (
        <div class="wrap-clock">
            <SaerchPanel FunCalcDifferenceTime={calcDifferenceTime} />
            <MainClock time={mainTime} />
            <DateString dateString={dataDate.current.date} />
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
// function calculationTime(obj) {
// //     console.log(obj);
// //     let string = obj.date_time_txt;
// //     console.log(new Date(), string, new Date(string), Math.floor((new Date() - new Date(obj.date_time_txt)) / (1000 * 60 * 60)));
// // }
