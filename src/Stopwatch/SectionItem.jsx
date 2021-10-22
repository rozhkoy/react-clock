import react from "react";

const SectionItem = (props) => {
    return(
        <div class="stop-watch__section-item">
            <span class="numer__item">00</span>
            <span class="number__desription">{props.desription}</span>
        </div>
    )   
}
export default SectionItem;