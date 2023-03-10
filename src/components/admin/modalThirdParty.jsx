import React, { useState, useEffect } from "react";
import "../../styles/history.css";

export default function ThirdPartyModal( {modalData,setOpenModal} ) {

  const [info, setInfo] = useState();
  const [employee, setEmployee] = useState([]);

  useEffect(()=>{
      setInfo(modalData.thirdPartyInfo[0]);
      setEmployee(modalData.thirdPartyEmployee);
  },[modalData])

    return info && (
      <div className="order_detail">
          <div className="order_detail_wrapper">
              <div className="order_detail_ctn">
                  <div className="user_info">
                      <div className="user_detail-info del_bottomBorder">
                          <div className="info_ctn">
                              <p>ID:</p>
                              <p>Warehouse {info.id}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Tax:</p>
                              <p>{info.tax}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Name:</p>
                              <p>{info.name}</p>
                          </div>
                          <div className="info_ctn">
                              <p>Start date:</p>
                              <p>{info.start_date}</p>
                          </div>
                          <div className="info_ctn">
                              <p>End Date:</p>
                              <p>{info.end_date}</p>
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
                          {employee? employee.map((item, index)=>{
                              return (
                                  <div className="item_ctn_info">
                                      <div className="row first">
                                          <p className="col-10">Employee: {item.id} - {item.driver_name}</p>
                                          <p className="col-2 text-end">{item.is_active? "Active" : "Locked"}</p>
                                      </div>
                                      <div className="row second">
                                          <p className="col">Phone: {item.driver_phone}</p>
                                          <p className="col-4 text-end">License: {item.driver_license}</p>
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