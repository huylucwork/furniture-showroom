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
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024" class="history_user-icon"><path fill="currentColor" d="M858.5 763.6a374 374 0 0 0-80.6-119.5a375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1c-.4.2-.8.3-1.2.5c-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8c2-77.2 33-149.5 87.8-204.3c56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"/></svg>        
        </div>
        <div className="history_sidebar_container">
          <button className="history_user_sidebar-btn history_user-history history_sidebar_focus" type="button">
            History
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 16 16" class="history_user-icon"><path fill="currentColor" d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/></svg>
        </div>
      </div>
      <div className="history_content">
        <div className="history_search-container">
          <input className="history_search" type="text" placeholder="Search..." />
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="history_search-icon"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21l-4.486-4.494M19 10.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0Z"/></svg>
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
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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
              <p className="history_table_text">xxx</p>
            </div>
            <div className="history_table-element">
              <p className="history_table_text">$xxx</p>
            </div>
            <div className="history_table-element">
              <button className="history_table_download-btn history_table_overwrite-bgr">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 history_download-icon">
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