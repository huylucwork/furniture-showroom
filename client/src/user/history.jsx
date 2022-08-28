import { useEffect } from "react";
import React from "react";
import "../styles/history.css";

export default function History() {
  return(
    <div className="history_container">
      <div className="history_sidebar">
        <div className="history_sidebar_container">
          <button className="history_user-profile" type="button">
            User Profile
          </button>
          <i className="fa-solid fa-user history_user-icon-profile"></i>
        </div>
        <div className="history_sidebar_container">
          <button className="history_user-history" type="button" onclick="myFunction()" id="myDIV">
            History
          </button>
          <i className="fa-solid fa-clock-rotate-left history_user-icon-history"></i>
        </div>
      </div>
      <div className="history_content">
        <div className="history_search-container">
          <input className="history_search" type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass history_search-icon"></i>       
        </div>
        <div className="history_table"></div>
      </div>
    </div>
  )
}