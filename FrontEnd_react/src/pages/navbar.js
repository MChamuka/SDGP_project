import {useRef} from "react";
import {FaBars,FaTimes} from "react-icons/fa"
import "./navbar.css"
import { Link } from "react-router-dom";

function Navbar(){
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }
    return(
        <header>
        <h3>JetViaLens</h3>
        <nav ref={navRef}>
          <Link to="/">Search</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/locations">Locations</Link>
          {/* <Link to="/form">Submit</Link> */}
          <Link to="/signUp">Login</Link>
          <Link to="/jetsource">JetSource</Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>

    );
}

export default Navbar;