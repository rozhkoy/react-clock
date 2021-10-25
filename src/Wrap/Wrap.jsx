import react, { createContext, useEffect, useState } from "react";
import Popup from "../Popup/Popup";
export const ContextPopupMesseges = createContext()


const Wrap = (props) => {
    const [popupMesseges , setMesseges] = useState('');
    
    
    const showMesseges = (text) =>{
        setMesseges(text);
        console.log(text)
    }
        return(
            <ContextPopupMesseges.Provider value={showMesseges}>
            <div class="wrap">
                {props.children} 
                <Popup messeges={popupMesseges} />
            </div>
            </ContextPopupMesseges.Provider>
        )
}
export default Wrap;