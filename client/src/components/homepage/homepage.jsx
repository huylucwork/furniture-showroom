import React, { useEffect } from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [buttonLogin, setButtonLogin] = useState(false);

  useEffect(() => {
    document
      .querySelectorAll(".login_form_text-field_input")
      .forEach((element) => {
        element.addEventListener("blur", (event) => {
          if (event.target.value != "") {
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
    <div>
      <button
        className="login_sign-up-btn_submit"
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

