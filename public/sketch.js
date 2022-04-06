let colorPicker;
let brushWidth;

let brushType;
let previousState;
let eraseEnable = false;
let bool = false;

let sprayButton;
let pencilButton;
let markerButton;
let fountainButton;
let eraseButton;
let undoButton;

var resetButton;
var saveButton;

let clicks = 0;

let type = 'pencil';

let images = [];
let prevImages = []

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight * .85); // windowHeight * .9 = 658.8000000000001

    //background(0);

    canvas.position(0, 50);


    saveState();
    colorPicker = createColorPicker('#ed225d');
    colorPicker.position((width / 2) + 100, height + 80);
    bool = true;

    textAlign(CENTER);
    sprayButton = createImg("./images/spraypaint.png");
    pencilButton = createImg("./images/pencil.png");
    markerButton = createImg("./images/marker.png");
    fountainButton = createImg("./images/fountain.png");
    eraseButton = createImg("./images/eraser.png");
    resetButton = createImg("./images/clear.png");
    undoButton = createImg("./images/undo.png");
    saveButton = createButton("Save");
    saveButton.style('color', 'white');
    //sprayButton.parent('sketch01');

    brushWidth = createSlider(1, 10, 3, 1);
    brushWidth.position((width / 2) - 75, height + 50)

    function preventBehavior(e) {
        e.preventDefault();
    };

    document.addEventListener("touchmove", preventBehavior, {
        passive: false
    });


    //var undoButton = createButton("Undo");
    let buttons = [sprayButton,
    pencilButton,
    markerButton,
    fountainButton,
    resetButton,
    eraseButton,
    undoButton,
    saveButton];

    buttons.map(button => button.style('background-color', '#083C4F'));
    //buttons.map(button => button.style('padding', '20px 50px'));
    //sprayButton.style('background-color', '#083C4F');
    sprayButton.position((width / 2) - 150, height + 75);
    pencilButton.position((width / 2) - 120, height + 75);
    markerButton.position((width / 2) - 80, height + 75);
    fountainButton.position((width / 2) - 35, height + 75);
    eraseButton.position((width / 2) + 10, height + 75);

    resetButton.position((width / 2) - 100, 10);
    undoButton.position((width / 2) - 25, 10);
    saveButton.position((width / 2) + 50, 10);
    //undoButton.position(400, height - 30);
    resetButton.mouseClicked(resetSketch);
    saveButton.mouseClicked(saveSketch);

    sprayButton.mouseClicked(() => {
        noErase();
        type = 'spray';
        console.log("spray")
    })

    pencilButton.mouseClicked(() => {
        noErase();
        type = 'pencil';
        console.log("pencil")
    })

    fountainButton.mouseClicked(() => {
        noErase();
        type = 'fountain';
        console.log("fountain")
    })

    markerButton.mouseClicked(() => {
        noErase();
        type = 'marker';
        console.log("marker")
    })

    eraseButton.mouseClicked(() => {
        toggleErase(brushWidth);
        console.log('eraser');
    })

    undoButton.mouseClicked(() => {
        undoToPreviousState()
    })

}

function draw() {
    if (mouseIsPressed) {
        let color = colorPicker.value();
        stroke(color);

        if (type == 'marker') {
            marker(color, brushWidth.value());
        } else if (type == 'spray') {
            sprayPaint(`${color}50`, brushWidth.value())
        } else if (type == 'fountain') {
            fountainPen(color, brushWidth.value());
        } else {
            pen(color, brushWidth.value());
        }

    }

}

// save state by taking image of background
// for more info look at reference for get
function saveState() {
    previousState = get();
    images.push(previousState);
    console.log("images array", images);
}

/*
 * mousePressed():when input is detected on canvas save the state
 */
function mousePressed() {

    if (mouseX <= windowWidth && mouseX >= 0 && mouseY <= (windowHeight * .85) && mouseY >= 0) {
        saveState();
        console.log("state has been saved")
        clicks += 1;
        console.log("clicks: ", clicks);
    }
}

// clears out entire canvas
function resetSketch() {
    //clear(mouseX, mouseY, brushWidth.value());
    clear();
}

// save canvas as a png to phone
function saveSketch() {
    saveCanvas(canvas, "sketch", "png");
}

/*
 * undoToPreviousState(): 
 */
function undoToPreviousState(clicks) {
    //console.log("previous state", previousState);
    // if previousState doesn't exist ie is null
    // return without doing anything
    if (!previousState) {
        return;
    }
    // else draw the background (in this case white)
    // and draw the previous state
    clear();

    //images array that has all the saved screens
    // display last image
    image(images[images.length - 1], 0, 0);
    //take off that image
    images.pop()

    previousState = image(prevImages[(prevImages.length - 1)], 0, 0);
    console.log("Clicks in undo", counter);

    console.log("previous state", previousState);

    if (images.length > 0) {
        prevImages.push(images[images.length - 1]);
        console.log("previous images", prevImages)
    }

}

/*
 * toggleErase():
 */
function toggleErase(brushWidth) {

    if (eraseEnable) {
        console.log("if", eraseEnable);
        noErase();

        eraseEnable = false;

    }
    console.log("else", eraseEnable);
    erase()
    eraseEnable = true;
}

///////////////////////////////////// BRUSH FUNCTIONS /////////////////////////////////////

// resource: https://library.superhi.com/posts/how-to-paint-with-code-creating-paintbrushes

///////////////////////////// ********  Pen brush *********** ////////////////////////////
function pen(color, sizeBrush) {
    stroke(color)
    strokeWeight(sizeBrush)

    //translate(pmouseX, pmouseY)
    //translate(winMouseX, winMouseY)
    //line(pwinMouseX, pwinMouseY, winMouseX, winMouseY) 
    line(pwinMouseX, pwinMouseY - 50, winMouseX, winMouseY - 50)
}

///////////////////////////// ******** Spray paint brush *********** ///////////////////////
function sprayPaint(color, sizeBrush) {
    // set the color and brush style
    stroke(color)
    strokeWeight(sizeBrush)

    // find the speed of the mouse movement
    const speed = abs(mouseX - pmouseX) + abs(mouseY - pmouseY)

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
        const lerpX = lerp(mouseX, pmouseX, i / lerps)
        const lerpY = lerp(mouseY, pmouseY, i / lerps)

        // draw a bunch of random points within a circle
        for (let j = 0; j < sprayDensity; j++) {

            // pick a random position within the circle
            const randX = random(-r, r)
            const randY = random(-1, 1) * sqrt(rSquared - randX * randX)

            // draw the random point
            point(lerpX + randX, lerpY + randY)
        }
    }
}

///////////////////////////// ******** Marker brush ***********  ////////////////////////
function marker(color, brushWidth) {
    fill(`${color}50`)
    noStroke()

    circle(mouseX, mouseY, brushWidth * 10)
}

///////////////////////////// ******** Fountain pen ***********  /////////////////////////
function fountainPen(color, brushSize) {
    // set the color and brush style
    stroke(color)
    strokeWeight(brushSize)
    const width = 1 * brushSize

    // set the number of times we lerp the line in the for loop
    const lerps = 16

    // repeat the slanted line with lerping
    for (let i = 0; i <= lerps - 1; i++) {

        // find the lerped x and y coordinates between the mouse points
        const x = lerp(mouseX, pmouseX, i / lerps)
        const y = lerp(mouseY, pmouseY, i / lerps)

        // draw a slanted line
        line(x - width, y - width, x + width, y + width)
    }
}
