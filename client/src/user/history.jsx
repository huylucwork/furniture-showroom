import { useEffect } from "react";
import React from "react";
import "../styles/history.css";

export default function History() {
  // useEffect(() => {
  //   var history_open_modal = document.querySelectorAll('.history_detail-btn')
  //   var history_icon_close = document.querySelectorAll('.history_detail_close-btn')
  //   var history_modal = document.querySelectorAll('.history_order_detail')

  //   function history_toggleModal() {
  //     history_modal.classList.toggle('history_hide-modal')
  //   }

  //   history_open_modal.addEventListener('click', history_toggleModal)
  // });
  return(
    <div className="history_container">
      <div className="history_order_detail">
        <div className="history_order_detail_wrapper">
          <div className="history_detail_ctn">
            <div className="history_detail_info">
              <div className="history_detail_user-info">
                <p className="history_info_header">Order: S04xxxxxxxxx</p>
                <p className="history_info_text">Date: DD-MM-YYYY</p>
                <p className="history_info_text">NAME: XXXX XXXX XXXX</p>
                <p className="history_info_text">Email: example@email.com</p>
                <p className="history_info_text">Phone: 0123xxxxxx</p>
                <p className="history_info_text">Adress: xxx yyyyy str, xxxxxx, yyyyy, zzzzz</p>
              </div>
              <div className="history_detail_total">
                <p className="history_info_text-total">Total:</p>
                <p className="history_info_number-total">$1000000</p>
              </div>
            </div>
            <div className="history_detail_item">
              <i className="fa-solid fa-xmark history_detail_close-btn"></i>
              <div className="history_detail_item-ctn">
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item-name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item-name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item-name-cat">
                    <p className="history_detail_item-name">Item X</p>
                    <p className="history_detail_item-cat">Category</p>
                  </div>
                  <p className="history_detail_amount">Amount <br></br> 1</p>
                  <p className="history_detail_item-price">Price <br></br> $123</p>
                </div>
                <div className="history_detail_item-info">
                  <div className="history_detail_item-img"></div>
                  <div className="history_detail_item-name-cat">
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
      <div className="history_navbar"></div>
      <div className="history_sidebar">
        <div className="history_sidebar_container">
          <button className="history_user-profile" type="button">
            User Profile
          </button>
          <i className="fa-solid fa-user history_user-icon-profile"></i>
        </div>
        <div className="history_sidebar_container">
          <button className="history_user-history" type="button">
            History
          </button>
          <i className="fa-solid fa-clock-rotate-left history_user-icon-history"></i>
        </div>
      </div>
      <div className="history_content">
        <div className="history_search-container">
          <input className="history_search" type="text" placeholder="Search..." />
          <i class="fa-solid fa-magnifying-glass history_search-icon"></i>       
        </div>
        <div className="history_table">
          <div className="history_table-row history_table-first">
            <div className="history_table-element">
              <p className="history_table-head">Date</p>
              <button className="history_head-btn"></button>
              <i class="fa-solid fa-up-down history_head-icon"></i>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Order code</p>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Total amount</p>
              <button className="history_head-btn"></button>
              <i class="fa-solid fa-up-down history_head-icon"></i>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Total payment</p>
              <button className="history_head-btn"></button>
              <i class="fa-solid fa-up-down history_head-icon"></i>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Export order</p>
            </div>
            <div className="history_table-element">
              <p className="history_table-head">Detail</p>
            </div>
          </div>
          <div className="history_table-row history_table-odd">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button class="history_table-btn history_table_overwrite-bgr"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn history_table_overwrite-bgr"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn history_table_overwrite-bgr"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-even">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row history_table-odd">
            <div className="history_table-element">
              <p className="history_table_text">dd/mm/yy</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">SO4xxxxxxxxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table-btn history_table_overwrite-bgr"><i class="fa-regular fa-circle-down history_download-icon"></i></button>
            </div>
            <div className="history_table-element">
              <button className="history_detail-btn">Detail</button>
            </div>
          </div>
          <div className="history_table-row">
            <div className="history_pagination">
              <a className="history_pagination_link history_pagination-text" href="#">
                <p>Previous</p>
              </a>
              <a className="history_pagination_link" href="#">
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