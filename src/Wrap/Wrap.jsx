import react, { createContext, useEffect, useState } from "react";
import useForceUpdate from "use-force-update";
import Popup from "../Popup/Popup";
export const ContextPopupMesseges = createContext()


const Wrap = (props) => {
   const update = useForceUpdate()
    const [popupMesseges , setMesseges] = useState('');
    
    
    const showMesseges = (text) =>{
        setMesseges(text);
        setMesseges((text) => text)
        console.log(text)
        update();
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