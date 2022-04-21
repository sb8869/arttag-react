import React from "react";
import Sketch from "react-p5";
import p5 from "react-p5"

import './App.css';
import back from './icons/Back.png';
import brush from './icons/brush.png';
import color from './icons/color.png';
import done from './icons/done.png';
import trash from './icons/trash.png';
import eraser from './icons/eraser.png';
import undo from './icons/last_step.png';
import redo from './icons/next_step.png';
import save from './icons/save.png';
import saveToGallery from './media/saveToGallery.png';
import saveAndTag from './media/saveAndTag.png';
import returnToHome from './media/returnToHome.png';
import Popup from "./components/Popup"
import {useState} from 'react';
import { Link } from "react-router-dom";
import { useWindowEventListener } from "rooks";
import useRootClose from 'react-overlays/useRootClose';

let colorPicker;
let brushWidth;
let type = "pencil";
let eraseEnable = false;
let cnv;

//window.p5.clear();

export default (props) => {
	const setup = (p5, canvasParentRef) => {
		// use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        cnv = p5.createCanvas(500, 500).parent(canvasParentRef);
        
        colorPicker = p5.createColorPicker('#ed225d');
        brushWidth = p5.createSlider(1, 10, 3, 1);
        brushWidth.position((p5.width / 2) - 75, p5.height + 50)

        function preventBehavior(e) {
            e.preventDefault();
        };
      
        document.addEventListener("touchmove", preventBehavior, {
            passive: false
        });
	};

	const draw = (p5) => {
        if (p5.mouseIsPressed) {
            let color = colorPicker.value();
            p5.stroke(color);
    
            if (type === 'marker') {
                marker(color, brushWidth.value(), p5);
            } else if (type === 'spray') {
                sprayPaint(color, brushWidth.value(), p5)
            } else if (type === 'fountain') {
                fountainPen(color, brushWidth.value(), p5);
            } else {
                pen(color, brushWidth.value(), p5);
            }
        }
    };

    const pen = (color, sizeBrush, p5) =>{
        p5.stroke(color)
        p5.strokeWeight(sizeBrush)
        p5.line(p5.pwinMouseX, p5.pwinMouseY - 50, p5.winMouseX, p5.winMouseY - 50)
    }

    ///////////////////////////// ******** Spray paint brush *********** ///////////////////////
    const sprayPaint = (color, sizeBrush, p5) => {
        // set the color and brush style
        p5.stroke(color)
        p5.strokeWeight(sizeBrush)

        // find the speed of the mouse movement
        const speed = p5.abs(p5.mouseX - p5.pmouseX) + p5.abs(p5.mouseY - p5.pmouseY)

        // set minimum radius and spray density of spraypaint brush
        const minRadius = 10;
        const sprayDensity = 80

        // find radius of the spray paint brush and radius squared
        const r = speed + minRadius;
        const rSquared = r * r;

        // set the number of times we lerp the points in the for loop
        const lerps = 10

        // repeat the random points with lerping
        for (let i = 0; i < lerps; i++) {

            // find the lerped X and Y coordinates
            const lerpX = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
            const lerpY = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)

            // draw a bunch of random points within a circle
            for (let j = 0; j < sprayDensity; j++) {

                // pick a random position within the circle
                const randX = p5.random(-r, r)
                const randY = p5.random(-1, 1) * p5.sqrt(rSquared - randX * randX)

                // draw the random point
                p5.point(lerpX + randX, lerpY + randY)
            }
        }
    }

    ///////////////////////////// ******** Marker brush ***********  ////////////////////////
    const marker = (color, brushWidth, p5) => {
        p5.fill(`${color}50`)
        //p5.noStroke()

        p5.circle(p5.mouseX, p5.mouseY, brushWidth * 10)
    }

    ///////////////////////////// ******** Fountain pen ***********  /////////////////////////
    const fountainPen = (color, brushSize, p5) =>{
        // set the color and brush style
        p5.stroke(color)
        p5.strokeWeight(brushSize)
        const width = 1 * brushSize

        // set the number of times we lerp the line in the for loop
        const lerps = 16

        // repeat the slanted line with lerping
        for (let i = 0; i <= lerps - 1; i++) {

            // find the lerped x and y coordinates between the mouse points
            const x = p5.lerp(p5.mouseX, p5.pmouseX, i / lerps)
            const y = p5.lerp(p5.mouseY, p5.pmouseY, i / lerps)

            // draw a slanted line
            p5.line(x - width, y - width, x + width, y + width)
        }
    }

    const toggleErase = p5 => {
        if (eraseEnable) {
            console.log("if", eraseEnable);
            p5.noErase();
    
            eraseEnable = false;
    
        }
        console.log("else", eraseEnable);
        p5.erase();
        eraseEnable = true;
    }
    
    const printOut = (p5) => {
        console.log(colorPicker.value())
    }

    const resetSketch = () => {
        console.log("canvas reset")
    }

    const [saveButtonPopup, setSaveButtonPopup] = useState(false);
    const [backButtonPopup, setBackButtonPopup] = useState(false);


    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleRootClose = () => setShow(false);

    useRootClose(ref, handleRootClose, {
    disabled: !show,
    });

	return(
        <div className="paint-app">
          <div className="flex flex-col items-center">
            <button
            type="button"
            className="btn"
            onClick={() => setShow(true)}
            >
            Render RootCloseWrapper
            </button>

            {show && (
            <div
                ref={ref}
                className="rounded shadow bg-white p-6"
            >
                <span>Click anywhere to dismiss me!</span>
            </div>
            )}
        </div>
            <div className='top-tools'>
                <button className="toolButton" onClick={() => setSaveButtonPopup(true)}><img src={save} width="auto" id="save-button"/></button>
                <Popup trigger={saveButtonPopup} setTrigger={setSaveButtonPopup}>
                    <button onClick={saveSketch}><img src={`${saveToGallery}`} style= {{ width: '100%'}} alt="createButton"/></button>
                    <Link to="/placement"><button><img src={`${saveAndTag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                </Popup>
                
                <button className="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
                <button className="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
                
                <button onClick={() => setBackButtonPopup(true)}><img src={back} width="auto" id="save-button"/></button>
                <Popup trigger={backButtonPopup} setTrigger={setBackButtonPopup}>
                    <p>Do you want to lose this masterpiece?</p>
                    <Link to="/explore"><button><img src={`${returnToHome}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                </Popup>

            </div>

             <Sketch setup={setup} draw={draw} />  

            <div className='bottom-tools'>
                <button className="toolButton" onClick={resetSketch}><img src={trash} width="auto" id="trash-button"/></button>
                <button className="toolButton"><img src={brush} width="auto"/></button>
                <button className="toolButton"><img src={eraser} width="auto"/></button>
                <button className="toolButton"><img src={color} width="auto"/></button>
            </div>
        </div>
    );
};


const saveSketch = p5 => {
    window.p5.saveCanvas(cnv, "yourSketch", "png");
    console.log("saved")
}






// import React from "react";
// import Sketch from "react-p5";

// export default (props) => {
//     const setup = (p5, canvasParentRef) => {
//         p5.createCanvas(500, 500).parent(canvasParentRef);
//     };

//     const draw = (p5) => {
//     };
    
//     const resetSketch = (p5) => {
//         window.p5.clear() // console: window.p5.clear is NOT a function
//     }

//     return( 
//         <div>
//             <Sketch setup={setup} draw={draw} />
//             <button onClick={resetSketch}>Reset</button>
//         </div>
//     );
// };
