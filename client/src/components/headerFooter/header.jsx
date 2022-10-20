import React, { useState} from "react";
import Navbar from "./navbar/navbar";
import NavbarLogin from "./navbar/navbarLogin";

export default function Header() {
    const [loggedIn, setButtonLoggedIn] = useState(true);
    return (
      <React.Fragment>
        {loggedIn ? (
          <NavbarLogin loggedIn={loggedIn} setLoggedIn={setButtonLoggedIn} />
        ) : (
          <Navbar loggedIn={loggedIn} setLoggedIn={setButtonLoggedIn}/>
        )}
      </React.Fragment>
    );
}