import React, { useState, useEffect } from "react";
import "../../styles/history.css";

export default function ModalWarehouse( {modalData,setOpenModal} ) {
    const [tab, setTab] = useState('receive')

    const [info, setInfo] = useState();
    const [receive, setReceive] = useState([]);
    const [transfer, setTransfer] = useState([]);
    const [delivery, setDelivery] = useState([]);

    useEffect(()=>{
      setInfo(modalData.warehouseInfo[0]);
      setReceive(modalData.receive);
      setTransfer(modalData.transfer);
      setDelivery(modalData.delivery);
    },[modalData])

    const RenderItem = ( {tab} ) => {
      let list = [];

      if (tab === 'delivery'){
        delivery.forEach((item)=>{
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-10">Code: {item.code} - {item.customer_name}</p>
                <p className="col-2 text-end">${item.amount_total}</p>
              </div>
              <div className="row second">
                <p className="col">Third-party: {item.third_party}</p>
                <p className="col text-center">Amount: {item.product_amount}</p>
              </div>
              <div className="second">
                <p>Address: {item.street? item.street +', ' : ''} {item.ward? item.ward +', ' : ''} {item.district? item.district + ', ': ''} {item.province? item.province + '.': ''}</p>
              </div>
            </div>
          )
        })
      }
      else if (tab === 'receive'){
        receive.forEach((item)=>{
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-9">Picking Code: {item.picking_code}</p>
                <p className="col-3 text-end">{item.date}</p>
              </div>
              <div className="row second">
                <p className="col">Code: {item.code}</p>
                <p className="col-6 text-center">Third-party: {item.third_party_name}</p>
                <p className="col-2 text-end">Amout: {item.product_amount}</p>
              </div>
            </div>
          )
        })
      }
      else {
        transfer.forEach((item)=>{
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-9">Transfer Code: {item.transfer_code}</p>
                <p className="col-3 text-end">{item.date}</p>
              </div>
              <div className="row second">
                <p className="col">Third-party: {item.third_party_name}</p>
                <p className="col-6 text-center">Amount: {item.product_amount}</p>
              </div>
              <div className="second">
                <p>Src warehouse: {item.src_warehouse}</p>
              </div>
              <div className="second">
                <p>Dest warehouse: {item.dest_warehouse}</p>
              </div>
            </div>
          )
        })
      }
      return list
    }

  return info && receive && delivery && transfer && (
    <div className={"order_detail"}>
      <div className="order_detail_wrapper">
        <div className="order_detail_ctn">
          <div className="user_info">
            <div className="user_detail-info del_bottomBorder">
              <div className="info_ctn">
                <p>Code:</p>
                <p>{info.code}</p>
              </div>
              <div className="info_ctn">
                <p>Name:</p>
                <p>{info.name}</p>
              </div>
              <div className="info_ctn">
                <p>Status:</p>
                <p>{info.is_active? "Active" : "Locked"}</p>
              </div>
              <div className="info_ctn">
                <p>Address:</p>
                <p>{info.street},<br/> {info.ward}, {info.district}, {info.province}.</p>
              </div>
            </div>
          </div>
          <div className="item_info">
            <div className="item_info-tab row">
                <p className="col" onClick={()=>setTab('receive')}>
                  <span className={(tab ==='receive' ? " item_info-tab-chosen" : '')}>Receive</span>
                </p>
                <p className="col" onClick={()=>setTab('transfer')}>
                  <span className={(tab ==='transfer' ? " item_info-tab-chosen" : '')}>Transfer</span>
                </p>
                <p className="col" onClick={()=>setTab('delivery')}>
                  <span className={(tab ==='delivery' ? " item_info-tab-chosen": '')}>Deliver</span>
                </p>
            </div>

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
            
            <div className="item_ctn item_warehouse">
              {tab === 'receive' && <RenderItem tab={tab}/>}
              {tab === 'transfer' && <RenderItem tab={tab}/>}
              {tab === 'delivery' && <RenderItem tab={tab}/>}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}