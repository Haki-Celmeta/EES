import React from "react";
import { Link } from "react-router-dom";

const SinglePart = ({ image, h3, link, linkWords }) => {
  return (
    <div className="single-card">
      <img src={image} alt="camera background" />
      <div className="words-container">
        <h3>{h3}</h3>
        <div className="w-8 h-1 bg-white"></div>
        <Link to={link}>{linkWords}</Link>
      </div>
    </div>
  )
}

export default SinglePart