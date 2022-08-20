import React from "react";
import "../../../styles/signup.css";

export default function Signup() {
    return(
        <div class="wrapper">
      <div class="ctr">
        <div class="ctr_icon">
          <i class="fa-solid fa-x fa-2x ctr_icon_my-icon"></i>
        </div>
        <h1 class="ctr_header">Welcome back</h1>
        <p class="ctr_para">Join us to savor good things in this life</p>
        <form method="post" class="ctr_form">
          <div class="ctr_form_text-field">
            <input class="ctr_form_text-field_input" type="text" />
            <label class="ctr_form_text-field_label">Full name</label>
          </div>
          <div class="ctr_form_text-field">
            <input class="ctr_form_text-field_input" type="text" autocomplete="off" />
            <label class="ctr_form_text-field_label">User name</label>
          </div>
          <div class="ctr_form_text-field">
            <input class="ctr_form_text-field_input" type="text" autocomplete="off" required />
            <label class="ctr_form_text-field_label">Email</label>
          </div>
          <div class="ctr_form_text-field">
            <input class="ctr_form_text-field_input" type="password" autocomplete="off" required />
            <label class="ctr_form_text-field_label">Password</label>
          </div>
          <div class="ctr_form_text-field">
            <input class="ctr_form_text-field_input" type="password" autocomplete="off" required />
            <label class="ctr_form_text-field_label">Confirm password</label>
          </div>
          <div class="ctr_desc">
            By signing up, you agree to Heifurdesz's <a class="ctr_link" href="#">Term of Use</a>
            and <a class="ctr_link" href="#">Privacy Policy</a>.
          </div>
          <div class="ctr_sign-up-btn">
            <input type="submit" value="Sign up" class="ctr_sign-up-btn_submit" />
            <i class="fa-solid fa-arrow-right-long fa-2x ctr_sign-up-btn_icon"></i>
          </div>
          <div class="ctr_signup-link">
            Already have an account? <a class="ctr_link" href="#"><u>Log in</u></a>
          </div>
        </form>
      </div>
    </div>
    // <script>
    //   document.querySelectorAll(".ctr_form_text-field_input").forEach((element) => {
    //     element.addEventListener("blur", (event) => {
    //         if (event.target.value != "") {
    //             event.target.nextElementSibling.classList.add("ctr_form_filled");
    //         } else {
    //             event.target.nextElementSibling.classList.remove("ctr_form_filled");
    //         }
    //     });
    // });
    // </script>
    )
}