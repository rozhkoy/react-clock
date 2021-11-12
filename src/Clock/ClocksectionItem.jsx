import react from 'react';

const ClockSectionItem = (props) => {
    return (
        <div class="clock__section-item">
            <span class="numer__item">{props.number}</span>
            <span class="number__desription">{props.description}</span>
        </div>
    );
};
export default ClockSectionItem;
