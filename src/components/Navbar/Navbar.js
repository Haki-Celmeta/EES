import React, { useState, useEffect } from "react";
import UserInfo from "./navbarJavascripts/userInfo";
import Links from "./navbarJavascripts/links";
import { Link, useLocation } from "react-router-dom";
import searchIcon from "../../assets/images/search.svg";
import burgerMenu from "../../assets/images/burger-menu.svg";
import closeIcon from "../../assets/images/close-icon.svg";
import "./_navbar.scss";

const Navbar = () => {
  const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)

  const [isNavOpen, setIsNavOpen] = useState(false);

  const location = useLocation();

  function handleClick() {
    setIsNavOpen(!isNavOpen);
  }

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.scrollY;

      setVisible(position > moving);
      setPosition(moving)
    };
    window.addEventListener("scroll", handleScroll);
    return (() => {
      window.removeEventListener("scroll", handleScroll);
    })
  })

  const cls = visible ? "visible" : "hidden";

  return (
    <div className={cls} id="navbar-container">
      <UserInfo />
      <Links />
      <div className="mobile-navbar" style={{ display: isNavOpen ? "flex" : "none" }}>
        <img id="close-button" src={closeIcon} alt="close button" aria-label="close button" onClick={handleClick} />
        <div className="search-bar-container">
          <img src={searchIcon} alt="search icon" />
          <input type="text" id="search-bar" name="search-bar" placeholder="Search..." />
        </div>
        <nav>
          <ul>
            <li><Link to="/" className={location.pathname === "/" ? "active-link" : "nav-link"}>Home</Link></li>
            <li><Link to="/shop" className={location.pathname === "/shop" ? "active-link" : "nav-link"}>Shop All</Link></li>
            <li><Link to="/about" className={location.pathname === "/about" ? "active-link" : "nav-link"}>About Us</Link></li>
            <li><Link to="/process" className={location.pathname === "/process" ? "active-link" : "nav-link"}>Process</Link></li>
            <li><Link to="/contact" className={location.pathname === "/contact" ? "active-link" : "nav-link"}>Contact</Link></li>
          </ul>
        </nav>
      </div>
      <div className="hamburger-menu-container" onClick={handleClick}>
        <div className="cart-container">
          <span>Cart (0)</span>
        </div>
        <img id="hamburger-menu" src={burgerMenu} alt="hamburger menu" />
      </div>
    </div>
  )
}

export default Navbar;
