import './App.css';
import back from './icons/Back.png';
import brush from './icons/brush.png';
import color from './icons/color.png';
import done from './icons/done.png';
import eraser from './icons/eraser.png';
import undo from './icons/last_step.png';
import redo from './icons/next_step.png';

function DrawingApp() {
  return (
      <div className="paint-app">
          <div className='top-tools'>
                <button className="toolButton"><img src={back} width="auto"/></button>
                <button className="toolButton"><img src={undo} width="auto"/></button>
                <button className="toolButton"><img src={redo} width="auto"/></button>
                <button className="toolButton"><img src={done} width="auto"/></button>
                
                
          </div>
          
          <div className='bottom-tools'>
                <button className="toolButton"><img src={brush} width="auto"/></button>
                <button className="toolButton"><img src={eraser} width="auto"/></button>
                <button className="toolButton"><img src={color} width="auto"/></button>
          </div>
      </div>
  );
}

export default DrawingApp;