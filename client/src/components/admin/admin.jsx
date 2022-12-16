import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import ManageUser from "./manageUsers";
import ManageItem from "./manageItems";
// import Supplier from "./supplier";
import OrderSale from "./orderSale";
import OrderPurchase from "./orderPurchase";
import ThirdParty from "./thirdParty";
import ThirdPartyEmployee from "./thirdPartyEmployee";
import Warehouse from "./warehouse";
import Report from "./report";
import Loading from "../helper/loading";

export default function Admin( {tab, setAlert, setOpenAlert, changeProducts, setChangeProducts} ) {
    const navigate = useNavigate();

    const [openLoading, setOpenLoading] = useState(false);

    //admin
    const [users, setUsers] = useState([]);
    const [changeUsers, setChangeUsers] = useState(true);

    const [products, setProducts] = useState([]);
    
    const [saleOrders, setSaleOrders] = useState([]);
    const [changeSaleOrders, setChangeSaleOrders] = useState(true);
    
    const [purchaseOrders, setPurchaseOrders] = useState([]);
    const [changePurchaseOrders, setChangePurchaseOrders] = useState(true);
    
    const [thirdParty, setThirdParty] = useState([]);
    const [changeThirdParty, setChangeThirdParty] = useState(true);
    
    const [thirdPartyEmployee, setThirdPartyEmployee] = useState([]);
    const [changeThirdPartyEmployee, setChangeThirdPartyEmployee] = useState(true);
    
    const [warehouse, setWarehouse] = useState([]);
    const [changeWarehouse, setChangeWarehouse] = useState(true);

    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/users")
            .then((response)=> {
                setUsers(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeUsers])

    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/products")
            .then((response)=> {
                setProducts(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeProducts])
    
    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/order/sale")
            .then((response)=> {
                setSaleOrders(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeSaleOrders])
    
    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/order/purchase")
            .then((response)=> {
                setPurchaseOrders(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changePurchaseOrders])
    
    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/3pls")
            .then((response)=> {
                setThirdParty(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeThirdParty])
    
    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/3plse")
            .then((response)=> {
                setThirdPartyEmployee(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeThirdPartyEmployee])
    
    useEffect(()=>{
        setOpenLoading(true);
        Axios.get("https://hifurdez.vercel.app/admin/warehouse")
            .then((response)=> {
                setWarehouse(response.data);
                setOpenLoading(false);
            })
            .catch((err)=>{
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            })
    },[changeWarehouse])

    return (
        <React.Fragment>
            {openLoading && <Loading />}
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
                {/* <div className="sidebar_ele">
                    <button 
                        className={"sidebar_btn " + (tab === 'supplier' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/supplier")}}>
                        Supplier
                    </button>
                    <i className="fa-solid fa-truck sidebar_icon"></i>
                </div> */}
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
                        className={"sidebar_btn " + (tab === 'third-party-employee' && "sidebar_focus")}
                        type="button" 
                        onClick={() => {navigate("../admin/third-party-employee")}}>
                        Third-party Employee
                    </button>
                    <i class="fa-solid fa-truck-fast sidebar_icon"></i>
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
            {tab === 'manage-users' && 
            <ManageUser 
                users={users} 
                changeUsers={changeUsers}
                setChangeUsers={setChangeUsers}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'manage-items' && 
            <ManageItem 
                products={products}
                changeProducts={changeProducts}
                setChangeProducts={setChangeProducts}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {/* {tab === 'supplier' && <Supplier />} */}
            {tab === 'order-sale' && <OrderSale 
                saleOrders={saleOrders}
                changeSaleOrders={changeSaleOrders}
                setChangeSaleOrders={setChangeSaleOrders}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'order-purchase' && <OrderPurchase 
                purchaseOrders={purchaseOrders}
                changePurchaseOrders={changePurchaseOrders}
                setChangePurchaseOrders={setChangePurchaseOrders}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'third-party' && <ThirdParty 
                thirdParty={thirdParty}
                changeThirdParty={changeThirdParty}
                setChangeThirdParty={setChangeThirdParty}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'third-party-employee' && <ThirdPartyEmployee 
                thirdPartyEmployee={thirdPartyEmployee}
                changeThirdPartyEmployee={changeThirdPartyEmployee}
                setChangeThirdPartyEmployee={setChangeThirdPartyEmployee}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'warehouse' && <Warehouse 
                warehouse={warehouse}
                changeWarehouse={changeWarehouse}
                setChangeWarehouse={setChangeWarehouse}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                openLoading={openLoading}
                setOpenLoading={setOpenLoading}
            />}
            {tab === 'report' && <Report />}
        </React.Fragment>
    )
}