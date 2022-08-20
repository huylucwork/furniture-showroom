import React from "react";
import "../../../styles/login.css";


export default function Login(props) {
  // return(
  return (props.trigger) ? (
    <div className="wrapper_body">
    <div className="wrapper">
      <div className="ctr">
        <div className="ctr_icon">
          <button className="ctr_close-btn" onClick={()=> props.setTrigger(false)}> <i className="fa-solid fa-x fa-2x ctr_icon_my-icon"></i></button>
        </div>
        <h1 className="ctr_header">Welcome back</h1>
        <p className="ctr_para">Join us to savor good things in this life</p>
        <form method="post" className="ctr_form">
          <div className="ctr_form_text-field">
            <input className="ctr_form_text-field_input" type="text" autocomplete="off" required />
            <label className="ctr_form_text-field_label">Email</label>
          </div>
          <div className="ctr_form_text-field">
            <input className="ctr_form_text-field_input" type="password" autocomplete="off" required />
            <label className="ctr_form_text-field_label">Password</label>
          </div>
          <div className="ctr_desc">
            <a className="ctr_link" href="#" style="float:right">Forgot Password?</a>
          </div>
          <div className="ctr_sign-up-btn">
            <button className="ctr_sign-up-btn_submit" type="submit" >Enjoy now !</button>
            <i className="fa-solid fa-arrow-right-long fa-2x ctr_sign-up-btn_icon"></i>
          </div>
          <div className="ctr_signup-link">
            New to Heifurdesz? <a className="ctr_link" href="#"><u>Sign up</u></a>
          </div>
        </form>
      </div>
      </div>
      </div>
    // <script type="text/javascript" >
    //   document.querySelectorAll(".ctr_form_text-field_input").forEach((element) => {
    //     element.addEventListener("blur", (event) => {
    //       if (event.target.value != "") {
    //         event.target.nextElementSibling.classList.add("ctr_form_filled");
    //       } else {
    //         event.target.nextElementSibling.classList.remove("ctr_form_filled");
    //       }
    //     });
    //   });
    // </script>
  ) : "";
  // )
}

