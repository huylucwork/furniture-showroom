import React, { useEffect } from "react";
import Login from "./auth/login";
import Signup from "./auth/signup";

export default function Homepage() {
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
    return(
        <div>
            <Login />
            <Signup />
        </div>
    )
}