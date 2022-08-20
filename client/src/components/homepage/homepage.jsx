import React from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";
import { useState, useEffect } from "react";

export default function Homepage() {
  const [buttonLogin, setButtonLogin] = useState(false);
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
