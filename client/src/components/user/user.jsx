import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import History from "./history";
import Info from "./info";

export default function User( {tab, accountInfo, accountHistory, setAlert, setOpenAlert} ) {
    const navigate = useNavigate();

    useEffect(()=>{}, [tab])

    return (
        <React.Fragment>
            <div className="sidebar_ctn">
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'info' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../user/info")}}>
                        Profile
                    </button>
                    <i className="fa-solid fa-user sidebar_icon"></i>     
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'history' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../user/history")}}>
                        History
                    </button>
                    <i className="fa-solid fa-clock-rotate-left sidebar_icon"></i>
                </div>
            </div>
            {tab === 'info' && <Info accountInfo={accountInfo} setAlert={setAlert} setOpenAlert={setOpenAlert}/>}
            {tab === 'history' && <History accountHistory={accountHistory} setAlert={setAlert} setOpenAlert={setOpenAlert}/>}
        </React.Fragment>
    )
}