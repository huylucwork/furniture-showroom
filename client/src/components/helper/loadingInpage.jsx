import React from "react";
import "../../styles/loading.css"

export default function LoadingInpage () {

  return (
    <div class="loading_container">
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
    </div>
  )
}