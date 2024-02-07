import React from "react";
import firstPicture from "../../assets/images/man-standing-in-road.jpg";
import secondPicture from "../../assets/images/five-construction-workers-on-break.jpg";
import "./_about-us.scss";

const AboutUs = () => {
  return (
    <div className="about-us-information">
      <h1>About Us</h1>
      <div className="about-us-information-container">
        <div className="first-aboutus-part aboutus-part">
          <img src={firstPicture} alt="man standing in road" />
          <div className="first-aboutus-part-info part-info">
            <h2>About Eagle Eye Security</h2>
            <div className="w-8 h-1 bg-black"></div>
            <p className="about-us-paragraph">
              Eagle Eye Security is a leading provider of high-quality security cameras and switches.
              Our wide selection of products ensures that our customers can find the perfect solution to fit their needs.
              We pride ourselves on offering competitive prices and exceptional customer service.
              Click here to browse our selection and see the total cost of your order when you add items to your cart.
            </p>
          </div>
        </div>
        <div className="second-aboutus-part aboutus-part">
          <img src={secondPicture} alt="construction workers on break" />
          <div className="second-aboutus-part-info part-info">
            <h2>Our Team</h2>
            <div className="w-8 h-1 bg-black"></div>
            <p className="our-team-paragraph">
              At Eagle Eye Security, we have a team of experienced and knowledgeable professionals
              who are dedicated to helping our customers find the best security solutions.
              Whether you have questions about our products or need assistance with your order,
              our team is here to help. Click here to get in touch with us.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;