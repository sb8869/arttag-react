import './App.css';
import back from './media/Back.png';
import brush from './media/brush.png';
import color from './media/color.png';
import done from './media/done.png';
import eraser from './media/eraser.png';
import undo from './media/last_step.png';
import redo from './media/next_step.png';

function DrawingApp() {
  return (
      <div className="paint-app">
          <div className='top-tools'>
                <button class="toolButton"><img src={back} width="auto"/></button>
                <button class="toolButton"><img src={undo} width="auto"/></button>
                <button class="toolButton"><img src={redo} width="auto"/></button>
                <button class="toolButton"><img src={done} width="auto"/></button>
                
                
          </div>
          
          <div className='bottom-tools'>
                <button class="toolButton"><img src={brush} width="auto"/></button>
                <button class="toolButton"><img src={eraser} width="auto"/></button>
                <button class="toolButton"><img src={color} width="auto"/></button>
          </div>
      </div>
  );
}

export default DrawingApp;