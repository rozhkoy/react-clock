import {BttnAdd} from "./BttnAdd";
import ComebackHouse from "./ComebackHouse"


function CityName(props) {
    function test() {
        console.log('RED');
    }

    return (
    <div className='wrap-city-name'>
        <p className="city-name">{props.cityName}</p>
        <div className="bttn-group">
            <ComebackHouse comebackHouse={props.comebackHouse}/>
            <BttnAdd onClick={props.addCityInList}/>
        </div>
    </div>);
}

export default CityName;
