import React, { createContext, useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import useForceUpdate from "use-force-update";


const Popup = forwardRef((props, ref) => {
    const [statePopup, setPopupState] = useState(false)
    const controlPopup = useRef(null)
     let delayPopup;
    useImperativeHandle(ref, () => ({
        showPopup(){
                controlPopup.current.classList.add("anima");
                controlPopup.current.classList.add("visibal-block"); 
                setPopupState(true)
                delayPopup = setTimeout(() =>{
                    controlPopup.current.classList.remove("visibal-block"); 
                    controlPopup.current.classList.remove("anima");
                    setPopupState(false)
            } , 1400)
        
        }
    }))



    return (
        <div ref={controlPopup} class="popup">
            <p class="popup__text">
                {props.messeges}
            </p>
        </div>
    )


})

export default Popup;