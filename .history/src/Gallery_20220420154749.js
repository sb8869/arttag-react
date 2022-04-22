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
import sketch11 from "./media/sketch11.png";
import sketch12 from "./media/sketch12.png";
import sketch13 from "./media/sketch13.png";
import sketch14 from "./media/sketch14.png";
import sketch15 from "./media/sketch15.png";
import sketch16 from "./media/sketch16.png";
import sketch17 from "./media/sketch17.png";
import sketch18 from "./media/sketch18.png";
import sketch19 from "./media/sketch19.png";
import sketch20 from "./media/sketch20.png";

import backButton from "./media/back.png";

import "./Gallery.css";
import BottomNav from "./components/BottomNav";
import { Link } from "react-router-dom";
import { render } from "@testing-library/react";
import React from "react";

class Gallery extends React.Component {
  state = {
    show: false,
  };

  showModal = (e) => {
    this.setState({
      show: !this.state.show,
    });
  };
  render() {
    return (
      <div className="gallery-content">
        <div class="header">
          <h1 className="gallery-header"><Link to="/explore"><img src={backButton} alt="backBtn" id="backButton"/></Link>ArtTag</h1>
        </div>

        <div className="gallery" style={{ overflow: "scroll", height: "60vh" }}>
          <div className="photos">
            <img
              src={sketch1}
              id="myImg"
              alt="img1"
              className="allImg"
              onClick={() => this.setState({ showModal: true })}
            ></img>
            <img src={sketch2} id="myImg" alt="img2" className="allImg"></img>
            <img src={sketch3} id="myImg" alt="img3" className="allImg"></img>
            <img src={sketch4} id="myImg" alt="img4" className="allImg"></img>
            <img src={sketch5} id="myImg" alt="img5" className="allImg"></img>
            <img src={sketch6} id="myImg" alt="img6" className="allImg"></img>
            <img src={sketch7} id="myImg" alt="img7" className="allImg"></img>
            <img src={sketch8} id="myImg" alt="img8" className="allImg"></img>
            <img src={sketch9} id="myImg" alt="img9" className="allImg"></img>
            <img src={sketch10} id="myImg" alt="img10" className="allImg"></img>
            <img src={sketch11} id="myImg" alt="img11" className="allImg"></img>
            <img src={sketch12} id="myImg" alt="img12" className="allImg"></img>
            <img src={sketch13} id="myImg" alt="img13" className="allImg"></img>
            <img src={sketch14} id="myImg" alt="img14" className="allImg"></img>
            <img src={sketch15} id="myImg" alt="img15" className="allImg"></img>
            <img src={sketch16} id="myImg" alt="img16" className="allImg"></img>
            <img src={sketch17} id="myImg" alt="img17" className="allImg"></img>
            <img src={sketch18} id="myImg" alt="img18" className="allImg"></img>
            <img src={sketch19} id="myImg" alt="img19" className="allImg"></img>
            <img src={sketch20} id="myImg" alt="img20" className="allImg"></img>
          </div>
        </div>
        <BottomNav></BottomNav>

        <div
          id="myModal"
          className="modal"
          onClose={this.showModal}
          show="false"
        >
          <span onClick={closeSpan}>
            {" "}
            <span className={"close"}>&times;</span>
          </span>

          <img className="modal-content" id="img01" />
        </div>
      </div>
    );
  }
}

window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  console.log("Reloaded:" + images.length);
});

// create references to the modal...
const modal = document.getElementById("myModal");
// to all images -- note I'm using a class!
const images = document.getElementsByClassName("allImg");
// the image in the modal
const modalImg = document.getElementById("img01");

console.log(images.length);
/* console.log("routed: " + imagesLength) */

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function (evt) {
    console.log(evt);
    modal.style.display = "block";
    modalImg.src = this.src;
  };
}

const closeSpan = () => {
  modal.style.display = "none";
};

//console.log(images.length);

/* var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
} */

/* let data=window.performance.getEntriesByType("navigation")[0].type;
console.log(data);
if(data === "reload"){
  Gallery()
}
 */

/* if (performance.navigation.type === performance.navigation.TYPE_RELOAD) {
  console.info( "This page is reloaded" );
} else {
  console.info( "This page is not reloaded");
} */

/* window.onload = () => {
  let reloading = sessionStorage.getItem("reloading");
  if (reloading) {
      sessionStorage.removeItem("reloading");
      Gallery()
      window.location.reload(false);
  }
} */

/* const handlePDF = () => {
  sessionStorage.setItem("reloading", "true");
  window.location.reload(false); 
}; */

export default Gallery;
