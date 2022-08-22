import React from "react";
import "../../../styles/login.css";

export default function Login(props) {
  return props.trigger ? (
    <div className="login_container">
      <div className="login_wrapper">
        <div className="login_ctr">
          <div className="login_icon">
            <button
              className="login_close-btn"
              onClick={() => props.setTrigger(false)}
            >
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <h1 className="login_header">Welcome back</h1>
          <p className="login_para">
            Join us to savor good things in this life
          </p>
          <form method="post" className="login_form">
            <div className="login_form_text-field">
              <input
                className="login_form_text-field_input"
                type="text"
                autocomplete="off"
                required
              />
              <label className="login_form_text-field_label">Email</label>
            </div>
            <div className="login_form_text-field">
              <input
                className="login_form_text-field_input"
                type="password"
                autocomplete="off"
                required
              />
              <label className="login_form_text-field_label">Password</label>
            </div>
            <div className="login_desc">
              <a className="login_link" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="login_sign-up-btn">
              <button className="login_sign-up-btn_submit" type="submit">
                Enjoy now !
              </button>
              <i className="fa-solid fa-arrow-right-long fa-2x login_sign-up-btn_icon"></i>
            </div>
          </form>
            <div className="login_signup-link">
              New to Heifurdesz?{" "}
              <a className="login_link" href="#">
                <u>Sign up</u>
              </a>
            </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
