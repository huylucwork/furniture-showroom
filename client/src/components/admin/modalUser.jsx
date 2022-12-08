import React, { useEffect, useState } from "react";
import "../../styles/history.css";

export default function ModalUser( {modalData,setOpenModal} ) {   

    const [info, setInfo] = useState();
    const [so, setSo] = useState([]);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(()=>{
        setInfo(modalData.info[0]);
        setSo(modalData.so);
        setTotalPrice(modalData.total_price[0].amount_total);
    },[modalData])

    return info && (
        <div className="order_detail">
            <div className="order_detail_wrapper">
                <div className="order_detail_ctn">
                    <div className="user_info">
                        <div className="user_detail-info">
                            <div className="info_ctn">
                                <p>ID:</p>
                                <p>{info.id}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Full name:</p>
                                <p>{info.full_name}</p>
                            </div>
                            <div className="info_ctn">
                                <p>User Name:</p>
                                <p>{info.name}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Email:</p>
                                <p>{info.email}@gmail.com</p>
                            </div>
                            <div className="info_ctn">
                                <p>Phone:</p>
                                <p>{info.phone}</p>
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
                                    <div className="item_ctn_info">
                                        <div className="row first">
                                            <p className="col-10">Order Code: {item.name}</p>
                                            <p className="col-2 text-end">${item.amount_total}</p>
                                        </div>
                                        <div className="row second">
                                            <p className="col">TCard: {item.transport_card_code}</p>
                                            <p className="col text-center">Date: {item.commitment_date}</p>
                                            <p className="col-3 text-end">Amout: 100</p>
                                            <p className="col-2 text-end">{item.status.charAt(0).toUpperCase() + item.status.slice(1)}</p>
                                        </div>
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