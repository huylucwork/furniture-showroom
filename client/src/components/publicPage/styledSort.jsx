import React, {useEffect} from "react";
import "../../styles/sort.css";

export default function StyledSort(props) {
  function handleOptClick(e, num) {
    const headerEle = document.getElementsByClassName("sort-header");
    headerEle[0 + num].textContent = e.target.innerHTML;
    const checkedEle = document.getElementsByClassName("checked-opt");
    checkedEle[0 + num].classList.remove("checked-opt");
    e.target.classList.add("checked-opt");
  }

  function handleBtnClick(num) {
    let check = false;
    const ele = document.getElementsByClassName("sort-opts");
    ele[0 + num].classList.forEach((element) => {
      if(element === "hide-sort")
        check = true;
    });
    check ? ele[0 + num].classList.remove("hide-sort") : ele[0 + num].classList.add("hide-sort");
  }

  function checkType(str) {
    if(str === "product")
      return "sort_ctn product_type";
    else if(str === "manageItem1")
      return "sort_ctn manage_type";
    else if(str === "manageItem2")
      return "sort_ctn manage_type";
    return "sort_ctn checkout_type";
  }

  function firstOpt(str) {
    if(str === "product")
      return "Recommendation";
    else if(str === "manageItem1")
      return "Spring";
    else if(str === "manageItem2")
      return "Red";
    return "BMW";
  }

  return(
    <div className={checkType(props.trigger)}>
      <button 
        type="button" 
        onClick={(e) => 
          {handleBtnClick(props.setCount);
        }}>
        <span className="sort-header">
          {firstOpt(props.trigger)}
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div 
        className="sort-opts hide-sort" 
        onClick={(e) => 
          {handleBtnClick(props.setCount);
        }}>
        <a 
          href="#" 
          role="button" 
          onClick={(e) => 
            {handleOptClick(e, props.setCount);
          }}>
          <h2 className="checked-opt">{firstOpt(props.trigger)}</h2>
        </a>
        <a 
          href="#" 
          role="button" 
          onClick={(e) => 
            {handleOptClick(e, props.setCount);
          }}>
          <h2>Price: Low to high</h2>
        </a>
        <a 
          href="#" 
          role="button" 
          onClick={(e) => 
            {handleOptClick(e, props.setCount);
          }}>
          <h2>Price: High to low</h2>
        </a>
      </div>
    </div>
  )
}