import React, { useState, useEffect } from "react";
import "../../styles/navbar.css";

export default function Navbar() {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => window.removeEventListener("scroll", stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass("sticky-nav") : setStickyClass("");
    }
  };

  return (
    <div className={`navbar ${stickyClass}`}>
      {" "}
          <div className="navbar_text">
        <div className="leftNav">Logo</div>
        <div className="rightNav">Navbar</div>
      </div>
    </div>
  );
}
