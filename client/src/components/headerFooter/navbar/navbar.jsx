import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../styles/navbar.css";
import "../../../styles/signup.css";
import "../../../styles/login.css";
import Login from "../../auth/login";
import Signup from "../../auth/signup";

export default function Navbar( {loggedIn, setLoggedIn} ) {
  const [buttonSignUp, setButtonSignUp] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    document
      .querySelectorAll(
        ".sign-up_form_text-field_input"
      )
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add(
              "sign-up_form_filled"
            );
          } else {
            event.target.nextElementSibling.classList.remove(
              "sign-up_form_filled"
            );
          }
        });
      });

    document
      .querySelectorAll(".login_form_text-field_input ")
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value !== "") {
            event.target.nextElementSibling.classList.add("login_form_filled");
          } else {
            event.target.nextElementSibling.classList.remove(
              "login_form_filled"
            );
          }
        });
      });
  });

  return (
    <div className="header">
      <div className="logo">
        <img
          src="../img/logo.png"
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
          <li className="navbar_list margin_nav" onClick={() => navigate("../product")}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">Product</div>
            </a>
          </li>
          <li className="navbar_list margin_nav" onClick={() => navigate("../about-us")}>
            <a className="navbar_a a_hover">
              <div className="hover-underline-animation">About us</div>
            </a>
          </li>
        </ul>

        <ul className="navbar_ul">
          <li className="navbar_list">
            <div className="navbar_a ">
              <button
                className="navbar_button_auth"
                onClick={() => setButtonLogin(true)}
              >
                <div className="hover-underline-animation">Login</div>
              </button>
              &nbsp;
              <div className="vr"></div> &thinsp;
              <button
                className="navbar_button_auth"
                onClick={() => setButtonSignUp(true)}
              >
                <div className=" hover-underline-animation">Sign up</div>
              </button>
            </div>
          </li>
        </ul>
      </div>
      {buttonLogin && <Login setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin} setLoggedIn={setLoggedIn}/>}
      {buttonSignUp && <Signup setButtonSignUp={setButtonSignUp} setButtonLogin={setButtonLogin}/>}
    </div>
  );
}
