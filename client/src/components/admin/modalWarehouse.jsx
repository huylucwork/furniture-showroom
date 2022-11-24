import React, { useState } from "react";
import "../../styles/history.css";

export default function ModalWarehouse( {setOpenModal} ) {
    const [tab, setTab] = useState('receive')

    const RenderItem = ( {tab} ) => {
      let list = [];

      if (tab === 'delivery'){
        for(let i=0; i<8; i++){
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-10">Picking Code: SP100000001</p>
                <p className="col-2 text-end">$1000</p>
              </div>
              <div className="row second">
                <p className="col">Code: PO10000001</p>
                <p className="col text-center">Warehouse: WH10000001</p>
                <p className="col-3 text-end">Amout: 100</p>
              </div>
            </div>
          )
        }
      }
      else if (tab === 'receive'){
        for(let i=0; i<8; i++){
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-10">Picking Code: SP100000001</p>
                <p className="col-2 text-end">$1000</p>
              </div>
              <div className="row second">
                <p className="col">Code: PO10000001</p>
                <p className="col text-center">Third-party: TP10000001</p>
                <p className="col-3 text-end">Amout: 100</p>
              </div>
            </div>
          )
        }
      }
      else {
        for(let i=0; i<8; i++){
          list.push (
            <div className="item_ctn_info">
              <div className="row first">
                <p className="col-10">Picking Code: SP100000001</p>
                <p className="col-2 text-end">$1000</p>
              </div>
              <div className="row second">
                <p className="col">Move Code: PO10000001</p>
                <p className="col text-center">Third-party: TP10000001</p>
                <p className="col-3 text-end">Amout: 100</p>
              </div>
              <div className="row second">
                <p className="col">Srce Warehouse: WH10000001</p>
                <p className="col">Desc Warehouse: WH10000002</p>
              </div>
            </div>
          )
        }
      }
      return list
    }

    return(
    <div className={"order_detail"}>
      <div className="order_detail_wrapper">
        <div className="order_detail_ctn">
          <div className="user_info">
            <div className="user_detail-info del_bottomBorder">
              <div className="info_ctn">
                <p>Code:</p>
                <p>WH100000001</p>
              </div>
              <div className="info_ctn">
                <p>Name:</p>
                <p>Warehouse xxx</p>
              </div>
              <div className="info_ctn">
                <p>Status:</p>
                <p>Active</p>
              </div>
              <div className="info_ctn">
                <p>Address:</p>
                <p>288 Ly Thuong Kiet,<br/>Phuong 14, Quan 10, Ho Chi Minh.</p>
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