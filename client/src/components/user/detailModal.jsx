import React from "react";
import "../../styles/history.css";

export default function DetailModal(props) {

  const RenderItemInfo =()=>{
    let list = []
    for(let i=0; i<8; i++)
      list.push(
        <div className="item_info_ctn">
          <div className="item_img"></div>
          <div className="item_name-cat">
            <p>Item XXX sadasa asasa á ấ dắ đá  sasd </p>
            <p>Category</p>
          </div>
          <p>Amount <br></br> 1</p>
          <p>Price <br></br> $123</p>
        </div>
      )
    return list;
  }

  return props.trigger ? (
    <div className={"order_detail " + (!props.trigger && "hide_modal")}>
      <div className="order_detail_wrapper">
        <div className="order_detail_ctn">
          <div className="user_info">
            <div className="user_detail-info">
              <div className="info_ctn">
                <p>Order:</p>
                <p>{props.modalData['sale_order'][0].so_code}</p>
              </div>
              <div className="info_ctn">
                <p>Transport:</p>
                <p>{props.modalData['sale_order'][0].transport_card_code}</p>
              </div>
              <div className="info_ctn">
                <p>Date:</p>
                <p>{props.modalData['sale_order'][0].delivery_date}</p>
              </div>
              <div className="info_ctn">
                <p>User Name:</p>
                <p>{props.modalData['sale_order'][0].customer_name}</p>
              </div>
              {/* <div className="info_ctn">
                <p>Name:</p>
                <p>anhbodantruong</p>
              </div> */}
              {/* <div className="info_ctn">
                <p>Email:</p>
                <p>bolaanh@gmail.com</p>
              </div> */}
              {/* <div className="info_ctn">
                <p>Phone:</p>
                <p>0938608456</p>
              </div> */}
              <div className="info_ctn">
                <p>Address:</p>
                <p>{props.modalData['sale_order'][0].street}, {props.modalData['sale_order'][0].ward}, {props.modalData['sale_order'][0].district}, {props.modalData['sale_order'][0].province}.</p>
              </div>
            </div>
            <div className="user_total">
              <p>Total:</p>
              <p>${props.modalData['total_price'][0].amount_total}</p>
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
              {/* <RenderItemInfo /> */}
              {props.modalData['sale_order_line'].map((item)=>{
                return (
                  <div className="item_info_ctn">
                    <div className="item_img"></div>
                    <div className="item_name-cat">
                      <p>{item.product_name}</p>
                      <p>{item.collection_name}</p>
                    </div>
                    <p>Amount <br></br> 1</p>
                    <p>Price <br></br> ${item.price}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}