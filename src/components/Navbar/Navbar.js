import React, { useState, useEffect } from "react";
import UserInfo from "./navbarJavascripts/userInfo";
import Links from "./navbarJavascripts/links";
import "./_navbar.scss";

const Navbar = () => {
  const [position, setPosition] = useState(window.scrollY)
  const [visible, setVisible] = useState(true)

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
    </div>
  )
}

export default Navbar;
