import React, {useRef} from 'react';
import Slider from 'react-slick';
import "bootstrap/dist/css/bootstrap.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import SAU from '../media/sauBGScreen.png'
import gordon from '../media/gordonBGScreen.png'
import george from '../media/eastmanBGScreen.png'
import booth from '../media/boothBGScreen.png'
import gannet from '../media/gannettBGScreen.png'
import navigate from '../media/navigate.png'
import {Link} from 'react-router-dom';

const Carousel = () => {
    const sliderRef = useRef();

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows: true,
      slidesToScroll: 1,
      className: "slides"
    };
  
    const slidesData = [
      {
        id: 1,
        image: SAU,
        label: "Student Alumni Union"
      }, {
        id: 2,
        image: gordon,
        label: "Gordon Field House"
      }, {
        id: 3,
        image: george,
        label:"George Eastman Building"
      }, {
        id: 4,
        image: booth,
        label: "James E. Booth Hall",
      },
       {
        id: 5,
        image: gannet,
        label: "Frank E. Gannett Hall",
       }
    ];
    return (
      <>
        <div className="carousel-component">
            <h1 id="gallery-header">ArtTag</h1>
            <Slider {...settings } ref={sliderRef} className="slider-div">
              {slidesData.map((slide) =>
  
                <div className="container"key={slide.id}>

                  <img className="carousel-img" src={`${slide.image}`} />
                  <div className="text-block">

                    <label className="location-name" id={`${slide.label}`}>{slide.label}</label>
                  </div>
                  <Link to="/mapbox"><button className="navigate-button"><img id="navButton" src={`${navigate}`} alt="navigateButton"/></button></Link>

                </div>
  
              )}
            </Slider>
            <p className="location-heading">Location</p>
        </div>
      </>
    );
}
 
export default Carousel;