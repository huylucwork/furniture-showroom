import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../styles/checkout.css";
import Sort from "../publicPage/sort";
import CheckoutModal from "./checkoutModal";

export default function Checkout( { 
  setFilterCollection, setFilterCategory, setAlert, setOpenAlert,
  accountCart, setAccountCart, accountCartTotal, setAccountCartTotal,
  account, changeHistory, setChangeHistory
} ) {

  const [modal, setModal] = useState(false);
  const collection = ["Spring", "Summer", "Autumn", "Winter"];

  const navigate = useNavigate();

  const [wardSelect, setWardSelect] = useState();
  const [districtSelect, setDistrictSelect] = useState();
  const [provinceSelect, setProvinceSelect] = useState(1313);

  const [province, setProvince] = useState([]);
  const [provinceId, setProvinceId] = useState([]);
  const [district, setDistrict] = useState([]);
  const [districtId, setDistrictId] = useState([]);
  const [ward, setWard] = useState([]);
  const [wardId, setWardId] = useState([]);

  const handlePayUp = () => {

    Axios.post("https://hifurdez.vercel.app/cart/payup", {
      user_id: buyerInfo.id,
      user_address: streetBuyer,
      user_province: provinceId[provinceSelect],
      user_district: districtId[districtSelect],
      user_ward: wardId[wardSelect],
      payment_method: 0,
      total_amount: accountCartTotal,
      product_0: accountCart.length >= 1 ? accountCart[0] : 'test',
      product_1: accountCart.length >= 2 ? accountCart[1] : 'test',
      product_2: accountCart.length >= 3 ? accountCart[2] : 'test',
      product_3: accountCart.length >= 4 ? accountCart[3] : 'test',
      product_4: accountCart.length >= 5 ? accountCart[4] : 'test',
      product_5: accountCart.length >= 6 ? accountCart[5] : 'test',
      product_6: accountCart.length >= 7 ? accountCart[6] : 'test',
      product_7: accountCart.length >= 8 ? accountCart[7] : 'test',
      product_8: accountCart.length >= 9 ? accountCart[8] : 'test',
      product_9: accountCart.length >= 10 ? accountCart[9] : 'test',
    })
      .then((response)=>{
        setAlert({
          type: 'success', 
          message: 'Thank you for your purchase!'
        })
        setOpenAlert(true);
  
        if (response.data.message === "Add success!") {
          setChangeHistory(!changeHistory);
          setFilterCategory('All');
          setFilterCollection('All');
          accountCart.map((item)=>{
            Axios.post("https://hifurdez.vercel.app/cart/update", {
              customer_id: buyerInfo.id,
              product_id: item.product_id
            })
          })
          window.localStorage.setItem('cart', JSON.stringify([]));
          window.localStorage.setItem('cart_total', 0);
          setAccountCart([]);
          setAccountCartTotal(0);
          navigate("../")
        }
      })
  }

  const [buyerInfo, setBuyerInfo] = useState()
  const [nameBuyer, setNameBuyer] = useState('');
  const [streetBuyer, setStreetBuyer] = useState('');

  useEffect(()=>{
    Axios.post("https://hifurdez.vercel.app/cart/checkout",{
      user_id: account.id
    })
      .then((response)=>{
        setBuyerInfo(response.data[0])
      })
  },[])

  useEffect(()=>{
    Axios.get("https://hifurdez.vercel.app/province")
    .then((response)=>{
        let id = [];
        let name = [];
        response.data.map((item)=>{
          id.push(item.id);
          name.push(item.name);
        })
        setProvince(name);
        setProvinceId(id);
    })
  },[])

  useEffect(()=>{
      Axios.post("https://hifurdez.vercel.app/province/district",{
        id: provinceId[provinceSelect] ? provinceId[provinceSelect] : 1313,
      })
      .then((response)=>{
        let id = [];
        let name = [];
        response.data.map((item)=>{
          id.push(item.id);
          name.push(item.name);
        })
        setDistrict(name);
        setDistrictId(id);
      })
  },[provinceSelect])

  useEffect(()=>{
    Axios.post("https://hifurdez.vercel.app/province/district/ward", {
      id: districtId[districtSelect] ? districtId[districtSelect] : 3537,
    })
      .then((response)=>{
        let id = [];
        let name = [];
        response.data.map((item)=>{
          id.push(item.id);
          name.push(item.name);
        })
        setWard(name);
        setWardId(id);
      })
  },[districtSelect])

  console.log(accountCart)

  return buyerInfo && province && district && ward && (
    <div className="checkout_container">
      {modal && <CheckoutModal setModal={setModal} handlePayUp={handlePayUp} />}
      <div className="checkout_information">
        <h2>Information</h2>
        <div className="checkout_input">
          <label>Name</label>
          <input type="text" placeholder={buyerInfo.name} onChange={e=> setNameBuyer(e.target.value)}/>
        </div>
        <div className="checkout_input">
          <label>Email</label>
          <input type="text" value={buyerInfo.user_mail}/>
        </div>
        <div className="checkout_input">
          <label>Phone</label>
          <input type="text" placeholder={buyerInfo.phone}/>
        </div>
        <div className="checkout_input">
          <label>Address</label>
          <input type="text" placeholder={buyerInfo.street} onChange={(e)=> setStreetBuyer(e.target.value)}/>
        </div>
        <div className="checkout_input">
          <Sort trigger="checkout" optsArray={ward} setPick={setWardSelect}/>
          <Sort trigger="checkout" optsArray={district} setPick={setDistrictSelect}/>
          <Sort trigger="checkout" optsArray={province} setPick={setProvinceSelect}/>
        </div>
      </div>
      <div className="checkout_payment">
        <h2>Payment method</h2>
        <div className="payment_container">
          <h2>Cash on delivery</h2>
          <input type="radio" name="radio" />
          <span className="payment_checkmark"></span>
        </div>
        <div className="payment_container">
          <h2>Bank transfer</h2>
          <input type="radio" name="radio" />
          <span className="payment_checkmark"></span>
        </div>
        <p onClick={()=>{
          setFilterCategory('All');
          setFilterCollection('All');
          navigate("../product")
        }}>
          Return to shop
        </p>
        <button onClick={()=>{
          if (streetBuyer === '' && (buyerInfo.street === '' || buyerInfo.street === null)){
            setAlert({
              type: 'warning', 
              message: 'Please enter your address!'
            })
        
            setOpenAlert(true);
          }
          else if (wardSelect === undefined || districtSelect === undefined || provinceSelect === undefined){
            setAlert({
              type: 'warning', 
              message: 'Please enter your address!'
            })
        
            setOpenAlert(true);
          }
          else setModal(true);
        }}>
          Pay up
        </button>
      </div>
      <div className="checkout_item">
        <div className="item_container">
          {accountCart.length !== 0 && accountCart.map((item)=>{
            return (
              <div className="item_info_ctn" key={item.product_id}>
                <img src={item.product_image} className="item_img" />
                <div className="item_name-cat">
                  <p>{item.product_name}</p>
                  <p>{collection[item.collection_id]}</p>
                </div>
                <p>Amount <br></br> 1</p>
                <p>Price <br></br> ${item.product_price}</p>
              </div>
            )
          })} 
        </div>
        <hr />
        <div className="item_total">
          <p>Total:</p>
          <p>{accountCart.length}</p>
          <p>${accountCartTotal}</p>
        </div>
      </div>
    </div>
  );
}