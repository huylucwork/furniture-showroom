import React from "react";
import "../../../styles/signup.css";

export default function Signup() {
    return(
      <div className="sign-up_container">
        <div className="sign-up_wrapper">
          <div className="sign-up_ctr">
            <div className="sign-up_icon">
              <i className="fa-solid fa-xmark sign-up_my-icon"></i>
            </div>
            <h1 className="sign-up_header">Welcome back</h1>
            <p className="sign-up_para">Join us to savor good things in this life.</p>
            <form method="post" className="sign-up_form">
              <div className="sign-up_form_text-field">
                <input 
                  className="sign-up_form_text-field_input" 
                  type="text" />
                <label className="sign-up_form_text-field_label">Full name</label>
              </div>
              <div className="sign-up_form_text-field">
                <input 
                  className="sign-up_form_text-field_input" 
                  type="text" 
                  autocomplete="off" />
                <label className="sign-up_form_text-field_label">User name</label>
              </div>
              <div className="sign-up_form_text-field">
                <input 
                  className="sign-up_form_text-field_input" 
                  type="text" 
                  autocomplete="off" 
                  required />
                <label className="sign-up_form_text-field_label">Email</label>
              </div>
              <div className="sign-up_form_text-field">
                <input 
                  className="sign-up_form_text-field_input" 
                  type="password" 
                  autocomplete="off" 
                  required />
                <label className="sign-up_form_text-field_label">Password</label>
              </div>
              <div className="sign-up_form_text-field">
                <input 
                  className="sign-up_form_text-field_input" 
                  type="password" 
                  autocomplete="off" 
                  required />
                <label className="sign-up_form_text-field_label">Confirm password</label>
              </div>
              <div className="sign-up_desc">
                By signing up, you agree to Heifurdesz's&thinsp;
                <a className="sign-up_link" href="#">Term of Use</a> 
                  &thinsp;and&thinsp;  
                <a className="sign-up_link" href="#">Privacy Policy</a>.
              </div>
              <div className="sign-up_btn">
                <button
                  type="submit" 
                  className="sign-up_btn_submit">
                  <p>Sign up</p>
                </button>
                <i className="fa-solid fa-arrow-right-long fa-2x sign-up_btn_icon"></i>
              </div>
              <div className="sign-up_signup-link">
                Already have an account?&thinsp;
                <a className="sign-up_link_login" href="#">Log in</a>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}