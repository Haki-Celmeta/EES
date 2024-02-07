import React from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/About-us/About-us";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const About = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      <AboutUs />
      <Footer />
      <Copyright />
    </div>
  )
}

export default About;