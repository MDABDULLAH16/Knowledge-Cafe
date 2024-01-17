import React from "react";
import "./Header.css";
import profile from "../../images/profile.png";
const Header = () => {
  return (
    <nav className="navbar">
      <h1>Knowledge Cafe</h1>
      <img src={profile} alt="" />
    </nav>
  );
};

export default Header;
