import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Axios from "axios";
import "../../styles/productDetail.css";
import Loading from "../helper/loading";

export default function ProductDetail ( {
    filterCollection, filterCategory, 
    setFilterCategory, setFilterCollection,
    collectionProduct, categoryProduct,
    productDetail, setProductDetail,
    setAlert, setOpenAlert, setOpenLoading
} ) {

    const [chosenImg, setChosenImg] = useState([0,0]);
    const [itemCount, setItemCount] = useState(1);
    const [triggerAbout, setTriggerAbout] = useState(false);
    const [triggerPolicy, setTriggerPolicy] = useState(false);
    const [recommend, setRecommend] = useState([]);
    const [images, setImages] = useState([]);
    const [videos, setVideos] = useState([]);

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(()=>{
        Axios.post("https://hifurdez.vercel.app/product-by-id", {
            id: id
        })
            .then((response) => {
                if (response.data.length) {
                    setProductDetail(response.data[0]);
                }
                else {
                    setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                    setOpenAlert(true)
                }
            })
            .catch(err => {
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            });
    },[id])

    useEffect(()=>{  
        Axios.get("https://hifurdez.vercel.app/product-random")
            .then((response) => {
                setRecommend(response.data);
            })
            .catch(err => {
                setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
                setOpenAlert(true)
            }); 
    },[])

    useEffect(()=>{
        if (productDetail) {
            let list = [];
            let list2 = [];
            for(let i=0; i<14; i++)
                if (productDetail["media_"+i] !== '') 
                    if (productDetail["media_"+i].search('.mp4') !== -1)
                        list2.push(productDetail["media_"+i]);
                    else list.push(productDetail["media_"+i]);
            setImages(list);
            setVideos(list2);
        }
    }, [productDetail])

    return (productDetail && id == productDetail.id) ? (
        <div className="product-detail_container">
                <div className="product-detail_route">
                    <span>Product</span> / <span>{collectionProduct[productDetail.collection_id]}</span> / <span>{categoryProduct[productDetail.category_id]}</span> / <span className="product-detail_route_name">{productDetail.product_name}</span>
                </div>
                <div className="product-detail_body">
                    <div className="product-detail_body_left row g-0">
                        <div className="col-2">
                            <ul className="sub-img_container">
                                {images.map((img, index)=>{
                                    return chosenImg[0] === index && !chosenImg[1] ? (
                                        <li key={index} className="sub-img chosen"><img src={img} alt="" onClick={()=>setChosenImg([index, 0])}/></li>
                                    ) : (
                                        <li key={index} className="sub-img"><img src={img} alt="" onClick={()=>setChosenImg([index, 0])}/></li>
                                    )
                                })}
                                {videos.map((vid, index)=>{
                                    return chosenImg[0] === index && chosenImg[1] ? (
                                        <li key={index+images.length} className="sub-img chosen" onClick={()=>{setChosenImg([index,1])}}>
                                            <video>
                                                <source src={vid} type="video/mp4"/>
                                            </video>
                                        </li>
                                    ) : (
                                        <li key={index+images.length} className="sub-img" onClick={()=>{setChosenImg([index,1])}}>
                                            <video>
                                                <source src={vid} type="video/mp4"/>
                                            </video>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div className="col">
                            {chosenImg[1] ? 
                                <video key={chosenImg[0]} className="main-img" controls autoPlay>
                                    <source src={videos[chosenImg[0]]} type="video/mp4"/>
                                </video>:
                                <img src={images[chosenImg[0]]} alt="" className="main-img" />
                            }
                        </div>
                        <p className="view-link" 
                            onClick={()=>{
                                setFilterCollection(collectionProduct[productDetail.collection_id]); 
                                setFilterCategory('All'); 
                                navigate('../product')}}>
                            View all this collection {'>'}
                        </p>
                    </div>
                    
                    <div className="product-detail_body_right">
                        <p className="product-detail_body_right_name">{productDetail.product_name}</p>
                        <p className="product-detail_body_right_price">
                            <span className={(productDetail.discount_price !== productDetail.price ? "discount-price" : '')}>
                                ${productDetail.price}
                            </span>
                            {productDetail.discount_price !== productDetail.price && <span> ${productDetail.discount_price}</span>}
                        </p>
                        <p className="product-detail_body_right_quote">{productDetail.description}</p>
                        <div className="product-detail_body_right_icon">    
                            {itemCount === 1 ?
                            <button className="button-minus limit">-</button>:
                            <button className="button-minus" onClick={()=>setItemCount(itemCount-1)}>-</button>}
                            <p>{itemCount}</p>
                            <button className="button-plus" onClick={()=>setItemCount(itemCount+1)}>+</button>
                        </div>
                        <button className="product-detail_body_right_add">
                            Add to cart - ${productDetail.discount_price*itemCount}
                        </button>
                        <div className="product-detail_body_right_about row" onClick={()=>setTriggerAbout(!triggerAbout)}>
                            <h1 className="col">About</h1>
                            <i className="fa-solid fa-plus col plus"></i>
                            {triggerAbout === true &&
                            <div className="about_container">
                                <p className="about_container_left">Material:</p>
                                <p className="about_container_right">{productDetail.material}</p>
                                <p className="about_container_left">Dimension:</p>
                                <p className="about_container_right">W-{productDetail.width} x D-{productDetail.depth} x H-{productDetail.height}</p>
                                <p className="about_container_left">Color:</p>
                                <p className="about_container_right">{productDetail.color}</p>
                            </div>}
                        </div>
                        <div className="product-detail_body_right_policy row" onClick={()=>setTriggerPolicy(!triggerPolicy)}>
                            <h1 className="col">Policy</h1>
                            <i className="fa-solid fa-plus col plus"></i>
                            {triggerPolicy === true &&
                            <div className="policy_container">
                                <p>Free shipping in Ho Chi Minh City.</p>
                                <p>3 years warranty for Sofas. Lifetime maintenance.</p>
                                <p>0% interest installment payment for credit card across 24 banks.</p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="product-detail_recommend">
                    <h1>You may also like</h1>
                    <div className="row items">
                        {recommend.map((item,index)=>{
                            return index < 4 && (
                                <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${item.id}`)}}>
                                    <div className="detail_ctn">
                                        <img src={item.media_1} alt="" />
                                        <img src={item.media_0} alt="" />
                                    </div>
                                    <h2>{item.product_name}</h2>
                                    <p>$ {item.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="product-detail_recommend">
                    <h1>Best seller</h1>
                    <div className="row items">
                        {recommend.map((item,index)=>{
                            return index >= 4 && (
                                <div key={index} className="col item" onClick={()=>{navigate(`../product-detail/${item.id}`)}}>
                                    <div className="detail_ctn">
                                        <img src={item.media_1} alt="" />
                                        <img src={item.media_0} alt="" />
                                    </div>
                                    <h2>{item.product_name}</h2>
                                    <p>$ {item.price}</p>
                                </div>
                            )
                        })}
                    </div>
                </div>
        </div>
    ) :
    <Loading />
}