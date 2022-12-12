import React, { useEffect, useState } from "react";
import "../../styles/history.css";

export default function ModalUser( {modalData,setOpenModal} ) {  

    const [info, setInfo] = useState();
    const [so, setSo] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(()=>{
        setInfo(modalData.sale_order[0]);
        setSo(modalData.sale_order_line);
        setTotalPrice(modalData.total_price[0].amount_total);
    },[modalData])

    return info && (
        <div className="order_detail">
            <div className="order_detail_wrapper">
                <div className="order_detail_ctn">
                    <div className="user_info">
                        <div className="user_detail-info">
                            <div className="info_ctn">
                                <p>Order:</p>
                                <p>{info.so_code}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Transport:</p>
                                <p>{info.transport_card_code}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Date:</p>
                                <p>{info.delivery_date}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Name:</p>
                                <p>{info.customer_name}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Phone:</p>
                                <p>{info.customer_phone}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Street:</p>
                                <p>{info.street}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Ward:</p>
                                <p>{info.ward}</p>
                            </div>
                            <div className="info_ctn">
                                <p>District:</p>
                                <p>{info.district}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Province:</p>
                                <p>{info.province}</p>
                            </div>
                        </div>
                        <div className="user_total">
                            <p>Total:</p>
                            <p>${totalPrice ? totalPrice : 0}</p>
                        </div>
                    </div>
                    <div className="item_info">
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
                        <div className="item_ctn">
                            {so? so.map((item, index)=>{
                                return (
                                    <div className="item_info_ctn">
                                        <div className="item_img"></div>
                                        <div className="item_name-cat">
                                            <p>{item.product_name}</p>
                                            <p>{item.collection_name}</p>
                                        </div>
                                        <p>Amount <br></br> {item.product_amount}</p>
                                        <p>Price <br></br> ${item.total_price}</p>
                                    </div>
                                )
                            }): ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}