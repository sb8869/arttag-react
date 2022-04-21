
import './App.css';
import './file.css';
import logo from './media/logo.png';

// https://art-tag.herokuapp.com/#/explore
/*
function Landing() {
//   setTimeout(function () {
//     window.location.href= 'localhost3000:/explore'; // the redirect goes here
 
//  },2000);
  return (
      <div className="landing-page">
            <img src={`${logo}`} alt="ArtTag logo" className='center'></img>
            <h1 id="art-tag">
              ArtTag
            </h1>
      </div>
  );
}

export default Landing;
*/


function Landing() {
  //   setTimeout(function () {
  //     window.location.href= 'localhost3000:/explore'; // the redirect goes here
   
  //  },2000);
    return (
        <div className="landing-page">
            <div className='zoom-in-zoom-out'>
              <div className='center'>
              <img src={`${logo}`} alt="ArtTag logo"></img>
              </div>

              <div>
              <h1 id="art-tag" className='center'>
                ArtTag
              </h1>
              </div>
            </div>
  
        </div>
    );
  }
  
  export default Landing;
