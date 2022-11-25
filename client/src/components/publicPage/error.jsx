import React from "react";
import "../../styles/error.css"

export default function Error () {

  return (
      <div className="error_ctn">
        <h1>Oops</h1>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      </div>
  )
}