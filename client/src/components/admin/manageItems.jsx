import React, { useState } from "react";
import "../../styles/admin.css";
import UpdateAdd from "./updateAdd";

export default function ManageItem() {
  const [buttonModal, setButtonModal] = useState(false);

  const [modalVal, setModalVal] = useState(false);

  const [statusArr, setStatusArr] = useState([true, true, true, true, true, true, true]);

  const RenderColumn =()=>{
    let list = []
    for(let i=0; i<7; i++)
      list.push(
      <div className={"table_row " + (i%2 ? "odd_row" : "even_row ") + (i===6 ? "last-row_shadow" : "")}>
        <div className="table_ele">
          <p>Spring</p>
        </div>
        <div className="table_ele">
          <p>Not yet ...</p>
        </div>
        <div className="table_ele admin_fix-size-3">
          <p className="left_align">Sofa</p>
        </div>
        <div className="table_ele admin_fix-size-3">
          <p className="left_align">$123</p>
        </div>
        <div className="table_ele">
          <p>DD-MM-YYYY</p>
        </div>
        <div className="table_ele">
          <p>DD-MM-YYYY</p>
        </div>
        <div className="table_ele admin_fix-size-1">
          <button onClick={() => {setButtonModal(!buttonModal); setModalVal(true);}}>Edit</button>
        </div>
        <div className="table_ele admin_fix-size-1">
          <button 
            className= {statusArr[i] ? "admin_active-btn": "admin_locked-btn"}
            onClick={() => {
              let tmpArr = [...statusArr];
              tmpArr[i] = !tmpArr[i];
              setStatusArr(tmpArr);
            }}>
            {statusArr[i] ? "Active" : "Locked"}
          </button>
        </div>
      </div>)
    return list;
  }

  return (
    <div className="history_container">
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
          <button 
            className="admin_add"
            onClick={() => {setButtonModal(!buttonModal); setModalVal(false);}} >
              Add new
          </button>
        </div>
        <div className="history_table">
          <div className="table_row first_row">
            <div className="table_ele">
              <p>Collection</p>
            </div>
            <div className="table_ele">
              <p>SKU</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Name</p>
            </div>
            <div className="table_ele admin_fix-size-3">
              <p className="left_align">Price</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele">
              <p>Created date</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele">
              <p>Updated date</p>
              <button>
                <i className="fa-solid fa-up-down"></i>
              </button>
            </div>
            <div className="table_ele admin_fix-size-1">
              <p>Update</p>
            </div>
            <div className="table_ele admin_fix-size-1">
              <p>Status</p>
            </div>
          </div>
          <RenderColumn />
          <div className="table_row">
            <div className="history_pagination">
              <p className="text_pagination">
                <button>Previous</button>
              </p>
              <p className="pagination_focus">
                <button>1</button>
              </p>
              <p>
                <button>2</button>
              </p>
              <p>
                <button>3</button>
              </p>
              <p className="text_pagination">
                <button>Next</button>
              </p>
            </div>
          </div>
        </div>
        <UpdateAdd 
          trigger={[buttonModal, modalVal]} 
          setTrigger={setButtonModal}>
        </UpdateAdd>
      </div>
    </div>
  )
}