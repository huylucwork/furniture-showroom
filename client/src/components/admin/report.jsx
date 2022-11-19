import React, { useState, useEffect } from "react";
import Iframe from "react-iframe";
import "../../styles/admin.css";
import "../../styles/history.css";

export default function Report () {
    return (
        <div className="history_container">
            <div className="history_content">
                <p className="title pt-2">COMPANY'S HEALTH STATUS</p>
                <div className="body">
                    <Iframe width="97%" height="92%" src="https://datastudio.google.com/embed/reporting/0bcb6be1-dfcd-48a5-a21b-6dd5567ceda5/page/6zXD" frameborder="0" style="border:0" allowfullscreen />
                </div>
            </div>
        </div>
    )
}