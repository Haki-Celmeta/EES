import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero-section/Hero-section";
import BestSelling from "../components/Best-selling/Best-selling";
import TwoImages from "../components/Two-images/TwoImages";
import ThreePart from "../components/Three-part/Three-part-container";
import FollowInstagram from "../components/Follow/Follow";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="Homepage">
      <Navbar />
      <HeroSection />
      <BestSelling />
      <TwoImages />
      <ThreePart />
      <FollowInstagram />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Home;