import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import AboutUs from "../components/About-us/About-us";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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