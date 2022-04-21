
import p5 from 'react-p5';


import React, { Component } from "react";
import Sketch from "react-p5";

export default class Draw extends Component {
  x = 50
  y = 50

  brushWidth

  canvas;
  colorPicker
  brushWidth
  brushType
  previousState
  eraseEnable = false
  bool = false;


  clicks = 0;

  type = 'pencil';

  images = [];
  prevImages = []
  

  setup = (p5, parent) => { // useeffect
    this.canvas = p5.createCanvas(p5.windowWidth, 500).parent(parent)
    this.canvas.position(0, 50);

    this.colorPicker = p5.createColorPicker('#ed225d');

    // this.colorPicker.position((p5.width / 2) + 100, p5.height + 80);

    // let sprayButton = p5.createImg("./images/spraypaint.png");
    // let pencilButton = p5.createImg("./images/pencil.png");
    // let markerButton = p5.createImg("./images/marker.png");
    // let fountainButton = p5.createImg("./images/fountain.png");
    // let eraseButton = p5.createImg("./images/eraser.png");
    // let resetButton = p5.createImg("./images/clear.png");
    // let undoButton = p5.createImg("./images/undo.png");
    // let saveButton = p5.createButton("Save");

    // let sprayButton = document.querySelector()
    // let pencilButton = p5.createImg("./images/pencil.png");
    // let markerButton = p5.createImg("./images/marker.png");
    // let fountainButton = p5.createImg("./images/fountain.png");
    // let eraseButton = p5.createImg("./images/eraser.png");
    // let resetButton = document.querySelector("#trash-button")
    // let undoButton = p5.createImg("./images/undo.png");
    // let saveButton = p5.createButton("Save");
    p5.textAlign(p5.CENTER);
    
    // saveButton.style('color', 'white');

    this.brushWidth = p5.createSlider(1, 10, 3, 1);
    this.brushWidth.position((p5.width / 2) - 75, p5.height + 50)

    function preventBehavior(e) {
      e.preventDefault();
  };

  document.addEventListener("touchmove", preventBehavior, {
      passive: false
  });

//   let buttons = [sprayButton,
//     pencilButton,
//     markerButton,
//     fountainButton,
//     resetButton,
//     eraseButton,
//     undoButton,
//     saveButton];

    // let buttons = [
    //     resetButton,
    //     undoButton,
    //     saveButton];
    

    //buttons.map(button => button.style('background-color', '#083C4F'));
    //buttons.map(button => button.style('padding', '20px 50px'));
    //sprayButton.style('background-color', '#083C4F');
    
    // sprayButton.position((p5.width / 2) - 150, p5.height + 75);
    // pencilButton.position((p5.width / 2) - 120, p5.height + 75);
    // markerButton.position((p5.width / 2) - 80, p5.height + 75);
    // fountainButton.position((p5.width / 2) - 35, p5.height + 75);
    // eraseButton.position((p5.width / 2) + 10, p5.height + 75);

    // resetButton.position((p5.width / 2) - 100, 10);
    // undoButton.position((p5.width / 2) - 25, 10);
    // saveButton.position((p5.width / 2) + 50, 10);

    // resetButton.mouseClicked(() => {
    //   this.resetSketch(p5)
    // })

    // saveButton.mouseClicked(() => {
    //   this.saveSketch(p5)
    // })

    // sprayButton.mouseClicked(() => {
    //   p5.noErase();
    //   this.type = 'spray';
    //   console.log("spray")
    // })

    // pencilButton.mouseClicked(() => {
    //     p5.noErase();
    //     this.type = 'pencil';
    //     console.log("pencil")
    // })

    // fountainButton.mouseClicked(() => {
    //     p5.noErase();
    //     this.type = 'fountain';
    //     console.log("fountain")
    // })

    // markerButton.mouseClicked(() => {
    //     p5.noErase();
    //     this.type = 'marker';
    //     console.log("marker")
    // })

    // eraseButton.mouseClicked(() => {
    //     this.toggleErase(p5);
    //     console.log('eraser');
    // })

    // undoButton.mouseClicked(() => {
    //     this.undoToPreviousState(p5)
    // })

  }

  draw = p5 => {
    //p5.background(0)
    // p5.ellipse(this.x, this.y, 70, 70)
    // this.x++
    if (p5.mouseIsPressed) {
        this.color = this.colorPicker.value();
        p5.stroke(this.color);

        if (this.type === 'marker') {
            this.marker(this.color, this.brushWidth.value(), p5);
        } else if (this.type === 'spray') {
            this.sprayPaint(this.color, this.brushWidth.value(), p5)
        } else if (this.type === 'fountain') {
            this.fountainPen(this.color, this.brushWidth.value(), p5);
        } else {
            this.pen(this.color, this.brushWidth.value(), p5);
        }
    }
  }

