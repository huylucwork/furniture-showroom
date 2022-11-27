import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/productDetail.css";

export default function ProductDetail ( {filterCollection, filterCategory, setFilterCategory} ) {

    const [chosenImg, setChosenImg] = useState(0);
    const [itemCount, setItemCount] = useState(1);
    const [triggerAbout, setTriggerAbout] = useState(false);
    const [triggerPolicy, setTriggerPolicy] = useState(false);

    const navigate = useNavigate();

    const SubImg =()=>{
        let list = []
        for(let i=0; i<6; i++)
            i===chosenImg?
            list.push(
                <li className="sub-img chosen"><img src="" alt="" onClick={()=>setChosenImg(i)}/></li>
            ):
            list.push(
                <li className="sub-img"><img src="" alt="" onClick={()=>setChosenImg(i)}/></li>
            )
        return list
    }
    
    const RenderRecommendItems =()=>{
        let list = []
        for(let i=0; i<4; i++)
            list.push(
            <div className="col item">
                <div className="detail_ctn">
                    <img src="./img/autumn.jpg" alt="" />
                    <img src="./img/autumn2.jpg" alt="" />
                </div>
                <h2>Name of item</h2>
                <p>$999</p>
            </div>)
        return list
    }

    return (
        <div className="product-detail_container">
            <div className="product-detail_route">
                <span>Product</span> / <span>{filterCollection}</span> / <span>{filterCategory}</span> / <span className="product-detail_route_name">Name</span>
            </div>
            <div className="product-detail_body">
                <div className="product-detail_body_left row g-0">
                    <ul className="col sub-img_container">
                        <SubImg />
                    </ul>
                    <img src="" alt="" className="main-img col" />
                    <p className="view-link" 
                        onClick={()=>{setFilterCategory('All'); navigate('../product')}}>
                        View all this collection {'>'}
                    </p>
                </div>
                
                <div className="product-detail_body_right">
                    <p className="product-detail_body_right_name">Name of item</p>
                    <p className="product-detail_body_right_price">$ 12312</p>
                    <p className="product-detail_body_right_quote">Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.</p>
                    <div className="product-detail_body_right_icon">    
                        {itemCount === 1 ?
                        <button className="button-minus limit">-</button>:
                        <button className="button-minus" onClick={()=>setItemCount(itemCount-1)}>-</button>}
                        <p>{itemCount}</p>
                        <button className="button-plus" onClick={()=>setItemCount(itemCount+1)}>+</button>
                    </div>
                    <button className="product-detail_body_right_add">Add to cart - $12123</button>
                    <div className="product-detail_body_right_about row" onClick={()=>setTriggerAbout(!triggerAbout)}>
                        <h1 className="col">About</h1>
                        <i className="fa-solid fa-plus col plus"></i>
                        {triggerAbout === true &&
                        <div className="about_container">
                            <p className="about_container_left">Material:</p>
                            <p className="about_container_right">Fabric</p>
                            <p className="about_container_left">Dimension:</p>
                            <p className="about_container_right">W-85 x L-236 x H-94 (inch)</p>
                            <p className="about_container_left">Color:</p>
                            <p className="about_container_right">Original gray</p>
                        </div>}
                    </div>
                    <div className="product-detail_body_right_policy row" onClick={()=>setTriggerPolicy(!triggerPolicy)}>
                        <h1 className="col">Policy</h1>
                        <i className="fa-solid fa-plus col plus"></i>
                        {triggerPolicy === true &&
                        <div className="policy_container">
                            <p>- Free shipping in Ho Chi Minh City.</p>
                            <p>- 3 years warranty for Sofas. Lifetime maintenance.</p>
                            <p>- 0% interest installment payment for credit card across 24 banks.</p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="product-detail_recommend">
                <h1>You may also like</h1>
                <div className="row items">
                    <RenderRecommendItems />
                </div>
            </div>
            
            <div className="product-detail_recommend">
                <h1>Best seller</h1>
                <div className="row items">
                    <RenderRecommendItems />
                </div>
            </div>
        </div>
    )
}