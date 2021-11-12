import react, { useEffect, useRef, useState } from 'react';
import Clock from '../Clock/Clock';
import Stopwatch from '../Stopwatch/Stopwatch';
import TimerC from '../Timer/Timer';

const TabsButton = () => {
    const [selectTab, setTab] = useState(1);
    const timer = useRef(null);
    const clock = useRef(null);

    function optionTab() {
        switch (selectTab) {
            case 1:
                timer.current.classList.remove('tabs__button--active');
                clock.current.classList.add('tabs__button--active');
                setTab(1);
                break;
            case 2:
                timer.current.classList.add('tabs__button--active');
                clock.current.classList.remove('tabs__button--active');
                setTab(2);
                break;
        }
    }
    useEffect(() => {
        optionTab();
    }, [selectTab]);
    return (
        <div className="timer">
            <div className="tabs">
                <button ref={clock} className="timer__button tabs__button " onClick={() => setTab(1)}>
                    CLOCK
                </button>
                <button ref={timer} className="timer__button tabs__button " onClick={() => setTab(2)}>
                    TIMER
                </button>
            </div>
            {selectTab == 1 && <Clock />}
            {selectTab == 2 && <TimerC />}
        </div>
    );
};

export default TabsButton;
