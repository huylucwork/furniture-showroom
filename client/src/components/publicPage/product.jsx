import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/product.css";
import Sort from "./sort";

export default function Product( {
  collectionProduct, categoryProduct,
  filterCollection, setFilterCollection, filterCategory, setFilterCategory,
  items
} ) {

  const productArr = ["Price: Low to high", "Price: High to low"];

  const navigate = useNavigate();

  const RenderProduct = () => {
    let list = [];
    for(var i = 0; i < 16; i++){
      list.push(
        <div 
          key={i}
          className="product_element" 
          onClick={()=>navigate("../product-detail")}>
            <div className="contain_img">
              <img 
                src="https://res.cloudinary.com/castlery/image/private/b_rgb:FFFFFF,c_fit,f_auto,q_auto,w_1000/v1624966277/crusader/variants/T50440968-TL4002-SV/Adams-Ottoman-Pearl-Beige-Silver-Leg-Lifestyle-Crop.jpg" 
                alt=""
                className="firstImg"/>
              <img 
                src="https://res.cloudinary.com/castlery/image/private/b_rgb:eae0d3,c_fit,f_auto,q_auto,w_1000/v1619341174/crusader/variants/T50440968-TL4002-SV/Adams-Ottoman-Pearl-Beige-Silver-Front.jpg" 
                alt=""/>
            </div>
            <h2>Name of Item</h2>
            <p>$123</p>
        </div>
      )
    }
    return list;
  }


  return (
    <div className="product_container">
      <div className="product_sidebar">
        <div className="sidebar_element">
          <h2>Collection</h2>
          {collectionProduct.map((collection, index) => {
            return (
              <button className={filterCollection === collection ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collection)}>
                {collectionProduct[index]}
              </button>
            )
          })}
        </div>
        
        <div className="sidebar_element">
          <h2>Category</h2>
          {categoryProduct.map((category, index) => {
            return (
              <button className={filterCategory === category? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(category)}>
                {categoryProduct[index]}
              </button>
            )
          })}
        </div>
      </div>
      <div className="admin_sort">
        <h2>Sort by:</h2>
        <Sort trigger="product" setCount={0} optsArray={productArr}/>
      </div>
      <div className="product_content">
        <div className="product_row">
          {items.map((item, index)=> {
            return index < 16 && (
              <div 
                key={item.sku}
                className="product_element" 
                onClick={()=>navigate("../product-detail")}>
                  <div className="contain_img">
                    <img 
                      src={item.product_image_2} 
                      alt=""
                      className="firstImg"/>
                    <img 
                      src={item.product_image_1} 
                      alt=""/>
                  </div>
                  <div className="text">
                    <h2>{item.product_name}</h2>
                    <p className={item.discount_price && "price-discount"}>$ {item.price}</p>
                    {item.discount_price && <p>$ {item.discount_price}</p>}
                  </div>
              </div>
            )
          })}
        </div>
        <div className="product_row">
          <div className="history_pagination">
            <a className="text_pagination" href="#">
              <p>Previous</p>
            </a>
            <a className="pagination_focus" href="#">
              <p>1</p>
            </a>
            <a href="#">
              <p>2</p>
            </a>
            <a href="#">
              <p>3</p>
            </a>
            <a className="text_pagination" href="#">
              <p>Next</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}