import React from "react";
import "../../styles/history.css";

export default function History(props) {
  function history_openModal() {
    var history_order_detail_list = document.getElementsByClassName('history_order_detail');
    history_order_detail_list[0].classList.remove('history_hide-modal');
  }

  function history_closeModal() {
    var history_order_detail_list = document.getElementsByClassName('history_order_detail');
    history_order_detail_list[0].classList.add('history_hide-modal');
  }

  return (
    <div className="history_container">
      <div className="history_order_detail history_hide-modal">
        <div className="history_order_detail_wrapper">
          <div className="history_detail_ctn">
            <div className="history_detail_info">
              <div className="history_detail_user-info">
                <div className="history_info">
                  <p className="history_info_title">Order:</p>
                  <p className="history_info_customer_detail">SO40000087</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">Date:</p>
                  <p className="history_info_customer_detail">02-09-2022</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">User Name:</p>
                  <p className="history_info_customer_detail">anhbo123</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">Name:</p>
                  <p className="history_info_customer_detail">anhbodantruong</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">Email:</p>
                  <p className="history_info_customer_detail">bolaanh@gmail.com</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">Phone:</p>
                  <p className="history_info_customer_detail">0938608456</p>
                </div>
                <div className="history_info">
                  <p className="history_info_title">Address:</p>
                  <p className="history_info_customer_detail">340 Madison Avenue Sixth Floor New York, NY 10173 USA</p>
                </div>
              </div>
              <div className="history_detail_total">
                <p className="history_info_text-total">Total:</p>
                <p className="history_info_number-total">$1000000</p>
              </div>
            </div>
            <div className="history_detail_item">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" className="history_detail_close-btn" onClick={history_closeModal}><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 30L30 2m0 28L2 2"/></svg>
              <div className="history_detail_item-ctn">
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item_name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="history_content">
        <div className="history_search-container">
          <input className="history_search" type="text" placeholder="Search..." />
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" className="history_search-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/></svg>
        </div>
        <div className="history_table">
          <div className="history_table-row history_table-first history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table-head">Date</p>
              <button className="history_head-btn">
                <i className="fa-solid fa-up-down history_head-icon"></i>
              </button>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Order code</p>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Total amount</p>
              <button className="history_head-btn">
                <i className="fa-solid fa-up-down history_head-icon"></i>
              </button>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Total payment</p>
              <button className="history_head-btn">
                <i className="fa-solid fa-up-down history_head-icon"></i>
              </button>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Export order</p>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Detail</p>
            </div>
          </div>
          <div className="history_table-row history_table-odd history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even history_table-row_horizontal-shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd history_table-row_shadow">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text history_table_text_left-align">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 history_download-icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              </button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn" onClick={history_openModal}>Detail</button>
            </div>
          </div>
          <div className="history_table-row">
            <div className="history_pagination">
              <a className="history_pagination_link history_pagination-text" href="#">
                <p>Previous</p>
              </a>
              <a className="history_pagination_link history_pagination_link_focus" href="#">
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
        </div>
      </div>
    </div>
  ) 
}