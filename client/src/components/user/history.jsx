import React, { useState } from "react";
import Axios from "axios";
import "../../styles/history.css";
import DetailModal from "./detailModal";
import PDFFile from "../helper/pdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Loading from "../helper/loading";

export default function History({accountHistory, setAlert, setOpenAlert}) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState();

  const hanldeDownload = () => {
    setAlert({
      type: 'success', 
      message: 'Download successfully!'
    })
    setOpenAlert(true);
  }

  // for fragment
  const [currentFragment, setCurrentFragment] = useState(0);
  const [listFragment, setlistFragment] = useState([0 , 1 , 2]);
  const maxOfFragment = 7;
  const numberOfFragment = Math.ceil(accountHistory.length * 1.0 / maxOfFragment);
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
    let start = accountHistory.length-((numberOfFragment-1)*maxOfFragment);
    for(let i=start; i<7; i++)
      list.push(<div key={accountHistory.length+i-start} className={"table_row " + (((i + (accountHistory.length%2) + 1)%2 === 0) ? "odd_row" : "even_row") + (i===6 ? " last-row_shadow" : "")}></div>)
    return list
  }

  const handleOpenModal = (id) => {
    // setOpenLoading(true);
    Axios.post("https://hifurdez.vercel.app/user/order/detail", {
      id:id
    })
      .then((response) => {
        setModalData(response.data);
        // setOpenLoading(false);
        setOpenModal(true);
      })
      .catch((err)=>{
        setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
        setOpenAlert(true)
      })
  }

  return (
    <div className="history_container">
      <DetailModal trigger={openModal} setTrigger={setOpenModal} modalData={modalData}/>
      <div className="history_content">
        <div className="search_container">
          <input 
            type="text" 
            placeholder="Search..." />
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="1em" height="1em">
              <path 
              fill="none" 
              stroke="currentColor" 
              stroke-linecap="round" 
              stroke-width="2" 
              d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/>
          </svg>
        </div>
        <div className="table_ctn">
          <div className="history_table">
            <div className="table_row first_row">
              <div className="table_ele">
                <p>Order Date</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele">
                <p>Delivery Date</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele">
                <p>Order code</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Total amount</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele">
                <p className="left_align">Total payment</p>
                <button>
                  <i className="fa-solid fa-up-down"></i>
                </button>
              </div>
              <div className="table_ele">
                <p>Export order</p>
              </div>
              <div className="table_ele">
                <p>Detail</p>
              </div>
            </div>
            {accountHistory.map((item, index)=>{
              return (
                <div className={"table_row " + (index%2 ? "odd_row" : "even_row ") + (index===6 ? "last-row_shadow" : "")}>
                  <div className="table_ele">
                    <p>{item.order_date}</p>
                  </div>
                  <div className="table_ele">
                    <p>{item.delivery_date}</p>
                  </div>
                  <div className="table_ele">
                    <p>{item.code}</p>
                  </div>
                  <div className="table_ele">
                    <p>{item.product_amount}</p>
                  </div>
                  <div className="table_ele">
                    <p>${item.amount_total}</p>
                  </div>
                  <div className="table_ele">
                    <PDFDownloadLink document={<PDFFile type={"History"}/>} fileName="History">
                      {({loading}) => (loading && <Loading />)}
                      <button className="download_btn" onClick={() => hanldeDownload()}>
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke-width="1.5" 
                          stroke="currentColor" 
                          className="w-6 h-6">
                            <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                      </button>
                    </PDFDownloadLink>
                  </div>
                  <div className="table_ele">
                    <button onClick={ () => handleOpenModal(item.order_id) }>Detail</button>
                  </div>
                </div>
              )
            })}
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
      </div>
    </div>
  )
}