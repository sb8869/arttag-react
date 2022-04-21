
import './App.css';
import './file.css';
import logo from './media/logo.png';

function Landing() {
  setTimeout(function () {
    window.location.href= 'https://art-tag.herokuapp.com/#/explore'; // the redirect goes here
 
 },5000);
  return (
      <div className="landing-page">
          <div className='zoom-in-zoom-out'>
            <img src={`${logo}`} alt="ArtTag logo" className="center"></img>
            <h1 id="art-tag">
              ArtTag
            </h1>
          </div>

      </div>
  );
}

export default Landing;