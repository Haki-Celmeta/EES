import React from "react";
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