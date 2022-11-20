import React, { useState } from "react";
import "../../styles/admin.css";
import ThirdPartyModal from "./modalThirdParty";

export default function Thirdparty() {
    const [openModal, setOpenModal] = useState(false);

    const [statusArr, setStatusArr] = useState([true, true, true, true, true, true, true]);

    const RenderColumn =()=>{
        let list = []
        for(let i=0; i<7; i++)
            list.push(
            <div className={"table_row " + (i%2 ? "odd_row" : "even_row ") + (i===6 ? "last-row_shadow" : "")}>
                <div className="table_ele">
                    <p>Item 1</p>
                </div>
                <div className="table_ele">
                    <p>Item 1</p>
                </div>
                <div className="table_ele">
                    <p>Item 1</p>
                </div>
                <div className="table_ele">
                    <p>000000000000</p>
                </div>
                <div className="table_ele">
                    <p>098xxxxxxxxx</p>
                </div>
                <div className="table_ele">
                    <p>Abc_123</p>
                </div>
                <div className="table_ele admin_fix-size-1">
                    <button onClick={() => setOpenModal(true) }>Detail</button>
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
            <ThirdPartyModal trigger={openModal} setTrigger={setOpenModal} />
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
                <div className="history_table admin_user-scroll">
                    <div className="table_row first_row">
                        <div className="table_ele">
                            <p>Name</p>
                        </div>
                        <div className="table_ele">
                            <p>Tax</p>
                        </div>
                        <div className="table_ele">
                            <p>Phone</p>
                        </div>
                        <div className="table_ele">
                            <p>PIC</p>
                        </div>
                        <div className="table_ele">
                            <p>Start Date</p>
                        </div>
                        <div className="table_ele">
                            <p>End Date</p>
                        </div>
                        <div className="table_ele admin_fix-size-1">
                            <p>Detail</p>
                        </div>
                        <div className="table_ele admin_fix-size-1">
                            <p>Status</p>
                        </div>
                    </div>
                    <RenderColumn />
                    <div className="table_row">
                        <div className="history_pagination">
                            <a className="text_pagination" href="#">
                                <p>Previous</p>
                            </a>
                            <a className="pagination_focus" href="#">
                                <p>1</p>
                            </a>
                            <a href="#">
                                <p>2</p>
                            </a>
                            <a href="#">
                                <p>3</p>
                            </a>
                            <a className="text_pagination" href="#">
                                <p>Next</p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}