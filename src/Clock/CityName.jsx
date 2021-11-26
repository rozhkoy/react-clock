import {BttnAdd} from "./BttnAdd";


function CityName(props) {
    function test() {
        console.log('RED');
    }

    return (
    <div className='wrap-city-name'>
            <p className="city-name">{props.cityName}</p>
            <BttnAdd onClick={props.addCityInList}/>
        </div>);
}

export default CityName;
