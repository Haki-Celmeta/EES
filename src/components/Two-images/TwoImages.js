import React from "react";
import bulletOutdoor from "../../assets/images/bullet-cctv-outdoor.jpg";
import bulletAlt from "../../assets/images/cctv_bullet_camera.png";
import domeOutdoor from "../../assets/images/dome-cctv-outdoor.png";
import domeAlt from "../../assets/images/dome_cctv_alternative.png";
import "./_twoImages.scss";
import { Link } from "react-router-dom";

const TwoImages = () => {
  return (
    <div className="images-contrast-container">
      <div className="bullet-cctv-container cctv-container">
        <div className="bullet-cctv-hover cctv-hover">
          <img id="bullet-camera" className="camera" src={bulletAlt} alt="bullet" />
          <div>
            <h3 className="bullet-hover">Bullet CCTV</h3>
            <h4 className="bullet-hover">108900.00 ALL</h4>
            <Link id="bullet-hover-link" to="/shop">View Details</Link>
          </div>
        </div>
        <img src={bulletOutdoor} alt="bullet outdoor" />
      </div>
      <div className="dome-cctv-container cctv-container">
        <img id="dome-outdoor" src={domeOutdoor} alt="dome outdoor" />
        <div className="dome-cctv-hover cctv-hover">
          <img id="dome-camera" className="camera" src={domeAlt} alt="dome" />
          <div>
            <h3 className="dome-hover">Dome CCTV</h3>
            <h4 className="dome-hover">108900.00 ALL</h4>
            <Link id="dome-hover-link" to="/shop">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TwoImages;