import React, { useState, useEffect } from "react";
import "../../styles/product.css";

export default function Product() {
    return (
      <div className="product_container">
        <div className="product_sidebar">
          <div className="sidebar_element">
            <h2>Collection</h2>
            <a href="#">Spring</a>
            <a href="#">Summer</a>
            <a href="#">Autumn</a>
            <a href="#" className="history_sidebar_focus">Winter</a>
          </div>
          <div className="sidebar_element">
            <h2>Category</h2>
            <a href="#" className="history_sidebar_focus">Sofas</a>
            <a href="#">Tables</a>
            <a href="#">Chairs</a>
            <a href="#">Storages</a>
          </div>
          <div className="sidebar_element">
            <h2>Collection</h2>
            <a href="#">Spring</a>
            <a href="#" className="history_sidebar_focus">Summer</a>
            <a href="#">Autumn</a>
            <a href="#">Winter</a>
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
        <div className="product_content">
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
        <div className="history_pagination admin_pagination">
          <a className="history_pagination_link history_pagination-text" href="#">
            <p>Previous</p>
          </a>
          <a className="history_pagination_link admin_pagination-focus" href="#">
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