  // save state by taking image of background
  // for more info look at reference for get
  saveState = p5 => {
    this.previousState = p5.get();
    this.images.push(this.previousState);
    console.log("images array", this.images);
  }
  /*
  * mousePressed():when input is detected on canvas save the state
  */
  mousePressed = p5 => {

    if (p5.mouseX <= p5.windowWidth && p5.mouseX >= 0 && p5.mouseY <= (p5.windowHeight * .85) && p5.mouseY >= 0) {
        this.saveState();
        console.log("state has been saved")
        this.clicks += 1;
        console.log("clicks: ", this.clicks);
    }
  }

  // clears out entire canvas
  resetSketch = p5 => {
    //clear(mouseX, mouseY, brushWidth.value());
    p5.clear();
  }

  // save canvas as a png to phone
  saveSketch = p5 => {
    p5.saveCanvas(this.canvas, "sketch", "png");
  }

  undoToPreviousState = p5 =>{
    //console.log("previous state", previousState);
    // if previousState doesn't exist ie is null
    // return without doing anything
    if (!this.previousState) {
        return;
    }
    // else draw the background (in this case white)
    // and draw the previous state
    p5.clear();

    //images array that has all the saved screens
    // display last image
    p5.image(this.images[this.images.length - 1], 0, 0);
    //take off that image
    this.images.pop()

    this.previousState = p5.image(this.prevImages[(this.prevImages.length - 1)], 0, 0);
    //console.log("Clicks in undo", counter);

    console.log("previous state", this.previousState);

    if (this.images.length > 0) {
      this.prevImages.push(this.images[this.images.length - 1]);
        console.log("previous images", this.prevImages)
    }

}

  toggleErase = p5 => {

    if (this.eraseEnable) {
        console.log("if", this.eraseEnable);
        p5.noErase();

        this.eraseEnable = false;

    }
    console.log("else", this.eraseEnable);
    p5.erase()
    this.eraseEnable = true;
}

pen = (color, sizeBrush, p5) =>{
    p5.stroke(color)
    p5.strokeWeight(sizeBrush)

    //translate(pmouseX, pmouseY)
    //translate(winMouseX, winMouseY)
    //line(pwinMouseX, pwinMouseY, winMouseX, winMouseY) 
    p5.line(p5.pwinMouseX, p5.pwinMouseY - 50, p5.winMouseX, p5.winMouseY - 50)
}

///////////////////////////// ******** Spray paint brush *********** ///////////////////////
sprayPaint(color, sizeBrush, p5) {
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
marker(color, brushWidth, p5) {
    p5.fill(`${color}50`)
    //p5.noStroke()

    p5.circle(p5.mouseX, p5.mouseY, brushWidth * 10)
}

///////////////////////////// ******** Fountain pen ***********  /////////////////////////
fountainPen(color, brushSize, p5) {
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


  render() {
    //return 
    const [saveButtonPopup, setSaveButtonPopup] = useState(false);
    const [backButtonPopup, setBackButtonPopup] = useState(false);
    return (
        <div className="paint-app">
            <div className='top-tools'>
              <button className="toolButton" onClick={() => setSaveButtonPopup(true)}><img src={save} width="auto" id="save-button"/></button>
              <Popup trigger={saveButtonPopup} setTrigger={setSaveButtonPopup}>
                <Link to="/drawingApp"><button><img src={`${saveToGallery}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
                <Link to="/drawingApp"><button><img src={`${saveAndTag}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
              </Popup>
              <button className="toolButton"><img src={redo} width="auto" id="redo-button"/></button>
              <button className="toolButton"><img src={undo} width="auto" id="undo-button"/></button>
              <button onClick={() => setBackButtonPopup(true)}><img src={back} width="auto" id="save-button"/></button>
              <Popup trigger={backButtonPopup} setTrigger={setBackButtonPopup}>
                  <p>Do you want to lose this masterpiece?</p>
                  <Link to="/explore"><button><img src={`${returnToHome}`} style= {{ width: '100%'}} alt="createButton"/></button></Link>
              </Popup>
              </div>
  
              <Sketch setup={this.setup} draw={this.draw} />

            <div className='bottom-tools'>
              <button className="toolButton" ><img src={trash} width="auto" id="trash-button"/></button>
              <button className="toolButton"><img src={brush} width="auto"/></button>
              <button className="toolButton"><img src={eraser} width="auto"/></button>
              <button className="toolButton"><img src={color} width="auto"/></button>
            </div>
        </div>
    )
  }
  
}

export {
    Draw
}
