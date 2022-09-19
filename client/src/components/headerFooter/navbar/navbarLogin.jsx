
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../../cart/cart";
import "../../../styles/navbar.css";

export default function NavbarLogin() {
  const [buttonCart, setButtonCart] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="header">
      <div className="logo">
        <img
          src="./img/logo.png"
          alt="logo"
          className="logo_img"
          onClick={() => navigate("../")}
        />
      </div>

      <div className="navbar">

        <ul className="navbar_ul">
          <li className="navbar_list" onClick={() => navigate("../")}>
            <a href="#collection" className="navbar_a a_hover" >
              <div className="hover-underline-animation">Collection</div>
            </a>
          </li>
          <li className="navbar_list margin_nav" onClick={() => navigate("../")}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">Product</div>
            </a>
          </li>
          <li className="navbar_list margin_nav" onClick={() => navigate("../")}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">About us</div>
            </a>
          </li>
        </ul>

        <ul className="navbar_ul">
          <li className="navbar_list">
            <div className="navbar_a  right_nav">
              <label className="nav_search">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={0.5}
                  stroke="currentColor"
                  className="w-6 h-6 nav-btn"
                  color="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                  />
                </svg>
                <input
                  type="text"
                  className=""
                  name=""
                  placeholder="Type to search . . . "
                />
              </label>
            </div>
            <div className="navbar_a right_nav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6 nav-btn icon-hover"
                color="black"
                onClick={() => setButtonCart(!buttonCart)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                />
              </svg>
            </div>
            <div className="navbar_a right_nav">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="w-6 h-6 nav-btn icon-hover"
                color="black"
                onClick={() => navigate("../user")}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
      <Cart trigger={buttonCart} setTrigger={setButtonCart}></Cart>
    </div>
  );
}
