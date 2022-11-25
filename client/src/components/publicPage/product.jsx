import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/product.css";
import Sort from "./sort";

export default function Product( {
  collectionProduct, categoryProduct,
  filterCollection, setFilterCollection, filterCategory, setFilterCategory
} ) {

  const productArr = ["Price: Low to high", "Price: High to low"];

  const navigate = useNavigate();

  return (
    <div className="product_container">
      <div className="product_sidebar">
        <div className="sidebar_element">
          <h2>Collection</h2>
          <button className={filterCollection === collectionProduct[0] ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collectionProduct[0])}>
            {collectionProduct[0]}
          </button>
          <button className={filterCollection === collectionProduct[1] ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collectionProduct[1])}>
            {collectionProduct[1]}
          </button>
          <button className={filterCollection === collectionProduct[2] ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collectionProduct[2])}>
            {collectionProduct[2]}
          </button>
          <button className={filterCollection === collectionProduct[3] ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collectionProduct[3])}>
            {collectionProduct[3]}
          </button>
          <button className={filterCollection === collectionProduct[4] ? "button_selected" : ""} 
                  onClick={()=>setFilterCollection(collectionProduct[4])}>
            {collectionProduct[4]}
          </button>
        </div>
        
        <div className="sidebar_element">
          <h2>Category</h2>
          <button className={filterCategory === categoryProduct[0]? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(categoryProduct[0])}>
            {categoryProduct[0]}
          </button>
          <button className={filterCategory === categoryProduct[1]? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(categoryProduct[1])}>
            {categoryProduct[1]}
          </button>
          <button className={filterCategory === categoryProduct[2]? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(categoryProduct[2])}>
            {categoryProduct[2]}
          </button>
          <button className={filterCategory === categoryProduct[3]? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(categoryProduct[3])}>
            {categoryProduct[3]}
          </button>
          <button className={filterCategory === categoryProduct[4]? "button_selected" : ''} 
                  onClick={()=>setFilterCategory(categoryProduct[4])}>
            {categoryProduct[4]}
          </button>
        </div>
      </div>
      <div className="admin_sort">
        <h2>Sort by:</h2>
        <Sort trigger="product" setCount={0} optsArray={productArr}/>
      </div>
      <div className="product_content">
        <div className="product_row">
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element" onClick={()=>navigate("../product-detail")}>
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
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