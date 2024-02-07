import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop All</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/process">Process</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Links;