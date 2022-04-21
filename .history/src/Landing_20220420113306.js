
import './App.css';
import './file.css';
import logo from './media/logo.png';

function Landing() {
  setTimeout(function () {
    window.location.href= 'https://art-tag.herokuapp.com/#/explore'; // the redirect goes here
 
 },2000);
  return (
      <div className="landing-page">
          <img src={`${logo}`} alt="ArtTag logo" className="center"></img>
          <h1 id="art-tag">
            ArtTag
          </h1>
      </div>
  );
}

export default Landing;