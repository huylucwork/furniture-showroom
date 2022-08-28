import { useEffect } from "react";
import React from "react";
import "../styles/history.css";

export default function History() {
  return(
    <div className="history_container">
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
          <div className="history_table-row"></div>
        </div>
      </div>
    </div>
  )
}