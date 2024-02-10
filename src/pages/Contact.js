import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar";
import ContactUs from "../components/Contact/Contact-us";
import Footer from "../components/Footer/Footer";
import Copyright from "../components/Copyright/Copyright";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="contact-container">
      <Navbar />
      <ContactUs />
      <Footer />
      <Copyright />
    </div>
  )
}

export default Contact;