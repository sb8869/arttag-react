import './App.css';
import back from './icons/Back.png';
import brush from './icons/brush.png';
import color from './icons/color.png';
import done from './icons/done.png';
import trash from './icons/trash.png';
import eraser from './icons/eraser.png';
import undo from './icons/last_step.png';
import redo from './icons/next_step.png';
import save from './icons/save.png'
import saveSketch, { Draw } from './Draw';
import Drawing from './Draw';
import { Link } from "react-router-dom";
import explore from './Explore'
import saveToGallery from './media/saveToGallery.png';
import saveAndTag from './media/saveAndTag.png';
import returnToHome from './media/returnToHome.png';
import Popup from "./components/Popup"
import {useState} from 'react';

function DrawingApp() {
  // <Link to="/explore" className="toolButton"><button><img src={back} width="auto" id="save-button"/></button></Link>

  let draw = new Draw()
  const [buttonPopup, setButtonPopup] = useState(false);
  return (
      <div className="paint-app">
          <div className='top-tools'>
            <button className="toolButton" onClick={() => setButtonPopup(true)}><img src={save} width="auto" id="save-button"/></button>
              <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <Link to="/drawingApp"><button><img src={`${saveToGallery}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                <Link to="/drawingApp"><button><img src={`${saveAndTag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
              </Popup>
            <button className="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
            <button className="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
            <button><img src={back} width="auto" id="save-button"/></button>
            
            </div>
                
          <div>
          <Drawing></Drawing>
          </div>


          
          <div className='bottom-tools'>
            <button className="toolButton" onClick={() => setButtonPopup(true)}><img src={trash} width="auto" id="trash-button"/></button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <p>Do you want to lose this masterpiece?s</p>
                <Link to="/explore"><button><img src={`${returnToHome}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
              </Popup>
            <button className="toolButton"><img src={brush} width="auto"/></button>
            <button className="toolButton"><img src={eraser} width="auto"/></button>
            <button className="toolButton"><img src={color} width="auto"/></button>
          </div>
      </div>
  );
}

export default DrawingApp;