import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/product.css";
import Sort from "./sort";
import ScrollToTop from "../../utils/scrollToTop";

export default function Product( {
  collectionProduct, categoryProduct,
  filterCollection, setFilterCollection, filterCategory, setFilterCategory,
  items
} ) {

  const productArr = ["Price: Low to high", "Price: High to low"];

  const navigate = useNavigate();

  //filter
  const [filterItems, setFilterItems] = useState([])

  useEffect(()=>{
    setFilterItems([]);
    if (filterCollection === collectionProduct[0] && filterCategory === categoryProduct[0])
      setFilterItems(items);
    else if (filterCategory === categoryProduct[0]){
      items.map((item) => item.collection_name === filterCollection && setFilterItems(oldArray => [...oldArray, item]));
    }
    else if (filterCollection === collectionProduct[0]) {
      items.map((item) => item.category_name === filterCategory && setFilterItems(oldArray => [...oldArray, item]));
    }
    else {
      items.map((item) => item.category_name === filterCategory && item.collection_name === filterCollection 
        && setFilterItems(oldArray => [...oldArray, item]));
    }
    setlistFragment([0,1,2]);
    setCurrentFragment(0);
    console.log(filterCategory)
    console.log(filterCollection)
  },[filterCollection, filterCategory])

  // for fragment
  const [currentFragment, setCurrentFragment] = useState(0);
  const [listFragment, setlistFragment] = useState([0 , 1 , 2]);
  const maxOfFragment = 20;
  const numberOfFragment = Math.ceil(filterItems.length * 1.0 / maxOfFragment);
  function prevFragment() {
    if (currentFragment > 0) {
      setCurrentFragment(currentFragment - 1);
      currentFragment === 1 ?
        setlistFragment([0,1,2]):
        setlistFragment([currentFragment-2, currentFragment-1, currentFragment]);
    }
  }
  function nextFragment() {
    if (currentFragment < numberOfFragment - 1) {
      setCurrentFragment(currentFragment + 1);
      currentFragment === numberOfFragment - 2 ?
        setlistFragment([numberOfFragment - 3, numberOfFragment - 2, numberOfFragment -1]):
      setlistFragment([currentFragment, currentFragment + 1, currentFragment + 2]);
    }
  }

  const ListFragment = ( {value, index} ) => {
    if ((value === 0 && index === 0))
      return (
        <p key={index} 
          className={currentFragment === 0 && "pagination_focus"}
          onClick={() => {
            setCurrentFragment(0)
            setlistFragment([0,1,2])
          }}>
            <button>{value + 1}</button>
        </p>
      )
    else if (value === numberOfFragment - 1 && index === 2)
      return (
        <p key={index} 
          className={value === currentFragment && "pagination_focus"}
          onClick={() => {
            setCurrentFragment(numberOfFragment - 1)
            setlistFragment([numberOfFragment - 3, numberOfFragment - 2, numberOfFragment -1])
          }}>
            <button>{value + 1}</button>
        </p>
      )
    else
      return (
        <p key={index} 
          className={value === currentFragment && "pagination_focus"}
          onClick={() => {
            setCurrentFragment(value)
            setlistFragment([value-1, value, value+1])
          }}>
            <button>{value + 1}</button>
        </p>
      )
  }

  useEffect(() => {
    window.scrollTo({ top: 0})
  }, [currentFragment]);

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
          {filterItems.map((item, index)=> {
            return index >= currentFragment * maxOfFragment && 
                  index < (currentFragment + 1) * maxOfFragment && (
              <div 
                key={item.id} 
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
                    <p> 
                      <span className={item.discount_price && "price-discount"}>$ {item.price}</span>
                      {item.discount_price && <span>  $ {item.discount_price}</span>}
                    </p>
                  </div>
              </div>
            )
          })}
        </div>
        <div className="product_row">
          <div className="history_pagination">
            <p className="text_pagination" onClick={prevFragment}>
              <button>Previous</button>
            </p>

            {numberOfFragment > 2 && listFragment.map((value, index) => <ListFragment value={value} index={index} />) }
            {numberOfFragment <= 2 && listFragment.map((value, index) => {
              if (index === 0) {
                return(
                  <p key={index} 
                    className={currentFragment === 0 && "pagination_focus"}
                    onClick={() => {
                      setCurrentFragment(0)
                      setlistFragment([0,1,2])
                    }}>
                      <button>{value + 1}</button>
                  </p>
                )
              }
              else if (numberOfFragment === 2 && index === 1) {
                return(
                  <p key={index} 
                    className={currentFragment === 1 && "pagination_focus"}
                    onClick={() => {
                      setCurrentFragment(1)
                      setlistFragment([0,1,2])
                    }}>
                      <button>{value + 1}</button>
                  </p>
                )
              }
            }) }

            <p className="text_pagination" onClick={nextFragment}>
              <button>Next</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}