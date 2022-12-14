import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "../../styles/login.css";
import "../../styles/signup.css";

export default function Login( { 
  setButtonSignUp, setButtonLogin, setLoggedIn, setAlert, setOpenAlert
} ) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoggin = (e) => {
    e.preventDefault();

    var sha1 = require('sha1');

    Axios.post("https://hifurdez.vercel.app/auth/sign-in",{
      email: email,
      password: "40bd001563085fc35165329ea1ff5c5ecbdbbeef",
    })
      .then((response)=>{
        console.log(response);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="login_container">
      <div
        className="login_modal_close"
        onClick={() => setButtonLogin(false)}
      ></div>
      <div className="login_wrapper">
        <div className="login_ctr">
          <div className="login_icon">
            <button
              className="login_close-btn"
              onClick={() => setButtonLogin(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="3 3 16 16"
                fill="currentColor"
                className=""
                color="#d1b7a1"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <h1 className="login_header">Welcome back</h1>
          <p className="login_para">
            Join us to savor good things in this life
          </p>
          <form method="post" className="login_form" onSubmit={(e)=>handleLoggin(e)}>
            <div className="login_form_text-field">
              <input
                className="login_form_text-field_input"
                type="email"
                autocomplete="off"
                required
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label className="login_form_text-field_label">Email</label>
            </div>
            <div className="login_form_text-field">
              <input
                className="login_form_text-field_input"
                type="password"
                autocomplete="off"
                required
                onChange={(e)=>setPassword(e.target.value)}
              />
              <label className="login_form_text-field_label">Password</label>
            </div>
            <div className="login_desc">
              <a className="login_link" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="login_sign-up_div">
              <button className="login_sign-up-btn" type="submit" >
                <p>Enjoy now !</p>
                {/* <i className="fa-solid fa-arrow-right-long fa-2x login_sign-up-btn_icon"></i> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  // className="w-6 h-6"
                  strokeWidth={0.1}
                  color="#fff"
                  className="login_sign-up-btn_icon"
                  style={{ width: "60px", height: "50px" }}
                >
                  <path
                    fillRule="evenodd"
                    d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div className="login_signup-link">
            New to Hifurdez? &thinsp;
            <span className="login_link" 
                  onClick={()=>{
                    setButtonSignUp(true);
                    setButtonLogin(false);
                  }}
            >
              <u>Sign up</u>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
