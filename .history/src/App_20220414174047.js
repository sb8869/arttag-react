import Explore from './Explore';
import Gallery from './Gallery';
import Landing from './Landing.js'

import Carousel from './components/Carousel';

import Test from './P5Test'

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
              <Route exact path="/carousel">
                <Carousel/>
              </Route>
              <Route path="/test">
                <Test/>
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;
