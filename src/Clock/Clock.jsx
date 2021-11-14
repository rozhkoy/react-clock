import react, { useContext, useEffect, useRef, useState } from 'react';
import ClockSectionItem from './ClocksectionItem';
import { DateTime, Settings } from 'luxon';
import { countryListObject } from '../App';
import SaerchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';

const Clock = () => {
    const dataDate = useRef({
        // date: DateTime.local().setLocale('en').toFormat('DDDD'),
    });
    const [dateString, setDateString] = useState(DateTime.local().setLocale('en').toFormat('DDDD'));
    const [useOtherTime, setUseOtherTime] = useState(false);
    const [mainTime, setMainTimer] = useState(DateTime.local().toFormat('TT').split(':'));

    function calcDifferenceTime(dateObject) {
        dataDate.current = {};
        dataDate.current.difference = Math.floor((new Date() - new Date(dateObject.date_time_txt)) / (1000 * 60 * 60));
        dataDate.current.fullDate = dateObject.date_time_txt;
        setUseOtherTime(true);
    }

    function setTime(time) {
        setMainTimer(time.split(':'));
    }

    useEffect(() => {
        let timer;
        timer = setInterval(() => {
            if (useOtherTime) {
                if (dataDate.current.difference < 0) {
                    dataDate.current.dateTime = DateTime.local().plus({ hours: dataDate.current.difference * -1, minutes: 0 });

                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));

                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                } else {
                    dataDate.current.dateTime = DateTime.local().minus({ hours: dataDate.current.difference, minutes: 0 });

                    setDateString(dataDate.current.dateTime.setLocale('en').toFormat('DDDD'));
                    dataDate.current.time = dataDate.current.dateTime.setLocale('en').toFormat('TT');
                    setTime(dataDate.current.time);
                }
            } else {
                setMainTimer(DateTime.local().toFormat('TT').split(':'));
            }
        }, 1000);

        return () => {
            if (timer) clearInterval(timer);
        };
    });

    return (
        <div className="wrap-clock">
            <SaerchPanel FunCalcDifferenceTime={calcDifferenceTime} />
            <MainClock time={mainTime} />
            <DateString dateString={dateString} />
        </div>
    );
};
export default Clock;
