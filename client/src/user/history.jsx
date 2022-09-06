import React from "react";
import "../styles/history.css";

export default function History() {
  function history_openModal() {
    var history_order_detail_list = document.getElementsByClassName('history_order_detail');
    history_order_detail_list[0].classList.remove('history_hide-modal');
  }

  function history_closeModal() {
    var history_order_detail_list = document.getElementsByClassName('history_order_detail');
    history_order_detail_list[0].classList.add('history_hide-modal');
  }

  // function history_sidebar_history_focus() {
  //   var history_sidebar_focus_list = document.querySelectorAll('.history_user-history');
  //   history_sidebar_focus_list[0].classList.add('history_sidebar_focus');
  //   history_sidebar_focus_list = document.querySelectorAll('.history_user-profile');
  //   if(history_sidebar_focus_list[0].classList.contains('history_sidebar_focus'))
  //     history_sidebar_focus_list[0].classList.remove('history_sidebar_focus');
  // }

  // function history_sidebar_profile_focus() {
  //   var history_sidebar_focus_list = document.querySelectorAll('.history_user-profile');
  //   history_sidebar_focus_list[0].classList.add('history_sidebar_focus');
  //   history_sidebar_focus_list = document.querySelectorAll('.history_user-history');
  //   if(history_sidebar_focus_list[0].classList.contains('history_sidebar_focus'))
  //     history_sidebar_focus_list[0].classList.remove('history_sidebar_focus');
  // }
  
  // function history_pagination_link_focus() {
  //   document.querySelectorAll('.history_pagination_link').forEach(element => {
  //     if(element.classList.contains('history_pagination_link_focus') && !element.classList.contains('history_pagination-text')) {
  //       element.classList.remove('history_pagination_link_focus');
  //     }
  //   });
  // };

  return(
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
              <i className="fa-solid fa-xmark history_detail_close-btn" onClick={history_closeModal}></i>
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
      <div className="history_navbar"></div>
      <div className="history_sidebar">
        <div className="history_sidebar_container">
          <button className="history_user_sidebar-btn" type="button">
            Profile
          </button>
          <i class="fa-regular fa-user history_user-icon"></i>
        </div>
        <div className="history_sidebar_container">
          <button className="history_user_sidebar-btn history_user-history history_sidebar_focus" type="button">
            History
          </button>
          <i className="fa-solid fa-clock-rotate-left history_user-icon"></i>
        </div>
      </div>
      <div className="history_content">
        <div className="history_search-container">
          <input className="history_search" type="text" placeholder="Search..." />
          <i className="fa-solid fa-magnifying-glass history_search-icon"></i>       
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn history_table_overwrite-bgr"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn history_table_overwrite-bgr"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn history_table_overwrite-bgr"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_dowload-btn history_table_overwrite-bgr"><i className="fa-regular fa-circle-down history_download-icon"></i></button>
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