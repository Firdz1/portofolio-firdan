// src/Header.js
import React from "react";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="app-header">
      <div className="logo">Welcome portofolio</div>
      <nav className="nav-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
