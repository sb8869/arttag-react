import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import './App.css';

function capture(imgSrc) {
  console.log(imgSrc);
}

const CameraPage = () => {
  const cam = useRef(null);
  return (
    <Fragment>
      <Camera
        showFocus={true}
        front={true}
        capture={capture}
        ref={cam}
        width="window.innerWidth"
        height="window.innerHeight"
        focusWidth="window.innerWidth"
        focusHeight="window.innerWidth"
        btnColor="white"
        objectFit="cover"
      />
      {/* <button onClick={img => cam.current.capture(img)}>Take image</button> */}
    </Fragment>
  );
};
ReactDOM.render(<CameraPage />, document.getElementById('root'));

export default CameraPage;