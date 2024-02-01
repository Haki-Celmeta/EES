import React from "react";
import UserInfo from "./navbarJavascripts/userInfo";
import Links from "./navbarJavascripts/links";
import "./_navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <UserInfo />
      <Links />
    </div>
  )
}

export default Navbar;