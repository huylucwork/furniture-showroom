import React from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [buttonLogin, setButtonLogin] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".ctr_form_text-field_input").forEach((element) => {
      element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
          event.target.nextElementSibling.classList.add("ctr_form_filled");
        } else {
          event.target.nextElementSibling.classList.remove("ctr_form_filled");
        }
      });
    });
  });

  return (
    <div>
      <button
        className="ctr_sign-up-btn_submit"
        onClick={() => setButtonLogin(true)}
      >
        Login
      </button>
      <Login trigger={buttonLogin} setTrigger={setButtonLogin}></Login>
      {/* <Login/> */}
      <Signup />
    </div>
  );
}
