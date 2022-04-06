import './App.css';
import back from './media/back.png';
import { Link } from "react-router-dom";

const MapBox = () => {

    return (

        <div className="mapbox-content">
            <Link to="/explore" className="back-button"><button><img src={`${back}`} style= {{ width: '100%'}} alt="backButton"/></button></Link>
            <h1>Map box stuff</h1>
        </div>
    );
}
 
export default MapBox;