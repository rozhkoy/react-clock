import React, { createContext, useEffect, useState, useRef } from "react";

const Popup = (props) => {
     const refPopup = useRef(null)
     
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
     
     
    return(
        <div ref={refPopup} class="popup ">
            <p class="popup__text">
                {props.messeges}
            </p>
        </div>

    )
}

export default Popup;