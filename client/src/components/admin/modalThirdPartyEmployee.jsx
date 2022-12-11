import React, { useState, useEffect } from "react";
import "../../styles/history.css";

export default function ModalThirdPartyEmployee( {modalData,setOpenModal} ) {

  const [info, setInfo] = useState();
  const [order, setOrder] = useState([]);

  useEffect(()=>{
      setInfo(modalData.thirdPartyEmployeeInfo[0]);
      setOrder(modalData.thirdPartyEmployeeOrder);
  },[modalData])

    return info && (
      <div className="order_detail">
          <div className="order_detail_wrapper">
              <div className="order_detail_ctn">
                  <div className="user_info">
                      <div className="user_detail-info del_bottomBorder">
                          <div className="info_ctn">
                              <p>Identification:</p>
                              <p>{info.driver_citizen_identification}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Lisence:</p>
                              <p>{info.driver_license}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Name:</p>
                              <p>{info.driver_name}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Phone:</p>
                              <p>{info.driver_phone}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Third-party:</p>
                              <p>{info.company_name}</p>
                          </div>
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
                          {order? order.map((item, index)=>{
                              return (
                                  <div className="item_ctn_info">
                                      <div className="row first">
                                          <p className="col-10">Code: {item.code}</p>
                                          <p className="col-2 text-end">${item.amount_total}</p>
                                      </div>
                                      <div className="row second">
                                          <p className="col">Date: {item.delivery_date}</p>
                                          <p className="col-5 text-center">Amount: {item.product_amount}</p>
                                          <p className="col-3 text-end">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</p>
                                      </div>
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