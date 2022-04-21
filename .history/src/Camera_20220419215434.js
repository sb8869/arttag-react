import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import './App.css';

function capture(imgSrc) {
  console.log(imgSrc);
}

const Camera = () => {
  const cam = useRef(null);
  return (
    <Fragment>
      <Camera
        showFocus={true}
        front={true}
        capture={capture}
        ref={cam}
        width="100%"
        height="100vh"
        focusWidth="80%"
        focusHeight="60%"
        btnColor="white"
        objectFit="cover"
      />
      {/* <button onClick={img => cam.current.capture(img)}>Take image</button> */}
    </Fragment>
  );
};
ReactDOM.render(<App />, document.getElementById('root'));

export default Camera;