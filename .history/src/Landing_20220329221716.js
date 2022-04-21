
import './App.css';
import './file.css';
import{Link} from 'react-router-dom';
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

{/* <a
className="App-link"
href="https://reactjs.org"
target="_blank"
rel="noopener noreferrer"
>
Learn React
</a> */}
{/* <img src={logo} className="App-logo" alt="logo" /> */}

{/* <button onClick={sayHello}>Default</button>; */}