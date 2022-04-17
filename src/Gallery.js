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
          <img src={sketch2} className="allImg"></img>
          <img src={sketch3} className="allImg"></img>
          <img src={sketch4} className="allImg"></img>
          <img src={sketch5} className="allImg"></img>
          <img src={sketch6} className="allImg"></img>
          <img src={sketch7} className="allImg"></img>
          <img src={sketch8} className="allImg"></img>
          <img src={sketch9} className="allImg"></img>
          <img src={sketch10} className="allImg"></img>
        </div>
      </div>
      <BottomNav></BottomNav>

      <div id="myModal" class="modal">
        <span class="close">&times;</span>
        <img class="modal-content" id="img01" />
      </div>
    </div>
  );
};

var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
//img.onclick = function(){
  //modal.style.display = "block";
  //modalImg.src = this.src;
  console.log("clicked here")
//}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
/* span.onclick = function() { 
  modal.style.display = "none";
} */

export default Gallery;
