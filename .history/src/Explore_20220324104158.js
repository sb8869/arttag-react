import React, {useRef} from 'react';
import "./App.css";
import BottomNav from './BottomNav';

const Explore = () => {
    return (
      <>
        <div className="explore-page">
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