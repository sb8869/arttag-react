/* Import all sketches */
/* import sketch1 from './media/sketch.png'
import sketch2 from './media/sketch_7.png'
import sketch3 from './media/sketch_8.png' */
import sketch1 from "./media/sketch2.png";
import sketch2 from "./media/sketch1.png";
import sketch3 from "./media/sketch3.png";
import sketch4 from "./media/sketch4.png";
import sketch5 from "./media/sketch5.png";
import sketch6 from "./media/sketch6.png";
import sketch7 from "./media/sketch7.png";
import sketch8 from "./media/sketch8.png";
import sketch9 from "./media/sketch9.png";
import sketch10 from "./media/sketch10.png";

import "./Gallery.css";
import BottomNav from "./components/BottomNav";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <div className="gallery-content">
      <h1 className="gallery-header">ArtTag</h1>
      <div className="gallery" style={{ overflow: "scroll", height: "75vh" }}>
        <div className="photos">
          <img src={sketch1} id="myImg" className="allImg"></img>
          <img src={sketch2} id="myImg" className="allImg"></img>
          <img src={sketch3} id="myImg" className="allImg"></img>
          <img src={sketch4} id="myImg" className="allImg"></img>
          <img src={sketch5} id="myImg" className="allImg"></img>
          <img src={sketch6} id="myImg" className="allImg"></img>
          <img src={sketch7} id="myImg" className="allImg"></img>
          <img src={sketch8} id="myImg" className="allImg"></img>
          <img src={sketch9} id="myImg" className="allImg"></img>
          <img src={sketch10} id="myImg" className="allImg"></img>
        </div>
      </div>
      <BottomNav></BottomNav>

      <div id="myModal" className="modal">
        <span className="close">&times;</span>
        <img className="modal-content" id="img01" />
      </div>
    </div>
  );
};

// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('allImg');
// the image in the modal
var modalImg = document.getElementById("img01");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}


export default Gallery;
