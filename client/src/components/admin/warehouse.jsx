import React, { useState } from "react";
import "../../styles/admin.css";
import "../../styles/history.css";
import ModalWarehouse from "./modalWarehouse";

export default function Warehouse() {
  const [openModal, setOpenModal] = useState(false);

  //temp
  const [statusButton, setStatusButton] = useState(true);
  const [statusButton1, setStatusButton1] = useState(true);

  const RenderEmptyRow =()=>{
    let list = []
    for(let i=3; i<8; i++)
      list.push(<div className={"table_row " + (i%2? "odd_row" : "even_row")}></div>)
    return list
  }

  return (
    <div className="history_container">
      {openModal && <ModalWarehouse setOpenModal={setOpenModal}/>}
      <div className="history_content">
        <div className="search_container">
          <input 
            type="text" 
            placeholder="Search..." />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em">
              <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-width="2" 
              d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
          </svg>
        </div>
        <div className="table_ctn">
          <div className="history_table admin_user-scroll">
            <div className="table_row first_row">
              <div className="table_ele admin_fix-size-2">
                <p>Code</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Name</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Address</p>
              </div>
              <div className="table_ele admin_fix-size-2">
                <p>Quantity On Hand</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Detail</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Status</p>
              </div>
            </div>

            <div className="table_row odd_row">
              <div className="table_ele admin_fix-size-2">
                <p>WH100000001</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Warehouse xxx</p>
              </div>
              <div className="table_ele">
                <p className="left_align">288 Ly Thuong Kiet,<br/>Phuong 14, Quan 10, Ho Chi Minh.</p>
              </div>
              <div className="table_ele admin_fix-size-2">
                <p>200</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <button onClick={() => setOpenModal(true) }>Detail</button>
              </div>
              <div className="table_ele admin_fix-size-1">
                <button 
                  className={statusButton? "admin_active-btn": "admin_locked-btn"}
                  onClick={() => setStatusButton(!statusButton)}>
                  {statusButton? "Active" : "Locked"}
                </button>
              </div>
            </div>
            <div className="table_row even_row">
              <div className="table_ele admin_fix-size-2">
                <p>WH100000001</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Warehouse xxx</p>
              </div>
              <div className="table_ele">
                <p className="left_align">288 Ly Thuong Kiet,<br/>Phuong 14, Quan 10, Ho Chi Minh.</p>
              </div>
              <div className="table_ele admin_fix-size-2">
                <p>200</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <button onClick={() => setOpenModal(true) }>Detail</button>
              </div>
              <div className="table_ele admin_fix-size-1">
                <button 
                  className={statusButton1? "admin_active-btn": "admin_locked-btn"}
                  onClick={() => setStatusButton1(!statusButton1)}>
                  {statusButton1? "Active" : "Locked"}
                </button>
              </div>
            </div>
            <RenderEmptyRow />
          </div>
        </div>
        <div className="history_pagination">
          <p className="text_pagination" href="#">
            <button>Previous</button>
          </p>
          <p className="pagination_focus" href="#">
            <button>1</button>
          </p>
          <p href="#">
            <button>2</button>
          </p>
          <p href="#">
            <button>3</button>
          </p>
          <p className="text_pagination" href="#">
            <button>Next</button>
          </p>
        </div>
      </div>
    </div>
  )
}