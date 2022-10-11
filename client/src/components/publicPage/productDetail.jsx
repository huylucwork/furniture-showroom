import React, { useState } from "react";
import "../../styles/productDetail.css";

export default function ProductDetail () {
    const [chosenImg, setChosenImg] = useState(0);
    const [itemCount, setItemCount] = useState(1);
    const [triggerAbout, setTriggerAbout] = useState(false);
    const [triggerDescr, setTriggerDescr] = useState(false);

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
                <img src="" alt="" />
                <h1>Name of item</h1>
                <p>$999</p>
            </div>)
        return list
    }

    return (
        <div className="product-detail_container">
            <div className="product-detail_route">
                <span>Product</span> / <span>Collection</span> / <span>Category</span> / <span className="product-detail_route_name">Name</span>
            </div>
            <div className="product-detail_body">
                <div className="product-detail_body_left row g-0">
                    <ul className="col sub-img_container">
                        <SubImg />
                    </ul>
                    <img src="" alt="" className="main-img col" />
                    <p className="view-link">View all this collection {'>'}</p>
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
                        <i class="fa-solid fa-plus col plus"></i>
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
                    <div className="product-detail_body_right_descr row" onClick={()=>setTriggerDescr(!triggerDescr)}>
                        <h1 className="col">Description</h1>
                        <i class="fa-solid fa-plus col plus"></i>
                        {triggerDescr === true &&
                        <div className="">
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
                            Sacha's low-slung, sculptural silhouette is upholstered with spill-resistant bouclé, making it a go-to piece to enjoy a cuppa.
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
        </div>
    )
}