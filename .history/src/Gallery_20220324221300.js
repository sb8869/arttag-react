import sketch1 from './media/sketch.png'
import sketch2 from './media/sketch_7.png'
import sketch3 from './media/sketch_8.png'
import './App.css';
import BottomNav from './BottomNav';
import {Link} from 'react-router-dom';

const Gallery = () => {
    return (
        <div className="gallery-content">
            <h1 className="gallery-header">ArtTag</h1>
            <div className="gallery" style={{overflow: 'scroll', height: '70vh'}}>
                <div className="photos">
                    <img src={sketch1}></img>
                    <img src={sketch2}></img>
                    <img src={sketch3}></img>
                </div>
            </div>
            <BottomNav></BottomNav>
        </div>
    );
}
 
export default Gallery;