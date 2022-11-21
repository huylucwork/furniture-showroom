import React from "react";
import { useNavigate } from "react-router-dom";
import ManageUser from "./manageUsers";
import ManageItem from "./manageItems";
import Supplier from "./supplier";
import OrderSale from "./orderSale";
import OrderPurchase from "./orderPurchase";
import ThirdParty from "./thirdParty";
import Warehouse from "./warehouse";
import Report from "./report";

export default function Admin( {tab} ) {
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <div className="sidebar_ctn">
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'manage-users' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/manage-users")}}>
                        Members
                    </button>
                    <i class="fa-solid fa-user sidebar_icon"></i>     
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'manage-items' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/manage-items")}}>
                        Items
                    </button>
                    <i class="fa-solid fa-box sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'supplier' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/supplier")}}>
                        Supplier
                    </button>
                    <i class="fa-solid fa-truck sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'order-sale' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/order/sale")}}>
                        Sales
                    </button>
                    <i class="fa-brands fa-shopify sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'order-purchase' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/order/purchase")}}>
                        Purchases
                    </button>
                    <i class="fa-solid fa-clipboard sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'third-party' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/third-party")}}>
                        Third-party
                    </button>
                    <i class="fa-solid fa-users sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'warehouse' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/warehouse")}}>
                        Warehouse
                    </button>
                    <i class="fa-solid fa-warehouse sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'report' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/report")}}>
                        Report
                    </button>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" height="1em" 
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 16 16" 
                        className="sidebar_icon">
                            <path 
                            fill="currentColor" 
                            d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
                    </svg>
                </div>
            </div>
            {tab === 'manage-users' && <ManageUser />}
            {tab === 'manage-items' && <ManageItem />}
            {tab === 'supplier' && <Supplier />}
            {tab === 'order-sale' && <OrderSale />}
            {tab === 'order-purchase' && <OrderPurchase />}
            {tab === 'third-party' && <ThirdParty />}
            {tab === 'warehouse' && <Warehouse />}
            {tab === 'report' && <Report />}
        </React.Fragment>
    )
}