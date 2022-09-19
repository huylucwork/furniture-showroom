import React, { useState, useEffect } from "react";
import "../../../styles/navbar.css";
import "../../../styles/signup.css";
import "../../../styles/login.css";
import Login from "../../auth/login";
import Signup from "../../auth/signup";

export default function Navbar() {
  const [buttonSignUp, setButtonSignUp] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);
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
    <div className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_list  navbar_a logo">
          <a href="/" className="navbar_a">
            <img
              src="https://media.discordapp.net/attachments/583874434495021084/1016894854728519690/Ban_trinh_bay1_1.png?width=1202&height=676"
              alt=""
              className="logo_img"
            />
          </a>
        </li>
        <li className="navbar_list">
          <a href="/" className="navbar_a a_hover">
            <div className="hover-underline-animation">Collection</div>
          </a>
        </li>
        <li className="navbar_list margin_nav">
          <a href="/" className="navbar_a a_hover">
            <div className="hover-underline-animation">Product</div>
          </a>
        </li>
        <li className="navbar_list margin_nav">
          <a href="/" className="navbar_a a_hover">
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
            <Login trigger={buttonLogin} setTrigger={setButtonLogin}></Login>
            <Signup
              trigger={buttonSignUp}
              setTrigger={setButtonSignUp}
            ></Signup>
          </div>
        </li>
      </ul>
    </div>
  );
}
