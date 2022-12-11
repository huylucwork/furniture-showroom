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
                    <i className="fa-solid fa-user sidebar_icon"></i>     
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'manage-items' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/manage-items")}}>
                        Items
                    </button>
                    <i className="fa-solid fa-box sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'supplier' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/supplier")}}>
                        Supplier
                    </button>
                    <i className="fa-solid fa-truck sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'order-sale' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/order/sale")}}>
                        Sales
                    </button>
                    <i className="fa-brands fa-shopify sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'order-purchase' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/order/purchase")}}>
                        Purchases
                    </button>
                    <i className="fa-solid fa-clipboard sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'third-party' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/third-party")}}>
                        Third-party
                    </button>
                    <i className="fa-solid fa-users sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'warehouse' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/warehouse")}}>
                        Warehouse
                    </button>
                    <i className="fa-solid fa-warehouse sidebar_icon"></i>
                </div>
                <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'report' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/report")}}>
                        Report
                    </button>
                    <i className="fa-solid fa-file-invoice sidebar_icon"></i>
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