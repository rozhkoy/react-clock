import SearchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';
import TimeZoneSaved from "./TimeZoneSaved";
import CityName from "./CityName";




const Clock = (props) => {

    return (
        <div className="wrap-clock">
            <SearchPanel FunCalcDifferenceTime={props.calcDifferenceTime}/>
            <CityName cityName={props.cityName} addCity={props.addCity}/>
            <MainClock time={props.mainTime}/>
            <DateString dateString={props.dateString}/>
            <TimeZoneSaved saveCityList={props.saveCityList} />
        </div>
    );
};
export default Clock;
