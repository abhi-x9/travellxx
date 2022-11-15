import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './MainHeader.css';

const MainHeader = () => {

  const [mobile, setMobile] = useState(false);
  
  return (
      
    <nav className="navbar">
        <h3 className="logo">
          TRAVELx
        </h3>
        <ul className={ mobile ? "nav-links-mobile" : "nav-link"}
          onClick={() => setMobile(false)}
        >
          
            <NavLink to="/" className="nav-list"><li>Home</li></NavLink>
            <NavLink to="/about" className="nav-list"><li>About</li></NavLink>
            <NavLink to="/contact" className="nav-list"><li>Contact</li></NavLink>
        </ul>
        <button className="mobile-menu-icon"
          onClick={() => setMobile(!mobile)}
        >
        {
          mobile ? <i className="fas fa-times"></i> 
          : <i className="fas fa-bars"></i>  
        }
        </button>
    </nav>
  )
}
export default MainHeader;
 