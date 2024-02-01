import React from "react";
import { Link } from "react-router-dom";

const Links = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/shop">Shop All</Link></li>
        <li><Link to="/about">Our Story</Link></li>
        <li><Link to="/craft">Our Craft</Link></li>
        <li><Link to="/giftCard">Gift Card</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Links;