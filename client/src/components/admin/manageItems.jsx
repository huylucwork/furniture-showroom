import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../../styles/admin.css";
import ModalProduct from "./modalProduct";
import UpdateAdd from "./updateAdd";

export default function ManageItem({
  products, changeProducts, setChangeProducts, 
  setAlert, setOpenAlert, openLoading, setOpenLoading
}) {
  const [buttonModal, setButtonModal] = useState(false);

  const [modalVal, setModalVal] = useState(false);
  const [accountVal, setAccountVal] = useState();

  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [modalData, setModalData] = useState();

  // for fragment
  const [currentFragment, setCurrentFragment] = useState(0);
  const [listFragment, setlistFragment] = useState([0 , 1 , 2]);

    //search
    const [searchKeyword, setSearchKeyword] = useState('');
    const [filterItems, setFilterItems] = useState([]);
  
    useEffect(()=>{
      setFilterItems([]);
      let list = [];
      if (searchKeyword !== '')
        products.forEach(product => {
          product.product_name.includes(searchKeyword) && list.push(product);
        })
      setFilterItems(list);
      setCurrentFragment(0);
      setlistFragment([0,1,2]);
    },[searchKeyword])

  const maxOfFragment = 7;
  const numberOfFragment = Math.ceil((filterItems.length? filterItems : products).length * 1.0 / maxOfFragment);
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

  const RenderEmptyRow =()=>{
    if (currentFragment !== numberOfFragment-1) return '';
    let list = [];
    let start = (filterItems.length? filterItems : products).length-((numberOfFragment-1)*maxOfFragment);
    for(let i=start; i<7; i++)
      list.push(<div key={(filterItems.length? filterItems : products).length+i-start} className={"table_row " + (((i - (((products.length-1)%7)%2))%2 === 0) ? "odd_row" : "even_row") + (i===6 ? " last-row_shadow" : "")}></div>)
    return list
  }

  const handleOpenDetailModal = (id) => {
    setOpenLoading(true);
    Axios.post("https://hifurdez.vercel.app/admin/products/detail", {
      id:id
    })
      .then((response) => {
        setModalData(response.data[0]);
        setOpenLoading(false);
        setOpenDetailModal(true);
      })
      .catch((err)=>{
        setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
        setOpenAlert(true)
      })
  }

  const handleStatusSwitch = (id) => {
    setOpenLoading(true);
    Axios.put("https://hifurdez.vercel.app/admin/products/change-status", {
      id:id
    })
      .then((response) => {
        setChangeProducts(!changeProducts)
        setAlert({type: "success", message: response.data.message});
        setOpenAlert(true);
      })
      .catch(err => {
        setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
        setOpenAlert(true)
      }); 
  }

  return (
    <div className="history_container">
      {openDetailModal && <ModalProduct modalData={modalData} setOpenDetailModal={setOpenDetailModal}/>}
      <div className="history_content">
        <div className="search_container">
          <input 
            type="text" 
            placeholder="Search..." 
            onChange={(e)=>setSearchKeyword(e.target.value)}
          />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" 
            height="1em">
              <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-width="2" 
              d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
          </svg>
          <button 
            className="admin_add"
            onClick={() => {setButtonModal(!buttonModal); setModalVal(false);}} >
              Add new
          </button>
        </div>
        <div className="table_ctn">
          <div className="history_table">
            <div className="table_row first_row">
              {/* <div className="table_ele admin_fix-size-1">
                <p>ID</p>
              </div> */}
              <div className="table_ele admin_fix-size-2">
                <p>collection</p>
              </div>
              <div className="table_ele admin_fix-size-2">
                <p>Category</p>
              </div>
              <div className="table_ele admin_fix-size-3">
                <p>SKU</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele admin_fix-size-3">
                <p className="left_align">Name</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele admin_fix-size-2">
                <p>Price</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele">
                <p>Discount price</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Detail</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Edit</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Status</p>
              </div>
            </div>
            {(filterItems.length? filterItems : products).map((product, index) => {
              return index >= currentFragment * maxOfFragment && 
              index < (currentFragment + 1) * maxOfFragment && (
                <div className={"table_row " + (index%2 ? "odd_row " : "even_row ") + (index===6 ? "last-row_shadow" : "")}>
                  {/* <div className="table_ele admin_fix-size-1">
                    <p>{product.product_id}</p>
                  </div> */}
                  <div className="table_ele admin_fix-size-2">
                    <p>{product.collection}</p>
                  </div>
                  <div className="table_ele admin_fix-size-2">
                    <p>{product.category}</p>
                  </div>
                  <div className="table_ele admin_fix-size-3">
                    <p>{product.sku}</p>
                  </div>
                  <div className="table_ele admin_fix-size-3">
                    <p className="left_align">{product.product_name}</p>
                  </div>
                  <div className="table_ele admin_fix-size-2">
                    <p>${product.price}</p>
                  </div>
                  <div className="table_ele">
                    <p>{product.price === product.discount_price ? '' : '$' + product.discount_price}</p>
                  </div>
                  <div className="table_ele admin_fix-size-1">
                    <button onClick={() => handleOpenDetailModal(product.product_id)}>Detail</button>
                  </div>
                  <div className="table_ele admin_fix-size-1">
                    <button onClick={()=>{setButtonModal(true); setModalVal(1); setAccountVal(product)}}>Edit</button>
                  </div>
                  <div className="table_ele admin_fix-size-1">
                    <button 
                      className= {product.is_active ? "admin_active-btn": "admin_locked-btn"}
                      onClick={() => handleStatusSwitch(product.product_id)}>
                      {product.is_active ? "Active" : "Locked"}
                    </button>
                  </div>
                </div>
              )
            })

            }
            <RenderEmptyRow />
          </div>
        </div>
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
        <UpdateAdd 
          trigger={[buttonModal, modalVal]} 
          setTrigger={setButtonModal} 
          changeProducts={changeProducts}
          setChangeProducts={setChangeProducts}
          accountVal={accountVal}
        />
      </div>
    </div>
  )
}