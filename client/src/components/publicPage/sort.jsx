import React, { useRef, useEffect, useState } from "react";
import "../../styles/sort.css";

export default function Sort(props) {
  
  const [hide, setHide] = useState(true);
  const [checked, setChecked] = useState(false);
  const [header, setHeader] = useState(props.optsArray[0]);

  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  function checkType(str) {
    if(str === "product")
      return "sort_ctn product_type";
    else if(str === "manage")
      return "sort_ctn manage_type";
    return "sort_ctn checkout_type";
  }

  function OptList() {
    const myArr = [];
    props.optsArray.forEach((element, index) => {
      myArr.push(<a 
                  key = {index}
                  href="#" 
                  role="button" 
                  onClick={(e) => {setChecked(!checked); setHeader(element)}}>
                    <h2>{element}</h2>
                </a>);
    })
    return myArr
  }

  function useOutsideAlerter(ref) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setHide(true);
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
        onClick={() => {setHide(!hide)}}>
        <span className="sort-header">
          {header}
        </span>
        <i className="fa-solid fa-chevron-down"></i>
      </button>
      <div 
        className={"sort-opts " + (hide && "hide-sort")} 
        onClick={() => {setHide(!hide)}}>
          <OptList></OptList>
      </div>
    </div>
  )
}