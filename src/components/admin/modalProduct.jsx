import React from "react";
import "../../styles/history.css";

export default function ModalProduct( {modalData,setOpenDetailModal} ) {   
    
    return (
        <div className="order_detail">
            <div className="order_detail_wrapper">
                <div className="order_detail_ctn">
                    <div className="user_info">
                        <div className="user_detail-info del_bottomBorder">
                            <div className="info_ctn">
                                <p>SKU:</p>
                                <p>{modalData.sku}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Collection:</p>
                                <p>{modalData.collection}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Category</p>
                                <p>{modalData.category}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Name:</p>
                                <p>{modalData.product_name}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Price:</p>
                                <p>${modalData.price}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Discount:</p>
                                <p>{modalData.price === modalData.discount_price ? '' : '$' + modalData.discount_price}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Weight:</p>
                                <p>{modalData.weight}</p>
                            </div>
                            <div className="info_ctn">
                                <p>W x D x H:</p>
                                <p>{modalData.width} x {modalData.depth} x {modalData.height}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Material:</p>
                                <p>{modalData.material}</p>
                            </div>
                            <div className="info_ctn">
                                <p>Color:</p>
                                <p>{modalData.color}</p>
                            </div>
                        </div>
                    </div>
                    <div className="item_info">
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="1em" height="1em" 
                        preserveAspectRatio="xMidYMid meet" 
                        viewBox="0 0 32 32" 
                        onClick={() => setOpenDetailModal(false)}>
                            <path 
                            fill="none" 
                            stroke="currentColor" 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            stroke-width="2" 
                            d="M2 30L30 2m0 28L2 2"/>
                        </svg>
                        <div className="item_ctn">
                            <div className="item_ctn_info">
                                <div className="first">Description</div>
                                <div className="second">
                                    <p>{modalData.description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}