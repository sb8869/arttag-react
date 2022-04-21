
import './App.css';
import './file.css';
import logo from './media/logo.png';

function Landing() {
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