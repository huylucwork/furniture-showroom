import React, { useState, useEffect } from "react";
import "../../styles/product.css";

export default function Product() {
  function handleClick(e) {
    let childElement = e.target.parentElement.children;
    for (let index = 0; index < childElement.length; ++index) {
      let element = childElement[index];
        if(element.classList.contains("history_sidebar_focus")) {
          element.classList.remove("history_sidebar_focus");
        }
    }  
    e.target.classList.add("history_sidebar_focus");
  }
  return (
    <div className="product_container">
      <div className="product_sidebar">
        <div className="sidebar_element">
          <h2>Collection</h2>
          <a href="#" onClick={handleClick}>Spring</a>
          <a href="#" onClick={handleClick}>Summer</a>
          <a href="#" onClick={handleClick}>Autumn</a>
          <a href="#" className="history_sidebar_focus" onClick={handleClick}>Winter</a>
        </div>
        <div className="sidebar_element">
          <h2>Category</h2>
          <a href="#" className="history_sidebar_focus" onClick={handleClick}>Sofas</a>
          <a href="#" onClick={handleClick}>Tables</a>
          <a href="#" onClick={handleClick}>Chairs</a>
          <a href="#" onClick={handleClick}>Storages</a>
        </div>
        <div className="sidebar_element">
          <h2>Collection</h2>
          <a href="#" onClick={handleClick}>Spring</a>
          <a href="#" className="history_sidebar_focus" onClick={handleClick}>Summer</a>
          <a href="#" onClick={handleClick}>Autumn</a>
          <a href="#" onClick={handleClick}>Winter</a>
        </div>
      </div>
      <div className="admin_sort">
        <h2>Sort by:</h2>
        <select>
          <option>Price: Low to high</option>
          <option>Price: Low to high</option>
          <option>Price: Low to high</option>
        </select>
      </div>
      <div className="product_content">
        <div className="product_row">
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
        </div>
        <div className="product_row">
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
          <div className="product_element">
            <img src="" alt="" />
            <h2>Name of Item</h2>
            <p>$123</p>
          </div>
        </div>
      </div>
      <div className="history_pagination  product_pagination">
        <a className="history_pagination_link history_pagination-text" href="#">
          <p>Previous</p>
        </a>
        <a className="history_pagination_link product_pagination-focus" href="#">
          <p>1</p>
        </a>
        <a className="history_pagination_link" href="#">
          <p>2</p>
        </a>
        <a className="history_pagination_link" href="#">
          <p>3</p>
        </a>
        <a className="history_pagination_link history_pagination-text" href="#">
          <p>Next</p>
        </a>
      </div>
    </div>
  )
}