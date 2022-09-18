import React from "react";
import "../../styles/signup.css";

export default function Signup(props) {
  return props.trigger ? (
    <div className="sign-up_container">
      <div className="sign-up_wrapper">
        <div className="sign-up_ctr">
          <div className="sign-up_icon">
            <button
              className="login_close-btn"
              onClick={() => props.setTrigger(false)}
            >
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" class="sign-up_my-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 30L30 2m0 28L2 2"/></svg>            
            </button>
          </div>
          <h1 className="sign-up_header">Welcome back</h1>
          <p className="sign-up_para">
            Join us to savor good things in this life.
          </p>
          <form method="post" className="sign-up_form">
            <div className="sign-up_form_text-field">
              <input 
                className="sign-up_form_text-field_input" 
                type="text"
                autocomplete="off"
                required 
              />
              <label className="sign-up_form_text-field_label">Full name</label>
            </div>
            <div className="sign-up_form_text-field">
              <input
                className="sign-up_form_text-field_input"
                type="text"
                autocomplete="off"
              />
              <label className="sign-up_form_text-field_label">User name</label>
            </div>
            <div className="sign-up_form_text-field">
              <input
                className="sign-up_form_text-field_input"
                type="text"
                autocomplete="off"
                required
              />
              <label className="sign-up_form_text-field_label">Email</label>
            </div>
            <div className="sign-up_form_text-field">
              <input
                className="sign-up_form_text-field_input"
                type="password"
                autocomplete="off"
                required
              />
              <label className="sign-up_form_text-field_label">Password</label>
            </div>
            <div className="sign-up_form_text-field">
              <input
                className="sign-up_form_text-field_input"
                type="password"
                autocomplete="off"
                required
              />
              <label className="sign-up_form_text-field_label">
                Confirm password
              </label>
            </div>
            <div className="sign-up_desc">
              By signing up, you agree to Heifurdesz's&thinsp;
              <a className="sign-up_link" href="#">
                Term of Use
              </a>
              &thinsp;and&thinsp;
              <a className="sign-up_link" href="#">
                Privacy Policy
              </a>
              .
            </div>
            <div className="sign-up_btn">
              <button type="submit" className="sign-up_btn_submit">
                <p>Sign up</p>
                <i className="fa-solid fa-arrow-right-long fa-2x sign-up_btn_icon"></i>
              </button>
            </div>
            <div className="sign-up_signup-link">
              Already have an account?&thinsp;
              <a className="sign-up_link_login" href="#">
                Log in
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
