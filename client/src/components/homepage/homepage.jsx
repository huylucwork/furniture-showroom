import React from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";

export default function Homepage() {
    return(
        <div>
            <Login />
            <Signup />
        </div>
    )
}