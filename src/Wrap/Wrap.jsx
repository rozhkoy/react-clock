import react from "react";
import Popup from "../Popup/Popup";

const Wrap = (props) => {
        return(
            <div class="wrap">
                    {props.children} 


                {/* popup */}
                <Popup />
            </div>
        )
}
export default Wrap;