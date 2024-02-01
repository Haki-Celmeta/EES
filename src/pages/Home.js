import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroSection from "../components/Hero-section/Hero-section";
import BestSelling from "../components/Best-selling/Best-selling";

const Home = () => {
  return (
    <div className="Homepage">
      <Navbar />
      <HeroSection />
      <BestSelling />
    </div>
  )
}

export default Home;