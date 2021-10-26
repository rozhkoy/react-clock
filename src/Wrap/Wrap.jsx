import react, { createContext, useEffect, useRef, useState } from "react";
import useForceUpdate from "use-force-update";
import Popup from "../Popup/Popup";
export const ContextPopupMesseges = createContext()


const Wrap = (props) => {
    const update = useForceUpdate()
    const [popupMesseges , setMesseges] = useState('');
    const [popupState, setPopupState] = useState(true);
    const child = useRef();
    const handleOnClick = () => {
        if (child.current) {
          child.current.showPopup();
        }
      }
 
    
    const showMesseges = (text) =>{
        setMesseges(text);
        child.current.showPopup();
    }
        return(
            <ContextPopupMesseges.Provider value={showMesseges}>
            <div class="wrap">
                {props.children} 
                <Popup ref={child} messeges={popupMesseges} />
                <button onClick={handleOnClick}>Call foo</button>

            </div>
            </ContextPopupMesseges.Provider>
        )
}
export default Wrap;