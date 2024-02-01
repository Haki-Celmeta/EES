import React from "react";
import facebookLogo from "../../../assets/images/social-media/facebook-logo.svg";
import instagramLogo from "../../../assets/images/social-media/instagram-logo.svg";
import pinterestLogo from "../../../assets/images/social-media/pinterest-logo.svg";
import profile from "../../../assets/images/profile.svg";
import searchIcon from "../../../assets/images/search.svg";
import { Link } from "react-router-dom";

const UserInfo = () => {
  return (
    <div className="user-info">
      <div className="search-bar-container">
        <img src={searchIcon} alt="search icon" />
        <input type="text" id="search-bar" name="search-bar" placeholder="Search..." />
      </div>
      <h1 className="logo"><Link to="/">EES.</Link></h1>
      <div className="social-media-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" title="Facebook">
          <img src={facebookLogo} alt="Facebook icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" title="Instagram">
          <img src={instagramLogo} alt="Instagram icon" />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer" title="Pinterest">
          <img src={pinterestLogo} alt="Pinterest icon" />
        </a>
      </div>
      <div className="user-info-container">
        <div className="profile-menu">
          <img src={profile} alt="Profile" />
        </div>
        <div className="cart-container">
          <span>Cart (0)</span>
        </div>
      </div>
    </div>
  )
}

export default UserInfo;