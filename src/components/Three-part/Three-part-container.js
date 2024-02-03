import React from "react";
import image1 from "../../assets/images/image-1.png";
import image2 from "../../assets/images/image-2.png";
import image3 from "../../assets/images/image-3.png";
import SinglePart from "./Single-part";
import "./_three-part.scss";

const ThreePart = () => {
  return (
    <section className="three-part-container">
      <SinglePart image={image2} h3="Service 24/7" link="/" linkWords="See our advantages" />
      <SinglePart image={image1} h3="Who are we?" link="/" linkWords="About Us" />
      <SinglePart image={image3} h3="Installation" link="/" linkWords="See our process" />
    </section>
  )
}

export default ThreePart;