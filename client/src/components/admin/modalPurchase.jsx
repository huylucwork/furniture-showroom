import React from "react";
import "../../styles/history.css";

export default function PurchaseModal(props) {

  const RenderItemInfo =()=>{
    let list = []
    for(let i=0; i<8; i++)
      list.push(
        <div className="item_info_ctn">
          <div className="item_img"></div>
          <div className="item_name-cat">
            <p>Item X</p>
            <p className="purchase_price">$123</p>
          </div>
          <div className="item_index">
            <div>
              <p>Color: White</p>
              <p>l: 02xx</p>
            </div>
            <div>
              <p>w: 02xx</p>
              <p>h: 02xx</p>
            </div>
            <div>
              <p>Amount: 01</p>
              <p>Weight: 10kg</p>
            </div>
          </div>
        </div>
      )
    return list
  }

  return props.trigger ? (
    <div className={"order_detail " + (!props.trigger && "hide_modal")}>
      <div className="order_detail_wrapper">
        <div className="order_detail_ctn">
          <div className="user_info">
            <div className="user_detail-info">
              <div className="info_ctn">
                <p>Order:</p>
                <p>PO40000087</p>
              </div>
              <div className="info_ctn">
                <p>Date:</p>
                <p>02-09-2022</p>
              </div>
              <div className="info_ctn">
                <p>Company:</p>
                <p>XXX</p>
              </div>
              <div className="info_ctn">
                <p>Amount:</p>
                <p>06</p>
              </div>
              <div className="info_ctn">
                <p>Move Code:</p>
                <p>SM10000000001</p>
              </div>
              <div className="info_ctn">
                <p>Warehouse:</p>
                <p>340 Madison Avenue Sixth Floor New York, NY 10173 USA</p>
              </div>
            </div>
            <div className="user_total">
              <p>Total:</p>
              <p>$1000000</p>
            </div>
          </div>
          <div className="item_info">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" height="1em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 32 32" 
              onClick={() => props.setTrigger(false)}>
                <path 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2 30L30 2m0 28L2 2"/>
            </svg>
            <div className="item_ctn">
              <RenderItemInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}