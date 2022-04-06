import React, {useRef} from 'react';
import "./App.css";
import BottomNav from './BottomNav';

const Explore = () => {
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