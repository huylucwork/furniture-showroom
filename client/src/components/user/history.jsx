import React, { useState } from "react";
import "../../styles/history.css";
import DetailModal from "./detailModal";
import PDFFile from "../helper/pdfFile";
import { PDFDownloadLink } from "@react-pdf/renderer";
import Loading from "../helper/loading";

export default function History({accountHistory}) {
  const [openModal, setOpenModal] = useState(false);

  const RenderColumn =()=>{
    let list = []
    for(let i=0; i<7; i++)
      list.push(
        <div className={"table_row " + (i%2 ? "odd_row" : "even_row ") + (i===6 ? "last-row_shadow" : "")}>
          <div className="table_ele">
            <p>dd/mm/yy</p>
          </div>
          <div className="table_ele">
            <p>SO4xxxxxxxxx</p>
          </div>
          <div className="table_ele">
            <p className="left_align">xxx</p>
          </div>
          <div className="table_ele">
            <p className="left_align">$xxx</p>
          </div>
          <div className="table_ele">
            <PDFDownloadLink document={<PDFFile type={"History"}/>} fileName="History">
              {({loading}) => (loading && <Loading />)}
              <button className="download_btn">
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
            <button onClick={ () => setOpenModal(true) }>Detail</button>
          </div>
        </div>)
    return list;
  }

  return (
    <div className="history_container">
      <DetailModal trigger={openModal} setTrigger={setOpenModal} />
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
                <p>Date</p>
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
            <RenderColumn />
          </div>
        </div>
        <div className="history_pagination">
          <p className="text_pagination">
            <button>Previous</button>
          </p>
          <p className="pagination_focus">
            <button>1</button>
          </p>
          <p>
            <button>2</button>
          </p>
          <p>
            <button>3</button>
          </p>
          <p className="text_pagination">
            <button>Next</button>
          </p>
        </div>
      </div>
    </div>
  )
}