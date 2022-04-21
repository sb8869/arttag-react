import Explore from './Explore';
import Gallery from './Gallery';
import Landing from './Landing.js'
import Draw from './Draw';
import Mapbox from './MapBox';
import Carousel from './components/Carousel';
import DrawingApp from './DrawingApp';
import Scan from './QR'
import Placing from './QRTwo'
import './App.css';

import{BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import { useNavigate } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Landing/>
              </Route>
              <Route path="/explore">
                <Explore/>
              </Route>
              <Route path="/gallery">
                <Gallery/>
              </Route>
              <Route path="/draw">
                <Draw/>
              </Route>
              <Route path="/mapbox">
               <Mapbox />
              </Route>
              <Route exact path="/carousel">
                <Carousel/>
              </Route>
              <Route path="/drawingApp">
                <DrawingApp/>
              </Route>
              <Route path="/scan">
                <Scan/>
              </Route>
              <Route path="/place">
                <Placing/>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
