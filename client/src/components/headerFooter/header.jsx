import React, { useState, useEffect } from "react";
import Navbar from "./navbar/navbar";
import NavbarLogin from "./navbar/navbarLogin";
import { useLocation } from 'react-router-dom';

export default function Header() {
  const [loggedIn, setButtonLoggedIn] = useState(false);

  const [headerNav, setHeaderNav] = useState("header_ctn");

  var tmp = 1;

  const aboutUsRoute = useLocation();

  function autoScroll() {
    var timer = null;

    if(timer !== null) {
      clearTimeout(timer);        
    }
    timer = setTimeout(function() {
      if(tmp){
        setHeaderNav("header_ctn header_scroll");
      }
    }, 2000);
  }

  useEffect(() => {

    // if page is not aboutUs, do nothing

    if(aboutUsRoute.pathname !== "/about-us"){
      setHeaderNav("header_ctn");
      return;
    }

    // always scroll navbar

    autoScroll();

    // hide or show when scroll

    var prevScrollpos = window.pageYOffset;

    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        setHeaderNav("header_ctn");
      } else {
        setTimeout(function() {
          setHeaderNav("header_ctn header_scroll");
        }, 100);
      }
      prevScrollpos = currentScrollPos;
    }
  });

  return (
    <div className={headerNav}>
      {loggedIn ? (
        <NavbarLogin loggedIn={loggedIn} setLoggedIn={setButtonLoggedIn} setHeaderNav={setHeaderNav}/>
      ) : (
        <Navbar loggedIn={loggedIn} setLoggedIn={setButtonLoggedIn} setHeaderNav={setHeaderNav}/>
      )}
    </div>
  );
}