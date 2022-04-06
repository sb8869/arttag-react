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
import Drawing from './Draw'

function DrawingApp() {
  return (
      <div className="paint-app">
          <div className='top-tools'>
            <button class="toolButton"><img src={save} width="auto" id="save-button"/></button>
            <button class="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
            <button class="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
            <button class="toolButton"><img src={back} width="auto" id="save-button"/></button>
                
                
          {/* </div>
          <Drawing></Drawing>
          <div> */}

          </div>
          
          <div className='bottom-tools'>
            <button class="toolButton"><img src={trash} width="50%"/></button>
            <button class="toolButton"><img src={brush} width="auto"/></button>
            <button class="toolButton"><img src={eraser} width="auto"/></button>
            <button class="toolButton"><img src={color} width="auto"/></button>
          </div>
      </div>
  );
}

export default DrawingApp;