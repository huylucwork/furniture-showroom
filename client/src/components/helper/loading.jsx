import React from "react";
import "../../styles/loading.css"

export default function Loading () {

  return (
    <div class="loading_container">
        {/* <div class="bar"></div> */}
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}