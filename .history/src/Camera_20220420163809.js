import React, { Fragment, useRef } from 'react';
import ReactDOM from 'react-dom';
import { Camera } from 'react-cam';
import './App.css';

// function capture(imgSrc) {
//   console.log(imgSrc);
// }

//width="window.innerWidth"
//height="window.innerHeight"
const CameraPage = () => {
  return(
    <div >
      <label>
        <input 
          style={{display: 'none'}} 
          type='file' 
          accept="image/*"
          capture="environment"
          onChange={this.handleImageChange}
        />
      </label>
    </div>  
  );
}

export default CameraPage;

// const CameraPage = () => {
//   const cam = useRef(null);
//   return (
//     <Fragment>
//       <Camera
//         showFocus={true}
//         front={true}
//         capture={capture}
//         ref={cam}
//         width="100%"
//         height="100%"
//         focusWidth="80%"
//         focusHeight="60%"
//         btnColor="white"
//         objectFit="cover"
//       />
//       {/* <button onClick={img => cam.current.capture(img)}>Take image</button> */}
//     </Fragment>
//   );
// };
// ReactDOM.render(<CameraPage />, document.getElementById('root'));

// export default CameraPage;