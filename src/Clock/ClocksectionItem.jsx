import react from 'react';

const ClockSectionItem = (props) => {
    return (
        <div className="clock__section-item">
            <span className="numer__item">{props.number}</span>
            <span className="number__desription">{props.description}</span>
        </div>
    );
};
export default ClockSectionItem;
