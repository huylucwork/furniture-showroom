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
  const [name, setName] = useState(null);
  const [collectionPick, setCollectionPick] = useState(1);
  const [categoryPick, setCategoryPick] = useState(1);
  const [width, setWidth] = useState(null);
  const [height, setHeight] = useState(null);
  const [depth, setDepth] = useState(null);
  const [weight, setWeight] = useState(null);
  const [color, setColor] = useState(null);
  const [material, setMaterial] = useState(null);
  const [descrb, setDescrb] = useState(null);
  const [amountImage, setAmountImage] = useState(0);

  const [openAlert, setOpenAlert] = useState(false);
  const [alert, setAlert] = useState({ type: "", message: "" });


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
      if(name === "" || name === null) {
        setAlert({type: "error", message: "You must enter item name!"});
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
          props.setChangeProducts(!props.changeProducts);
          // props.setTrigger(false);
          setAlert({type: "success", message: "Add item successfully!"});
          setOpenAlert(true);
        })
    }
    else if(price < discountPrice) {
      setAlert({type: "error", message: "Price can't be greater than Discount Price"});
      setOpenAlert(true);
    } 
    else if(props.trigger[1]) {
      Axios.put("https://hifurdez.vercel.app/admin/products/update-info", {
        id: props.modalValId,
        category_id: categoryPick,
        collection_id: collectionPick,
        product_name: name,
        material: material,
        price: price,
        discount_price: discountPrice? discountPrice : price,
        color: color,
        width: width,
        depth: depth,
        height: height,
        weight: weight,
        description: descrb,
      })
        .then((response)=>{
          setAlert({type: "success", message: response.message});
          setOpenAlert(true);
          props.setChangeProducts(!props.changeProducts);
        })
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
              <input className="admin_input_text" type="text" onChange={(e)=>setName(e.target.value)}/>
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
                  <input className="admin_input_text" type="text" onChange={(e)=>setWidth(e.target.value)}/>
                </div>
                <div className="admin_choosen">
                  <label>d:</label>
                  <input className="admin_input_text" type="text" onChange={(e)=>setDepth(e.target.value)}/>
                </div>
                <div className="admin_choosen">
                  <label>h:</label>
                  <input className="admin_input_text" type="text" onChange={(e)=>setHeight(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => setPrice(e.target.value)}/>
              </div>
              {props.trigger[1] &&
              <div className="admin_choosen">
                <label className="display_block">Discount Price</label>
                <input className="admin_input_text" type="text" onChange={(e) => setDiscountPrice(e.target.value)}/>
              </div>}
            </div>
            <div className="admin_input">
              <div className="admin_choosen">
                <label className="display_block">Weight</label>
                <input className="admin_input_text" type="text" onChange={(e) => setWeight(e.target.value)}/>
              </div>
              <div className="admin_choosen">
                <label className="display_block">Color</label>
                <input className="admin_input_text" type="text" onChange={(e) => setColor(e.target.value)}/>
              </div>
              <div className="admin_choosen">
                <label className="display_block">Material</label>
                <input className="admin_input_text" type="text" onChange={(e) => setMaterial(e.target.value)}/>
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
                onChange={(e)=>setDescrb(e.target.value)}>
              </textarea>
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