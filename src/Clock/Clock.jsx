import SearchPanel from './SearchPanel';
import MainClock from './MainClock';
import DateString from './DateString';
import SavedTimeZones from "./SavedTimeZones";
import CityName from "./CityName";


const Clock = (props) => {

    return (
        <div className="wrap-clock">
            <SearchPanel FunCalcDifferenceTime={props.calcDifferenceTime}/>
            <CityName cityName={props.cityName} addCityInList={props.addCityInList} comebackHouse={props.comebackHouse}/>
            <MainClock time={props.mainTime}/>
            <DateString dateString={props.dateString}/>
            <SavedTimeZones deleteSavedCity={props.deleteSavedCity} savedCity={props.savedCity} searchBySavedCity={props.searchBySavedCity} />

        </div>
    );
};
export default Clock;
