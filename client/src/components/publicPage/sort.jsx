import React, { useRef, useEffect } from "react";
import "../../styles/sort.css";

export default function Sort(props) {
  
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  var modalType = props.trigger;

  function handleOptClick(e, num, str) {
    let headerEle = document.getElementsByClassName("sort-header");
    headerEle[0 + num].textContent = e.target.innerHTML;
    if(str === "manageItem1" || str == "manageItem2")
      return ;
    let checkedEle = document.getElementsByClassName("checked-opt");
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

  function checkedOtp(str) {
    if(str == "manageItem1" || str == "manageItem2")
      return "";
    else
      return "checked-opt";
  }

  function OptList() {

    const tmpArr = props.optsArray;

    function optArr(arr) {
      const myArr = [];
      arr.forEach((element) => {
        myArr.push(<a 
                    key = {element}
                    href="#" 
                    role="button" 
                    onClick={(e) => 
                      {handleOptClick(e, props.setCount, modalType);
                    }}>
                    <h2>{element}</h2>
                  </a>);
      })
      return myArr;
    }

    return (
      <React.Fragment>
        {optArr(tmpArr)}
      </React.Fragment>
    )
  }

  function hideOtp(num) {
    var ele = document.getElementsByClassName("sort-opts");
    ele[0 + num].classList.add("hide-sort");
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          hideOtp(props.setCount);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }

  return (
    <div ref={wrapperRef} className={checkType(props.trigger)}>
      <button 
        type="button" 
        onClick={() => 
          {handleBtnClick(props.setCount);
        }}>
        <span className="sort-header">
          {firstOpt(props.trigger)}
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div 
        className="sort-opts hide-sort" 
        onClick={() => 
          {handleBtnClick(props.setCount);
        }}>
        <a 
          href="#" 
          role="button" 
          onClick={(e) => 
            {handleOptClick(e, props.setCount, modalType);
          }}>
          <h2 className={checkedOtp(props.trigger)}>{firstOpt(props.trigger)}</h2>
        </a>
        <OptList></OptList>
      </div>
    </div>
  )
}