import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/product.css";
import Sort from "./sort";

export default function Product( {
  collectionProduct, categoryProduct,
  filterCollection, setFilterCollection, filterCategory, setFilterCategory
} ) {

  const productArr = ["Price: Low to high", "Price: High to low"];

  const [zoomIn, setZoomIn] = useState(false);

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
                src="./img/autumn.jpg" 
                alt=""
                className={"firstImg"}/>
              <img 
                src="./img/autumn2.jpg" 
                alt=""
                className="secondImg"/>
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
          <RenderProduct />
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