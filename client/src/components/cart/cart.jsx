import React, { useState } from "react";
import "../../styles/cart.css";

export default function Cart(props) {
  const [counter, setCounter] = useState(0);
  const addCountHandler = () => {
    setCounter(counter + 1);
  };

  const removeCountHandler = () => {
    if (counter === 0) {
      return;
    }
    setCounter(counter - 1);
  };

  return props.trigger ? (
    <div className="cart_container">
      <div
        className="modoal_close"
        onClick={() => props.setTrigger(false)}
      ></div>
      <div className="cart_wrapper">
        <div className="cart_ctr">
          <h1 className="cart_header">Your Cart</h1>
          <div className="cart_item_list">
            <div className="cart_detail_item-info">
              <div className="cart_detail_item-img"></div>
              <div className="cart_detail_item_name-cat">
                <p className="cart_detail_item-name">Chaise Sectional Sofa</p>
                <p className="cart_detail_item-cat">Pearl Spring</p>
                <p className="cart_detail_item-cat cart_detail_item-price">
                  $123
                </p>
              </div>
              <p className="cart_detail_amount">
                <button className="counter_button" onClick={removeCountHandler}>
                  -
                </button>
                <div className="item_counter"> {counter}</div>
                <button className="counter_button" onClick={addCountHandler}>
                  +
                </button>
              </p>
            </div>
          </div>

          <div className="cart_footer">
            <p class="cart_footer_align-left">Total:</p>
            <p class="cart_footer_align-right"> $123</p>
          </div>
          <div className="cart_btn_container ">
            <button className="cart_btn" type="submit">
              <p>Checkout</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                color="#fff"
                className="cart-btn_icon"
                style={{ width: "55px", height: "55px" }}
              >
                <path
                  fillRule="evenodd"
                  d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}
