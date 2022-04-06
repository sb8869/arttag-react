import React from 'react';
import './App.css';
import cancel from '../media/cancel.png';


//https://www.youtube.com/watch?v=i8fAO_zyFAM

function Popup(props) {


    return (props.trigger) ? (

        <div className="popup">
            <div className="popup-inner">
                <button className="close-btn" onClick={() => props.setTrigger(false)}><img src={`${cancel}`} style= {{ width: '100%'}} alt="cancelButton"/></button>
                {props.children}
            </div>
            
        </div>
    ) : "";
}

export default Popup