import React from 'react';
import "./App.css";
import BottomNav from './components/BottomNav';
import Carousel from './components/Carousel';
import tapBrowse from './media/taptoBrowse.gif'

const Explore = () => {
    return (
      <>
      {/* <div class="outer-1">
          <img src={tapBrowse} class="tapBrowse"></img> */}
          <div className="explore-page">
            <Carousel></Carousel>
            <BottomNav></BottomNav>
          </div>
      {/* </div> */}
        
      </>
    );
}
 
export default Explore;