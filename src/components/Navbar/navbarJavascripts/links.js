import React from "react";
import { Link, useLocation } from "react-router-dom";

const Links = () => {
  const location = useLocation();

  return (
    <nav>
      <ul>
        <li><Link to="/" className={location.pathname === "/" ? "active-link" : "nav-link"}>Home</Link></li>
        <li><Link to="/shop" className={location.pathname === "/shop" ? "active-link" : "nav-link"}>Shop All</Link></li>
        <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : "nav-link"}>About Us</Link></li>
        <li><Link to="/process" className={location.pathname === "/process" ? "active-link" : "nav-link"}>Process</Link></li>
        <li><Link to="/contact" className={location.pathname === "/contact" ? "active-link" : "nav-link"}>Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Links;