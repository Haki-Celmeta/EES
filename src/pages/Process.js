import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ProcessSteps from "../components/Process/Process-steps";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const Process = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="Process-container">
      <Navbar />
      <ProcessSteps />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Process