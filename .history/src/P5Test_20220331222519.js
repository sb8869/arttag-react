import React from "react";
import Sketch from "react-p5";

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

	let x = 50;
    let y = 50;
    let colorPicker;
export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
		// (without that p5 will render the canvas outside of your component)
        p5.createCanvas(500, 500).parent(canvasParentRef);
        colorPicker = p5.createColorPicker('#ed225d');
	};

	const draw = (p5) => {
		p5.background(0);
		p5.ellipse(x, y, 70, 70);
		// NOTE: Do not use setState in the draw function or in functions that are executed
		// in the draw function...
		// please use normal variables or class properties for these purposes
		x++;
    };
    
    const printOut = (p5)=> {
        console.log(colorPicker.value())
    }

	return(
        <div className="paint-app">
            <div className='top-tools'>
            {/* <button className="toolButton" onClick={() => setSaveButtonPopup(true)}><img src={save} width="auto" id="save-button"/></button>
            <Popup trigger={saveButtonPopup} setTrigger={setSaveButtonPopup}>
                <Link to="/drawingApp"><button><img src={`${saveToGallery}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                <Link to="/drawingApp"><button><img src={`${saveAndTag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
            </Popup> */}
            <button className="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
            <button className="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
            {/* <button onClick={() => setBackButtonPopup(true)}><img src={back} width="auto" id="save-button"/></button>
            <Popup trigger={backButtonPopup} setTrigger={setBackButtonPopup}>
                <p>Do you want to lose this masterpiece?</p>
                <Link to="/explore"><button><img src={`${returnToHome}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
            </Popup> */}
            
            </div>

           
                <Sketch setup={setup} draw={draw} />
            <div className='bottom-tools'>
                <button className="toolButton" ><img src={trash} width="auto" id="trash-button"/></button>
                <button className="toolButton"><img src={brush} width="auto"/></button>
                <button className="toolButton"><img src={eraser} width="auto"/></button>
                <button className="toolButton"><img src={color} width="auto"/></button>
            </div>
        </div>
    );
};