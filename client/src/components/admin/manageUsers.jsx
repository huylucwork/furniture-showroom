import React, { useState } from "react";
import Axios from "axios";
import "../../styles/admin.css";
import ModalUser from "./modalUser";

export default function ManageUser( {
  users, changeUsers, setChangeUsers, 
  setAlert, setOpenAlert, openLoading, setOpenLoading
}) {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState();

  // for fragment
  const [currentFragment, setCurrentFragment] = useState(0);
  const [listFragment, setlistFragment] = useState([0 , 1 , 2]);
  const maxOfFragment = 7;
  const numberOfFragment = Math.ceil(users.length * 1.0 / maxOfFragment);
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

  //display day
  const setDate = (lastActive) => {
    let day = (new Date()- new Date(lastActive))/(60*60*1000*24);

    if (day >= 1)
      return `For ${parseInt(day)} days`;
    else if (day > 30)
      return `Since ${lastActive}`;
    else {
      return `Currently login`;
    }
  }

  const RenderEmptyRow =()=>{
    if (currentFragment !== numberOfFragment-1) return '';
    let list = [];
    let start = users.length-((numberOfFragment-1)*maxOfFragment);
    for(let i=start; i<7; i++)
      list.push(<div key={users.length+i-start} className={"table_row " + (i%2? "even_row" : "odd_row") + (i===6 ? " last-row_shadow" : "")}></div>)
    return list
  }

  const handleOpenModal = (id) => {
    setOpenLoading(true);
    Axios.post("https://hifurdez.vercel.app/admin/users/detail", {
      id:id
    })
      .then((response) => {
        setModalData(response.data);
        setOpenLoading(false);
        setOpenModal(true);
      })
      .catch((err)=>{
        setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
        setOpenAlert(true)
      })
  }

  const handleStatusSwitch = (id) => {
    setOpenLoading(true);
    Axios.put("https://hifurdez.vercel.app/admin/users/change-status", {
      id:id
    })
      .then((response) => {
        setChangeUsers(!changeUsers)
        setAlert({type: "success", message: response.data.message});
        setOpenAlert(true);
      })
      .catch(err => {
        setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
        setOpenAlert(true)
      }); 
  }

  return !openLoading && (
    <div className="history_container">
      {openModal && <ModalUser modalData={modalData} setOpenModal={setOpenModal}/>}
      <div className="history_content">
        <div className="search_container">
          <input 
            type="text" 
            placeholder="Search..." />
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
        </div>
        <div className="table_ctn">
          <div className="history_table admin_user-scroll">
            <div className="table_row first_row">
              {/* <div className="table_ele admin_fix-size-1">
                <p>ID</p>
              </div> */}
              <div className="table_ele admin_fix-size-2">
                <p>Created date</p>
              </div>
              <div className="table_ele">
                <p className="left_align">Last active</p>
              </div>
              <div className="table_ele admin_fix-size-3">
                <p className="left_align">Full name</p>
              </div>
              <div className="table_ele admin_fix-size-3">
                <p className="left_align">User name</p>
              </div>
              <div className="table_ele admin_fix-size-3">
                <p className="left_align">Email</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Detail</p>
              </div>
              <div className="table_ele admin_fix-size-1">
                <p>Status</p>
              </div>
            </div>
            {users.map((user, index)=>{
              return index >= currentFragment * maxOfFragment && 
              index < (currentFragment + 1) * maxOfFragment && (
                <div key={index} className={"table_row " + (index%2 ? "odd_row" : "even_row") + (index===6 ? " last-row_shadow" : "")}>
                  {/* <div className="table_ele admin_fix-size-1">
                    <p>{user.id}</p>
                  </div> */}
                  <div className="table_ele admin_fix-size-2">
                    <p>{user.created_date}</p>
                  </div>
                  <div className="table_ele">
                    <p className="left_align">{setDate(user.created_date)}</p>
                  </div>
                  <div className="table_ele admin_fix-size-3">
                    <p className="left_align">{user.name}</p>
                  </div>
                  <div className="table_ele admin_fix-size-3">
                    <p className="left_align">{user.display_name? user.display_name : ""}</p>
                  </div>
                  <div className="table_ele admin_fix-size-3">
                    <p className="left_align">{user.user_mail}@gmail.com</p>
                  </div>
                  <div className="table_ele admin_fix-size-1">
                    <button onClick={() => handleOpenModal(user.id)}>Detail</button>
                  </div>
                  <div className="table_ele admin_fix-size-1">
                    <button 
                      className= {user.is_active ? "admin_active-btn": "admin_locked-btn"}
                      onClick={() => handleStatusSwitch(user.id)}>
                      {user.is_active ? "Active" : "Locked"}
                    </button>
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