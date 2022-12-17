import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../../styles/admin.css";
import Sort from "../publicPage/sort";
import Alert from "../helper/alert";

export default function UpdateAdd(props) {

  const collection = ["Spring", "Summer", "Autumn", "Winter"];
  const category = ["Sofa", "Table", "Chair", "Storage"];

  const [price, setPrice] = useState(-1);
  const [discountPrice, setDiscountPrice] = useState(-2);
  const [name, setName] = useState("");
  const [collectionPick, setCollectionPick] = useState(1);
  const [categoryPick, setCategoryPick] = useState(1);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [depth, setDepth] = useState("");
  const [weight, setWeight] = useState("");
  const [color, setColor] = useState("");
  const [material, setMaterial] = useState("");
  const [descrb, setDescrb] = useState("");
  const [amountImage, setAmountImage] = useState(0);

  const [openAlert, setOpenAlert] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });

  const [validName, setValidName] = useState(false);
  const [validNameCha, setValidNameCha] = useState("");

  const [validW, setValidW] = useState(false);
  const [validWCha, setValidWCha] = useState("");

  const [validD, setValidD] = useState(false);
  const [validDCha, setValidDCha] = useState("");

  const [validH, setValidH] = useState(false);
  const [validHCha, setValidHCha] = useState("");

  const [validPrice, setValidPrice] = useState(false);
  const [validPriceCha, setValidPriceCha] = useState("");

  const [validWeight, setValidWeight] = useState(false);
  const [validWeightCha, setValidWeightCha] = useState("");

  const [validColor, setValidColor] = useState(false);
  const [validColorCha, setValidColorCha] = useState("");

  const [validMaterial, setValidMaterial] = useState(false);
  const [validMaterialCha, setValidMaterialCha] = useState("");

  const [validDesc, setValidDesc] = useState(false);
  const [validDescCha, setValidDescCha] = useState("");

  var format = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  useEffect(() => {
    var inputs = document.querySelectorAll( '.admin_input_tmp' );
    Array.prototype.forEach.call( inputs, function( input )
    {
      var label	 = input.nextElementSibling,
      labelVal = label.innerHTML;
    
      input.addEventListener( 'change', function( e )
      {
        var fileName = '';
        if( this.files && this.files.length > 1 )
          fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
        else
          fileName =  e.target.value.replace('C:\\fakepath\\','');
        
        if( fileName )
          label.innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });
    });
  });

  const handleUploadImage = (e) => {
    setAmountImage(e.target.files.length);
  }

  const handleSaveButton = (e) => {
    e.preventDefault();

    if(!props.trigger[1]) {
      if(name === null || name === "" || width === null || width === "" || height === null || height === "" ||
         depth === null || depth === "" || weight === null || weight === "" || color === null || color === "" || 
         material === null || material === "" || price === -1 || descrb === null || descrb === "") {
        setAlert({type: "error", message: "You must enter item properties!"});
        setOpenAlert(true)
        return;
      }
      if (format.test(name) || format.test(depth) || format.test(width) || format.test(height) || format.test(weight) || format.test(color) || format.test(material) || format.test(descrb)) {
        setAlert({type: "error", message: "Invalid Character!"});
        setOpenAlert(true)
        return;
      }
    }

    if(!props.trigger[1]) {
      Axios.put("https://hifurdez.vercel.app/admin/products/add-new", {
        category_id: categoryPick,
        collection_id: collectionPick,
        product_name: name,
        material: material,
        price: price,
        discount_price: price,
        color: color,
        width: width,
        depth: depth,
        height: height,
        weight: weight,
        description: descrb,
        media_0: "https://res.cloudinary.com/castlery/image/private/b_rgb:F0EAE2,c_fit,f_auto,q_auto,w_1000/v1619340680/crusader/variants/T50440970-TL4002-GD/Adams-Right-Chaise-Setcional-Sofa-Pearl-Beige-Brass-Front.jpg",
        media_1: "https://res.cloudinary.com/castlery/image/private/b_rgb:F0EAE2,c_fit,f_auto,q_auto,w_1000/v1639130399/crusader/variants/T50440970-TL4002-GD/Adams-Chaise-Sectional-Sofa-Right-Facing-Pearl-Beige-Brass-Leg-Shared1.jpg",
        media_2: "test",
        media_3: "test",
        media_4: "test",
        media_5: "test",
        media_6: "test",
        media_7: "test",
        media_8: "test",
        media_9: "test",
        media_10: "test",
        media_11: "test",
        media_12: "test",
        media_13: "test",
        media_14: "test",
      })
        .then((response)=>{
          props.setTrigger(false)
          setAlert({type: "success", message: "Add item successfully!"});
          setOpenAlert(true);
          setName(null);
          setHeight(null);
          setWidth(null);
          setDepth(null);
          setWeight(null);
          setColor(null);
          setMaterial(null);
          props.setChangeProducts(!props.setChangeProducts);
        })
    }
    else if((price !==-1? Number(price) : props.accountVal.price) < Number(discountPrice)) {
      setAlert({type: "error", message: "Discount Price can't be greater than Price"});
      setOpenAlert(true);
    } 
    else if(props.trigger[1]) {
      Axios.put("https://hifurdez.vercel.app/admin/products/update-info", {
        id: props.accountVal.product_id,
        category_id: categoryPick,
        collection: collectionPick,
        name: name !== ''? name: props.accountVal.product_name,
        material: material,
        price: price!==-1 ? price : props.accountVal.price,
        discount_price: discountPrice!==-1? (discountPrice<props.accountVal.price ? discountPrice : price) : props.accountVal.discount_price,
        color: color,
        width: width,
        depth: depth,
        height: height,
        weight: weight,
        description: descrb,
      })
        .then((response)=>{
          props.setTrigger(false)
          setAlert({type: "success", message: response.message});
          setOpenAlert(true);
          props.setChangeProducts(!props.changeProducts);
        })
    }
  }

  const checkValid = (str, type) => {
    if(type === "name") {
      setName(str);
      if (format.test(str[str.length - 1])) {
        setValidName(true);
        setValidNameCha(str[str.length - 1]);
        return;
      }
      setValidName(false);
    }
    else if(type === "w") {
      setWidth(str);
      if (format.test(str[str.length - 1])) {
        setValidW(true);
        setValidWCha(str[str.length - 1]);
        return;
      }
      setValidW(false);
    }
    else if(type === "d") {
      setDepth(str);
      if (format.test(str[str.length - 1])) {
        setValidD(true);
        setValidDCha(str[str.length - 1]);
        return;
      }
      setValidD(false);
    }
    else if(type === "h") {
      setHeight(str);
      if (format.test(str[str.length - 1])) {
        setValidH(true);
        setValidHCha(str[str.length - 1]);
        return;
      }
      setValidH(false);
    }
    else if(type === "price") {
      setPrice(str);
      if (format.test(str[str.length - 1])) {
        setValidPrice(true);
        setValidPriceCha(str[str.length - 1]);
        return;
      }
      setValidPrice(false);
    }
    else if(type === "weight") {
      setWeight(str);
      if (format.test(str[str.length - 1])) {
        setValidWeight(true);
        setValidWeightCha(str[str.length - 1]);
        return;
      }
      setValidWeight(false);
    }
    else if(type === "color") {
      setColor(str);
      if (format.test(str[str.length - 1])) {
        setValidColor(true);
        setValidColorCha(str[str.length - 1]);
        return;
      }
      setValidColor(false);
    }
    else if(type === "material") {
      setMaterial(str);
      if (format.test(str[str.length - 1])) {
        setValidMaterial(true);
        setValidMaterialCha(str[str.length - 1]);
        return;
      }
      setValidMaterial(false);
    }
    else if(type === "description") {
      setDescrb(str);
      if (format.test(str[str.length - 1])) {
        setValidDesc(true);
        setValidDescCha(str[str.length - 1]);
        return;
      }
      setValidDesc(false);
    }
  }

  return props.trigger[0] ? (
    <div className="sign-up_container">
      {openAlert && <Alert alert={alert} setOpenAlert={setOpenAlert} />}
      <div className="sign-up_wrapper admin_fix_modal">
        <form className="sign-up_ctr admin-modal_ctr" onSubmit={(e)=>handleSaveButton(e)}>
          <div className="sign-up_icon">
            <button
              className="login_close-btn"
              onClick={() => props.setTrigger(false)}
            >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="1em" 
              height="1em" 
              preserveAspectRatio="xMidYMid meet" 
              viewBox="0 0 32 32" 
              className="sign-up_my-icon">
                <path 
                fill="none" 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M2 30L30 2m0 28L2 2"/>
            </svg>            
            </button>
          </div>
          <h2 className="admin_header">{props.trigger[1] ? 'Update' : 'Add new item'}</h2>
          <div className="admin_content">
            <div className="admin_input">
              <label className="display_block">Name</label>
              <input className="admin_input_text" type="text" onChange={(e)=>checkValid(e.target.value, "name")}/>
              {(!props.trigger[1] && validName) && <h2 className="signup_check-valid">{`Invalid Character "${validNameCha}"`}</h2>}
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Collection</label>
                <Sort trigger="manage" optsArray={collection} setPick={setCollectionPick}/>
              </div>
              <div className="admin_choosen">
                <label className="display_block">Category</label>
                <Sort trigger="manage" optsArray={category} setPick={setCategoryPick}/>
              </div>
            </div>
            <div className="admin_input">
              <label className="display_block">Size</label>
              <div className="size_ctn">
                <div className="admin_choosen">
                  <label>w:</label>
                  <input className="admin_input_text" type="text" onChange={(e)=>checkValid(e.target.value, "w")}/>
                  {(!props.trigger[1] && validW) && <h2 className="signup_check-valid">{`Invalid Character "${validWCha}"`}</h2>}
                </div>
                <div className="admin_choosen">
                  <label>d:</label>
                  <input className="admin_input_text" type="text" onChange={(e)=>checkValid(e.target.value, "d")}/>
                  {(!props.trigger[1] && validD) && <h2 className="signup_check-valid">{`Invalid Character "${validDCha}"`}</h2>}
                </div>
                <div className="admin_choosen">
                  <label>h:</label>
                  <input className="admin_input_text" type="text" onChange={(e)=>checkValid(e.target.value, "h")}/>
                  {(!props.trigger[1] && validH) && <h2 className="signup_check-valid">{`Invalid Character "${validHCha}"`}</h2>}
                </div>
              </div>
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => checkValid(e.target.value, "price")}/>
                {(!props.trigger[1] && validPrice) && <h2 className="signup_check-valid">{`Invalid Character "${validPriceCha}"`}</h2>}
              </div>
              {props.trigger[1] &&
              <div className="admin_choosen">
                <label className="display_block">Discount Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => setDiscountPrice(e.target.value)} placeholder={props.trigger[1] && props.accountVal.price !== props.accountVal.discount_price && props.accountVal.discount_price}/>
              </div>}
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Weight</label>
                <input className="admin_input_text" type="text" onChange={(e) => checkValid(e.target.value, "weight")}/>
                {(!props.trigger[1] && validWeight) && <h2 className="signup_check-valid">{`Invalid Cha "${validWeightCha}"`}</h2>}
              </div>
              <div className="admin_choosen">
                <label className="display_block">Color</label>
                <input className="admin_input_text" type="text" onChange={(e) => checkValid(e.target.value, "color")}/>
                {(!props.trigger[1] && validColor) && <h2 className="signup_check-valid">{`Invalid Character "${validColorCha}"`}</h2>}
              </div>
              <div className="admin_choosen">
                <label className="display_block">Material</label>
                <input className="admin_input_text" type="text" onChange={(e) => checkValid(e.target.value, "material")}/>
                {(!props.trigger[1] && validMaterial) && <h2 className="signup_check-valid">{`Invalid Character "${validMaterialCha}"`}</h2>}
              </div>
            </div>
            {!props.trigger[1] &&
            <div className="admin_input">
              <label className="display_block">Image</label>
              <input 
                type="file" 
                name="file" 
                id="file" 
                data-multiple-caption="{count} files selected" 
                multiple
                onChange={(e)=>{handleUploadImage(e)}}/>
              <label htmlFor="file" className="admin_input_label">{amountImage? amountImage +  " files selected": "Choose file"}</label>
            </div>}
            <div className="admin_input">
              <label 
                className="display_block">
                Description
              </label>
              <textarea 
                className="admin_input_text admin_input_desc" 
                cols="8" 
                wrap="soft" 
                placeholder="Write something"
                onChange={(e) => checkValid(e.target.value, "description")}>
              </textarea>
              {(!props.trigger[1] && validDesc) && <h2 className="signup_check-valid">{`Invalid Character "${validDescCha}"`}</h2>}
            </div>
          </div>
          <button type="submit" className="admin_save">
            Save
          </button>
        </form>
      </div>
    </div>
  ) : (
    ""
  );
}