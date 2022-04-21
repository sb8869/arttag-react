import {React, useRef} from "react";
import Sketch from "react-p5";
import useColorRootClose from "react-overlays/useRootClose";
//import p5 from "react-p5";
import './Paint.css';

//import './App.css';
import back from './icons/Back.png';
import brush from './icons/brush.png';
import color from './icons/color.png';
//import done from './icons/done.png';
import trash from './icons/trash.png';
import eraserImg from './icons/eraser.png';
import undo from './icons/last_step.png';
import redo from './icons/next_step.png';
import save from './icons/save.png';
import saveToGallery from './media/saveToGallery.png';
import saveAndTag from './media/saveAndTag.png';
import returnToHome from './media/returnToHome.png';
import Popup from "./components/Popup"
import {useState} from 'react';
import spray from './icons/spray.png';
import markerBrush from './icons/marker.png';
import { Link } from "react-router-dom";

import pencil from './icons/pencil.png';
import fountain from './icons/fountain.png';

// overlay
import useRootClose from 'react-overlays/useRootClose';

// To include the default styles
import 'react-rangeslider/lib/index.css'
import { ImageBackgroundBase } from "react-native";

// Not using an ES6 transpiler

let type = "pencil";
let eraseEnable = false;
let cnv;

let brushWidth = document.getElementById("slider");
let slider;
let colorPick;
let colorPicker = document.getElementById("colorPicker");
let bool = false;
let boolColor = false;

//window.p5.clear();
let unsafe_p5Instance;

