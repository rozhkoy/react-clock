
import SearchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';
import TimeZoneSaved from "./TimeZoneSaved";




const Clock = (props) => {

    return (
        <div className="wrap-clock">
            <SearchPanel FunCalcDifferenceTime={props.calcDifferenceTime} />
            <MainClock time={props.mainTime} />
            <DateString dateString={props.dateString} />
            <TimeZoneSaved />
        </div>
    );
};
export default Clock;
