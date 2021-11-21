import {useState} from "react";

const TimeZoneSaved = (props) => {


    return (
        // <div className="preview-time">
        //     <div className="preview-time__item">
        //         <div className="preview-time__capital">Tokyo</div>
        //         <div className="preview-time__sub-timer">14:34</div>
        //     </div>
        // </div>
    <ul className="preview-time">{props.saveCityList}</ul>
    )

}


export default TimeZoneSaved;