export default (props) => {
	const setup = (p5, canvasParentRef) => {
        unsafe_p5Instance = p5;

        colorPick = document.createElement("input");
        //create a fake color picker
        colorPick.id = "colorPick";
        colorPick.type = "color";
        colorPick.value = "#000000";

        //create a fake slider
        slider = document.createElement("input");
        slider.id = "sliderTwo";
        slider.type = "range";
        slider.min = 1;
        slider.max = 10;
        slider.value = 1;
        slider.step = 1;

		// use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        cnv = p5.createCanvas(window.innerWidth, window.innerHeight - 150).parent(canvasParentRef);

        function preventBehavior(e) {
            e.preventDefault();
        };
      
        document.addEventListener("touchmove", preventBehavior, {
            passive: false
        });
	};

	const draw = (p5) => {
        if (p5.mouseIsPressed) {
            colorPicker = colorPick.value;
            p5.stroke(colorPicker);
      
            if (boolColor == false) {
              colorPicker = colorPick.value;
            } else if (boolColor == true) {
              colorPicker = colorValue;
            }
            console.log(colorPicker);
      
            //check if the slider is created
            if (bool == false) {
              pen(colorPicker, slider.value, p5);
              brushWidth = slider.value;
            } else if (bool == true) {
              //if there are no modifications, make sure the brush is 1
              if (brushWidth == 0) {
                brushWidth = 1;
              }
              colorPicker = colorValue;
      
              //change the type of tool
              if (type === "marker") {
                marker(colorPicker, brushWidth, p5);
              } else if (type === "spray") {
                sprayPaint(colorPicker, brushWidth, p5);
              } else if (type === "fountain") {
                fountainPen(colorPicker, brushWidth, p5);
              } else {
                pen(colorPicker, brushWidth, p5);
              }
            }
          }
    };

    const pen = (color, sizeBrush, p5) =>{
        unsafe_p5Instance.stroke(color)
        unsafe_p5Instance.strokeWeight(sizeBrush)
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
        p5.fill(color)
        p5.noStroke()
        console.log("Color: ", color);
        //p5.noStroke()
        p5.circle(p5.mouseX, p5.mouseY, brushWidth * 10)
    }

    ///////////////////////////// ******** Fountain pen ***********  /////////////////////////
    const fountainPen = (color, brushSize, p5) =>{
        // set the color and brush style
        //unsafe_p5Instance = p5;

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

    const eraser = (color, brushWidth,p5) =>{
        p5.stroke(color)
        p5.strokeWeight(brushWidth * 5)
        
        p5.line(p5.pwinMouseX, p5.pwinMouseY - 50, p5.winMouseX, p5.winMouseY - 50)
    }

    // const toggleErase = p5 => {
    //     if (eraseEnable) {
    //         unsafe_p5Instance.noErase();
    //         eraseEnable = false;
    
    //     }
    //     unsafe_p5Instance.erase();
    //     eraseEnable = true;
    // }

    const resetSketch = (p5) => {
        // debugger;
        unsafe_p5Instance.clear();
    }
    const saveSketch = p5 => {
        unsafe_p5Instance.saveCanvas(cnv, "sketch", "png");
    }

    function changeValue() {
        brushWidth = value;
        bool = true;
      }
    
      function changeColor() {
        colorPicker = value;
        boolColor = true;
      }


    const [saveButtonPopup, setSaveButtonPopup] = useState(false);
    const [backButtonPopup, setBackButtonPopup] = useState(false);


    const ref = useRef();
    const [show, setShow] = useState(false);
    const handleRootClose = () => setShow(false);

    useRootClose(ref, handleRootClose, {
    disabled: !show,
    });

    const MAX = 10;
    const [value, setValue] = useState(0);

    /* Color input */
    const [colorValue, setColorValue] = useState(0);

    const colorRef = useRef();

    const [showColor, setColorShow] = useState(false);
    const handleColorRootClose = () => setColorShow(false);


    useColorRootClose(colorRef, handleColorRootClose, {
        disabled: !showColor,
    });

	return(
        <div className="paint-app">
            <div className='top-tools'>
                <button className="toolButton" onClick={() => setSaveButtonPopup(true)}><img src={save} width="auto" id="save-button"/></button>
                <Popup trigger={saveButtonPopup} setTrigger={setSaveButtonPopup}>
                    <button ><img src={`${saveToGallery}`} style= {{ width: '100%'}} alt="createButton" onClick={saveSketch}/></button>
                    <Link to="/placement"><button><img src={`${saveAndTag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                </Popup>
                
                <button className="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
                <button className="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
                
                <button onClick={() => setBackButtonPopup(true)} className="toolButton"><img src={back} width="auto" id="back-button"/></button>
                <div id="draw-backbtn">
                <Popup trigger={backButtonPopup} setTrigger={setBackButtonPopup}>
                    <p>Do you want to lose this masterpiece?</p>
                    <Link to="/explore"><button><img src={`${returnToHome}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                </Popup>
                </div>

            </div>

             <Sketch setup={setup} draw={draw} />  

            <div className='bottom-tools'>
            
                <button className="toolButton" onClick={resetSketch}><img src={trash} width="auto" id="trash-button"/></button>
                    <button type="button" className="toolButton" onClick={() => setShow(true)}><img src={brush} width="auto"/></button>
                    {show && (
                    <div
                        ref={ref}
                        className="brushes-overlay"
                    >
                        <span className="brushes">
                            <img className="brushImg" src={fountain} onClick={()=>{unsafe_p5Instance.noErase();console.log("fountain"); type = "fountain"; fountainPen();}}></img>
                            <img className="brushImg" src={markerBrush} onClick={()=>{unsafe_p5Instance.noErase();console.log("marker"); type = "marker"; marker();}}></img>
                            <img className="brushImg" src={pencil} onClick={()=>{unsafe_p5Instance.noErase();console.log("pen"); type = "pen"; pen();}}></img>
                            <img className="brushImg" src={spray} onClick={()=>{unsafe_p5Instance.noErase();console.log("sprat"); type = "spray"; sprayPaint();}} style= {{ width: '10%', paddingBottom: "6%"}}></img>
                        </span>
                        <input
                            type="range"
                            min="1"
                            max={MAX}
                            id="slider"
                            onChange={(e) => setValue(e.target.value)}
                            onClick={changeValue()}
                            value={value}
                            />
                    </div>
                    )}
          
                <button className="toolButton"><img src={eraserImg} onClick={()=>{unsafe_p5Instance.erase(); console.log("eraser"); type = "erase";}} width="auto"/></button>
                <button
                    type="button"
                    className="toolButton"
                    onClick={() => setColorShow(true)}
                    >
                    <img src={color} width="auto" />
                    </button>
                    {showColor && (
                    <div ref={colorRef} className="color-overlay">
                        <span className="colors">
                        <input
                            type="color"
                            id="colorPicker"
                            onChange={(e) => setColorValue(e.target.value)}
                            onClick={changeColor()}
                            value={colorValue}
                        />
                        </span>
                    </div>
                    )}
            </div>
        </div>
    );
};