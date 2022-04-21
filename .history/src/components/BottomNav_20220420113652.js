import React from 'react';
import add from '../media/add.png'
import gallery from '../media/gallery.png'
import qr from '../media/qr.png'
import create from '../media/create.png'
import tag from '../media/tag.png'
import { Link } from "react-router-dom";
import Popup from "../components/Popup"
import {useState} from 'react';
import "../App.css";

function BottomNav() {
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className="bottombar-nav">
            <button><img src={`${qr}`} style= {{ width: '50%'}} alt="navigateButton"/></button>

          <button onClick={() => setButtonPopup(true)} className="add-button"><img src={`${add}`} alt="navigateButton"/></button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <Link to="/drawingApp"><button><img src={`${create}`} id="popup-tab" alt="createButton"/></button></Link>
            <Link to="/scan"><button><img src={`${tag}`} id="popup-tab" alt="scanButton"/></button></Link>
          </Popup>
          
          <Link to="/gallery"><button><img src={`${gallery}`} style= {{ width: '50%'}} alt="navigateButton"/></button></Link>
        
      </div>
  );
}

export default BottomNav;