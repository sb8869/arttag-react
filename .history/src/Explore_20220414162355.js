import React from 'react';
import "./App.css";
import BottomNav from './components/BottomNav';
import Carousel from './components/Carousel';

const Explore = () => {
    return (
      <>
        <div className="explore-page">
          <Carousel></Carousel>
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