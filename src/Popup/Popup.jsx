import React, { createContext, useEffect, useState, useRef } from "react";
import useForceUpdate from "use-force-update";


const Popup = (props) => {
     const refPopup = useRef(null)
     const updateforce = useForceUpdate();
     useEffect(() =>{
        if(props.messeges){
            console.log("ohh");
            refPopup.current.classList.add('visibal-block')
            setTimeout(() => {
                refPopup.current.classList.add('anima')
            }, 2000);
            setTimeout(() => {
                refPopup.current.classList.remove('visibal-block')
                refPopup.current.classList.remove('anima')
            }, 2150);
         }
         updateforce();
        },[props.messeges])
     
     
    return(
        <div ref={refPopup} class="popup ">
            <p class="popup__text">
                {props.messeges}
            </p>
        </div>

    )
}

export default Popup;