import react from "react";

const Wrap = (props) => {
        return(
            <div class="wrap">
                    {props.children} 


                {/* popup */}
                <div class="popup">
                    <p class="popup__text">
                        Please change time Lorem, ipsum dolor.
                    </p>
                </div>
            </div>
        )
}
export default Wrap;