import React from "react";
import "../styles/history.css";

export default function History() {
    return(
      <div className="history_container">
        <div className="history_navbar"></div>
        <div className="history_sidebar">
          <button className="history_user-profile" type="button">
            User Profile
          </button>
        </div>
      </div>
    )
}