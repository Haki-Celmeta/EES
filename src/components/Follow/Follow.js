import React from "react";
import image1 from "../../assets/images/cctv-image.jpg";
import image2 from "../../assets/images/cctv-dvr.jpg";
import image3 from "../../assets/images/cctv-installation-services.jpg";
import image4 from "../../assets/images/CCTV-Repair.png";
import image5 from "../../assets/images/image-2.png";
import "./_follow.scss";

const FollowInstagram = () => {
  return (
    <section className="follow-instagram-section">
      <div className="first-part">
        <h2>Follow Eagle Eye Security On Instagram</h2>
        <a href="https://www.instagram.com">@EagleEyeSecurity</a>
      </div>
      <div className="second-part">
        <img src={image1} alt="camera" />
        <img src={image2} alt="camera" />
        <img src={image3} alt="camera" />
        <img src={image4} alt="camera" />
        <img src={image5} alt="camera" />
      </div>
      <div className="third-part">
        <div className="quality">
          <div className="w-8 h-1 bg-black"></div>
          <h3>Installation in 3 days</h3>
        </div>
        <div className="quality">
          <div className="w-8 h-1 bg-black"></div>
          <h3>12 month warranty</h3>
        </div>
        <div className="quality">
          <div className="w-8 h-1 bg-black"></div>
          <h3>Motinor 24/7</h3>
        </div>
      </div>
    </section>
  )
}

export default FollowInstagram