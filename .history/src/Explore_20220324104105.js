import React, {useRef} from 'react';
import "./App.css";
import BottomNav from './BottomNav';

const Explore = () => {
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
  
    // const gotoNext = () => {
    //   sliderRef.current.slickNext();
    // }
  
    // const gotoPrev = () => {
    //   sliderRef.current.slickPrev();
    // }

    //https://www.youtube.com/watch?v=oCMwPNKbuag




    // <div className="main__header">
    // <Navbar />
    // </div>
    return (
      <>
        <div className="explore-page">
            <h1 id="gallery-header">ArtTag</h1>
            <Slider {...settings } ref={sliderRef} className="slider-div">
              {slidesData.map((slide) =>
  
                <div className="container"key={slide.id}>

                  <img className="carousel-img" src={`${slide.image}`} />
                  <div className="text-block">

                    <label className="location-name">{slide.label}</label>
                    <Link to="/mapbox"><button className="navigate-button"><img src={`${navigate}`} alt="navigateButton"/></button></Link>
                  </div>
                </div>
  
              )}
            </Slider>
            <p className="location-heading">Location</p>

          <BottomNav></BottomNav>
        </div>
      </>
    );
}
 
export default Explore;

{/* <div className="location">
<p className="location-heading">Location</p>
<label className="location-name">{slide.label}</label>
</div> */}