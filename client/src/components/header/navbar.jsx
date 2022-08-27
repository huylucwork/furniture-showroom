import React from "react";
import "../../styles/navbar.css";

export default function Navbar() {

  return (
    <div className="navbar_text">
      <ul className="navbar_ul">
        <li className="navbar_list">
          <a href="#home" className="navbar_a">
            Logo
          </a>
        </li>
        <li className="navbar_list">
          <a href="#Collection" className="navbar_a">
            Collection
          </a>
        </li>
        <li className="navbar_list">
          <a href="#Product" className="navbar_a">
            Product
          </a>
        </li>
        <li className="navbar_list">
          <a href="#about" className="navbar_a">
            About
          </a>
        </li>
      </ul>
    </div>
  );
}
