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
        <div className="row">
            <Link><button><img src={`${qr}`} style= {{ width: '50%'}} alt="navigateButton"/></button></Link>

          <button onClick={() => setButtonPopup(true)} className="add-button"><img src={`${add}`} alt="navigateButton"/></button>
          <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <Link to="/draw"><button><img src={`${create}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
            <Link to="/draw"><button><img src={`${tag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
          </Popup>
          
          <Link to="/gallery"><button><img src={`${gallery}`} style= {{ width: '50%'}} alt="navigateButton"/></button></Link>
        
        </div>
      </div>
  );
}

export default BottomNav;