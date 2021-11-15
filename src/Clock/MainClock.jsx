import ClockSectionItem from './ClocksectionItem';

const MainClock = (props) => {
    return (
        <div className="clock__section-group">
            <ClockSectionItem number={props.time[0]} description={'Hrs'} />
            <span className="clock-colon">:</span>
            <ClockSectionItem number={props.time[1]} description={'Min'} />
            <span className="clock-colon">:</span>
            <ClockSectionItem number={props.time[2]} description={'Sec'} />
        </div>
    );
};

export default MainClock;
