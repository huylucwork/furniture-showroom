import React from "react";
import Navbar from "./navbar/navbar";
import NavbarLogin from "./navbar/navbarLogin";

export default function Header() {
    return (
        <React.Fragment>
            <Navbar />
            {/* <NavbarLogin /> */}
        </React.Fragment>
    )
}