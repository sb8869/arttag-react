import './App.css';
import './file.css';
import logo from './media/logo.png';
import { Redirect } from "react-router-dom";
import { useState } from "react";

function Landing() {
  const [redirectNow, setRedirectNow] = useState(false);
  setTimeout(() => setRedirectNow(true), 3000);
  return redirectNow ? (
    <Redirect to="/explore" />
  ) : (
    <div className="landing-page" id='zoom-in-zoom-out'>
          <img src={`${logo}`} alt="ArtTag logo" className="center"></img>
          <h1 id="art-tag">
            ArtTag
          </h1>
      </div>
  );
}
  
export default Landing;