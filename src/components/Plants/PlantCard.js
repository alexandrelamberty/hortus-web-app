import { useState } from "react";

export function PlantCard(props){
    const [show, setShow] = useState(props.show);

    function handlecClick(e) {
        e.preventDefault();
        console.log('[PlantCard] handleClick ');
        setShow(0);
    }
    if (show) {
        return(
            <>
            <p>Plant Card</p>
            <button onClick={handlecClick}>Close</button>
            </>
        );
      }
      return "";
    
}