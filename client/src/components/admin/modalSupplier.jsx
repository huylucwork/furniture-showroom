import React from "react";
import "../../styles/history.css";

export default function SupplierModal(props) {

  const RenderItemInfo =()=>{
    let list = []
    for(let i=0; i<8; i++)
      list.push(
        <div className="item_ctn_info">
          <div className="row first">
            <p className="col-10">Picking Code: SP100000001</p>
            <p className="col-2 text-end">$1000</p>
          </div>
          <div className="row second">
            <p className="col">Code: PO10000001</p>
            <p className="col text-center">Warehouse ID: WH10000</p>
            <p className="col-3 text-end">Amout: 100</p>
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
            <div className="user_detail-info del_bottomBorder">
              <div className="info_ctn">
                <p>Company:</p>
                <p>PO40000087</p>
              </div>
              <div className="info_ctn">
                <p>Short name:</p>
                <p>02-09-2022</p>
              </div>
              <div className="info_ctn">
                <p>Tax:</p>
                <p>XXX</p>
              </div>
              <div className="info_ctn">
                <p>Phone:</p>
                <p>06</p>
              </div>
              <div className="info_ctn">
                <p>PIC Name:</p>
                <p>SM10000000001</p>
              </div>
              <div className="info_ctn">
                <p>Warehouse:</p>
                <p>340 Madison Avenue Sixth Floor New York, NY 10173 USA</p>
              </div>
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