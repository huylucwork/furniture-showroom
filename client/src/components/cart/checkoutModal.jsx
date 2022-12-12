import React from "react";
import "../../styles/checkout.css";

export default function CheckoutModal( {setModal, handlePayUp} ) {

  return (
    <div className="checkout-modal_ctn">
      <div className="checkout-modal_wrapper">
        <div className="checkout-modal_ctr">
          <div className="sign-up_icon">
            <button
              className="login_close-btn"
              onClick={() => setModal(false)}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="1em" 
                height="1em" 
                preserveAspectRatio="xMidYMid meet" 
                viewBox="0 0 32 32" 
                className="sign-up_my-icon">
                  <path 
                    fill="none" 
                    stroke="currentColor" 
                    stroke-linecap="round" 
                    stroke-linejoin="round" 
                    stroke-width="2" 
                    d="M2 30L30 2m0 28L2 2"/>
              </svg>            
            </button>
          </div>
          <div className="checkout-modal_content">
            <h2>Confirm Transaction</h2>
            <p>Are you sure you want to pay up this order?</p>
          </div>
          <button className="checkout-modal_ok-btn" onClick={() => handlePayUp()}>Yes</button>
          <button className="checkout-modal_cancel-btn" onClick={() => setModal(false)}>No</button>
        </div>
      </div>
    </div>
  );
}