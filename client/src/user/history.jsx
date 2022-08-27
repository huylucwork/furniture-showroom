import React from "react";
import "../styles/history.css";

export default function History() {
    return(
      <div className="history_container">
        <div className="history_navbar"></div>
        <div className="history_sidebar">
          <div className="history_sidebar_container">
            <button className="history_user-profile" type="button">
              User Profile
            </button>
            <i class="fa-solid fa-user history_user-icon-profile"></i>
          </div>
          <div className="history_sidebar_container">
            <button className="history_user-history" type="button">
              History
            </button>
            {/* <i class="fa-thin fa-grid-2-plus history_user-icon-history"></i> */}
            <i class="fa-thin fa-closed-captioning history_user-icon-history"></i>
            {/* <i class="fa-thin fa-grid-2 history_user-icon-history"></i> */}
          </div>
        </div>
      </div>
    )
}