import React, { useEffect, useState } from "react";
import "../../styles/history.css";

export default function ModalUser( {modalData,setOpenModal} ) {  

  const [info, setInfo] = useState();
  const [po, setPo] = useState([]);
  const [totalPrice, setTotalPrice] = useState();

  useEffect(()=>{
      setInfo(modalData.purchase_order[0]);
      setPo(modalData.purchase_order_line);
      setTotalPrice(modalData.total_price[0].amount_total);
  },[modalData])

  return info && (
      <div className="order_detail">
          <div className="order_detail_wrapper">
              <div className="order_detail_ctn">
                  <div className="user_info">
                      <div className="user_detail-info">
                          <div className="info_ctn">
                              <p>Order:</p>
                              <p>{info.po_code}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Picking:</p>
                              <p>{info.picking_code}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Move code:</p>
                              <p>{info.move_code}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Date:</p>
                              <p>{info.delivery_date}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Supplier:</p>
                              <p>{info.supplier_name}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Phone:</p>
                              <p>{info.supplier_phone}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Amount:</p>
                              <p>{info.product_amount}</p>
                          </div>
                      </div>
                      <div className="user_total">
                          <p>Total:</p>
                          <p>${totalPrice ? totalPrice : 0}</p>
                      </div>
                  </div>
                  <div className="item_info">
                      <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="1em" height="1em" 
                      preserveAspectRatio="xMidYMid meet" 
                      viewBox="0 0 32 32" 
                      onClick={() => setOpenModal(false)}>
                          <path 
                          fill="none" 
                          stroke="currentColor" 
                          stroke-linecap="round" 
                          stroke-linejoin="round" 
                          stroke-width="2" 
                          d="M2 30L30 2m0 28L2 2"/>
                      </svg>
                      <div className="item_ctn">
                          {po? po.map((item, index)=>{
                              return (
                                <div className="item_info_ctn">
                                    <div className="item_img"></div>
                                    <div className="item_name-cat">
                                        <p>{item.name}</p>
                                        <p>${item.price}</p>
                                    </div>
                                    <p>Amount <br></br> {item.product_amount}</p>
                                    <p>Price <br></br> ${item.total_price}</p>
                                </div>
                              )
                          }): ''}
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}