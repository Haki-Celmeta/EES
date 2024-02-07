import React from "react";
import { Link } from "react-router-dom";
import "./_hero-section.scss";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-container">
        <h1>Welcome to Eagle Eye Security</h1>
        <Link to="/shop">Shop Our Cameras</Link>
      </div>
    </div>
  )
}

export default HeroSection;