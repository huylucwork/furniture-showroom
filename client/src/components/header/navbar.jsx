import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";
import Login from "../homepage/auth/login";
import Signup from "../homepage/auth/signup";
import "../../styles/signup.css";
import "../../styles/login.css";

export default function Navbar() {
  const [buttonSignUp, setButtonSignUp] = useState(false);
  const [buttonLogin, setButtonLogin] = useState(false);
  useEffect(() => {
    document
      .querySelectorAll(
        ".sign-up_form_text-field_input,.login_form_text-field_input "
      )
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value != "") {
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
    // document
    //   .querySelectorAll(".login_form_text-field_input")
    //   .forEach((element) => {
    //     element.addEventListener("blur", (event) => {
    //       if (event.target.value != "") {
    //         event.target.nextElementSibling.classList.add("login_form_filled");
    //       } else {
    //         event.target.nextElementSibling.classList.remove(
    //           "login_form_filled"
    //         );
    //       }
    //     });
    //   });
  });

  return (
    <div className="navbar">
      <ul className="navbar_ul">
        <li className="navbar_list">
          <div className="logo">
            <a href="#home" className="navbar_a">
              Logo
            </a>
          </div>
        </li>
        <li className="navbar_list">
          <a href="#Collection" className="navbar_a">
            <div className="hover-underline-animation">Collection</div>
          </a>
        </li>
        <li className="navbar_list">
          <a href="#Product" className="navbar_a">
            <div className="hover-underline-animation">Product</div>
          </a>
        </li>
        <li className="navbar_list">
          <a href="#about" className="navbar_a">
            <div className="hover-underline-animation">About us</div>
          </a>
        </li>
      </ul>
      <ul class="navbar_ul">
        <li class="navbar_list">
          <a className="navbar_a">
            <button
              className="buttonForSignup"
              onClick={() => setButtonLogin(true)}
            >
              <div className=" hover-underline-animation">Login</div>
            </button>
            <Login trigger={buttonLogin} setTrigger={setButtonLogin}></Login>
            <button
              className="buttonForSignup"
              onClick={() => setButtonSignUp(true)}
            >
              <div className=" hover-underline-animation">Sign Up</div>
            </button>
            <Signup
              trigger={buttonSignUp}
              setTrigger={setButtonSignUp}
            ></Signup>
          </a>
        </li>
    
      </ul>
    </div>
  );
}
