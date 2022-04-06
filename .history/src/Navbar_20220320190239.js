import {Link} from 'react-router-dom';
import './App.css';

const Navbar = () => {

    return (

        <div className= "nav-content">
            <h1 id="open-heading">ArtTag</h1>
            <nav className="navbar">
                
                <div className="links">
                    <Link className="block" to="/explore" style={{ textDecoration: 'none', color: 'white'}} >Home</Link>
                    <Link className="block" to="/gallery" style={{ textDecoration: 'none', color: 'white'}} >Gallery</Link>
                </div>
            </nav>
        </div>
    );
}
 
export default Navbar;