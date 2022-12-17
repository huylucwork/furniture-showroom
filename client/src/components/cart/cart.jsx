import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Axios from "axios";
import "../../styles/cart.css";


function CartItem(item) {
  const [close,setClose] = useState(false);
  const [counter, setCounter] = useState(1);

  const addCountHandler = () => {
    setCounter(counter + 1);
    item.setTotalPrice(item.totalPrice+Number(item.price))
  };
  const removeCountHandler = () => {
    if (counter === 1) {
      return;
    }
    setCounter(counter - 1);
    item.setTotalPrice(item.totalPrice-Number(item.price))
  };

  const handleRemoveItem = () => {
    Axios.post("https://hifurdez.vercel.app/cart/update", {
      customer_id: item.customer,
      product_id: item.product
    })
      .then((response)=> {
        if (response.data.message === "Delete Successfully") {
          Axios.post("https://hifurdez.vercel.app/cart/get", {
              customer_id: item.customer
          })
              .then((res)=>{
                window.localStorage.setItem('cart', JSON.stringify(res.data['product-info']));
                window.localStorage.setItem('cart_total', JSON.stringify(res.data['total-price'][0]['product_price']));
                item.setAccountCart(res.data['product-info']);
                item.setAccountCartTotal(res.data['total-price'][0]['product_price']);
                setClose(true);
                item.setTotalPrice(item.price)
              })
        }
      })
  }

  return close ? (
    ""
  ) : (
    <div className="cart_detail_item-info">
      <div className="cart_detail_item-img"></div>
      <div className="cart_detail_item_name-cat">
        <p className="cart_detail_item-name">{item.name}</p>
        <button className="cart_btn_close" onClick={() => handleRemoveItem()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="cart_btn_close_hover"
            color="#d1b7a1"
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <p className="cart_detail_item-cat">{item.collection}</p>
        <p className="cart_detail_item-cat cart_detail_item-price">
          $ {item.price * counter}
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
  );
}


export default function Cart({
  buttonCart, setButtonCart, account, 
  accountCart, accountCartTotal, setAccountCart, setAccountCartTotal
}) {

  // turn off the cart when change route
  let location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    setButtonCart(false);
  }, [location]);
  
  const [totalPrice, setTotalPrice] = useState(Number(accountCartTotal));
  useEffect(()=>{
    setTotalPrice(Number(accountCartTotal))
  },[accountCartTotal])

  return buttonCart && (
    <div className="cart_container">
      <div
        className="modal_close"
        onClick={() => setButtonCart(false)}
      ></div>
      <div className="cart_wrapper">
        <div className="cart_ctr">
          <h1 className="cart_header">Your Cart</h1>
          <div className="cart_item_list">
            {accountCart.length !==0 &&
            accountCart.map((item, index)=>{
              return(
                <CartItem
                  key={item.product_id}
                  name={item.product_name}
                  collection=""
                  price={item.product_price}
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  customer={account.id}
                  product={item.product_id}
                  setAccountCart={setAccountCart}
                  setAccountCartTotal={setAccountCartTotal}
                />
              )
            })}
            
          </div>

          <div className="cart_footer">
            <p className="cart_footer_align-left">Total:</p>
            <p className="cart_footer_align-right"> ${!Number(accountCartTotal) ? 0 : totalPrice}</p>
          </div>
          <div className="cart_btn_container ">
            <button className="cart_btn" type="submit" onClick={()=> {navigate('../checkout')}}>
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
  )
}
