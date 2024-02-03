import React from "react";
import "./_footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="logo">EES.</div>
      <div className="page-links footer-child">
        <Link to="/shop">Shop All</Link>
        <Link to="/about">Our Story</Link>
        <Link to="/craft">Our Craft</Link>
        <Link to="/giftCard">Gift Card</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="other-things-container footer-child">
        <Link to="/">FAQ</Link>
        <Link to="/">Store Policy</Link>
        <Link to="/">Payment Methods</Link>
        <Link to="/">Installation</Link>
      </div>
      <div className="social-media footer-child">
        <a href="https://www.facebook.com">Facebook</a>
        <a href="https://www.instagram.com">Instagram</a>
        <a href="https://www.pinterest.com">Pinterest</a>
      </div>
      <div className="join-us-container footer-child">
        <h3>Join Us!</h3>
        <div className="input-email-container">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" />
        </div>
        <Link to="/joinConfirmation">Send</Link>
      </div>
    </footer>
  )
}

export default Footer;