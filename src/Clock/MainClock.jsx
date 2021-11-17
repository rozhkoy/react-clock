import ClockSectionItem from './ClocksectionItem';
import {BttnAdd} from "./BttnAdd";




const MainClock = (props) => {
    function test(){
        console.log('RED');
    }
    return (
        <div className="clock__section-group">
            <ClockSectionItem number={props.time[0]} description={'Hrs'}/>
            <span className="clock-colon">:</span>
            <ClockSectionItem number={props.time[1]} description={'Min'}/>
            <span className="clock-colon">:</span>
            <ClockSectionItem number={props.time[2]} description={'Sec'}/>
            <BttnAdd onClick={test}/>
        </div>
    );
};

export default MainClock;
