import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Axios from "axios";
import Alert from "./components/helper/alert";
import Header from "./components/headerFooter/header";
import Homepage from "./components/publicPage/homepage";
import User from "./components/user/user";
import Collection from "./components/publicPage/collection";
import AboutUs from "./components/publicPage/aboutUs";
import ScrollToTop from "./utils/scrollToTop";
import Product from "./components/publicPage/product";
import Footer from "./components/headerFooter/footer";
import Admin from "./components/admin/admin";
import Checkout from "./components/cart/checkout";
import ProductDetail from "./components/publicPage/productDetail";
import Error from "./components/helper/error";
import Loading from "./components/helper/loading";
import { Analytics } from "@vercel/analytics/react";

export const AppContext = React.createContext();

function App() {
  // To ensure that use cookies and sessions
  Axios.defaults.withCredentials = true;

  const collectionProduct = ["All", "Spring", "Summer", "Autumn", "Winter"];
  const categoryProduct = ["All", "Sofa", "Table", "Chair", "Storage"];

  //filter
  const [filterCollection, setFilterCollection] = useState(collectionProduct[0]);
  const [filterCategory, setFilterCategory] = useState(categoryProduct[0]);

  //alert
  const [openAlert, setOpenAlert] = useState(true);
  const [alert, setAlert] = useState({ type: "", message: "" });
  
  //loading
  const [openLoading, setOpenLoading] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  //items
  const [items, setItems] = useState([]);

  //collection
  const [site, setSite] = useState(collectionProduct[1]);
  const [springRecommend, setSpringRecommend] = useState([]);
  const [summerRecommend, setSummerRecommend] = useState([]);
  const [autumnRecommend, setAutumnRecommend] = useState([]);
  const [winterRecommend, setWinterRecommend] = useState([]);

  //product detail
  const [productDetail, setProductDetail] = useState();

  //admin
  const [changeProducts, setChangeProducts] = useState(true);

  useEffect(() => {
    // Get all of items
    if (firstLoad && localStorage.getItem('items')) {
      setItems(JSON.parse(localStorage.getItem('items')));
    }
    else {
      setOpenLoading(true);
      Axios.get("https://hifurdez.vercel.app/all-product")
          .then((response) => {
            setItems(response.data);
            window.localStorage.setItem('items',JSON.stringify(response.data));
            setOpenLoading(false);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });            
    }

    // Get recommend items colletion
    if (firstLoad && localStorage.getItem('spring')) {
      setSpringRecommend(JSON.parse(localStorage.getItem('spring')));
    }
    else if (springRecommend.length === 0) {
      setOpenLoading(true);
      Axios.get("https://hifurdez.vercel.app/product-random-by-spring")
          .then((response) => {
            setSpringRecommend(response.data);
            window.localStorage.setItem('spring',JSON.stringify(response.data));
            setOpenLoading(false);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (firstLoad && localStorage.getItem('summer')) {
      setSummerRecommend(JSON.parse(localStorage.getItem('summer')));
    }
    else if (summerRecommend.length === 0) {
      setOpenLoading(true);
      Axios.get("https://hifurdez.vercel.app/product-random-by-summer")
          .then((response) => {
            setSummerRecommend(response.data);
            window.localStorage.setItem('summer',JSON.stringify(response.data));
            setOpenLoading(false);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (firstLoad && localStorage.getItem('autumn')) {
      setAutumnRecommend(JSON.parse(localStorage.getItem('autumn')));
    }
    else if (autumnRecommend.length === 0) {
      setOpenLoading(true);
      Axios.get("https://hifurdez.vercel.app/product-random-by-autumn")
          .then((response) => {
            setAutumnRecommend(response.data);
            window.localStorage.setItem('autumn',JSON.stringify(response.data));
            setOpenLoading(false);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    if (firstLoad && localStorage.getItem('winter')) {
      setWinterRecommend(JSON.parse(localStorage.getItem('winter')));
    }
    else if (winterRecommend.length === 0) {
      setOpenLoading(true);
      Axios.get("https://hifurdez.vercel.app/product-random-by-winter")
          .then((response) => {
            setWinterRecommend(response.data);
            window.localStorage.setItem('winter',JSON.stringify(response.data));
            setOpenLoading(false);
          })
          .catch(err => {
              setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
              setOpenAlert(true)
          });  
    }
    setFirstLoad(false);
  },[changeProducts])

  //loggin
  const [loggedIn, setLoggedIn] = useState(false);
  const [account, setAccount] = useState();
  const [accountInfo, setAccountInfo] = useState();
  const [accountHistory, setAccountHistory] = useState();
  const [accountCart, setAccountCart] = useState([]);
  const [accountCartTotal, setAccountCartTotal] = useState();

  useEffect(()=>{
    if (localStorage.getItem('is_admin') !== null){
      setAccount({
        'is_admin': Number(localStorage.getItem('is_admin')),
        'id': Number(localStorage.getItem('account_id')),
        'display_name': localStorage.getItem('display_name')
      })
      setAccountCart(JSON.parse(localStorage.getItem('cart')));
      setAccountCartTotal(localStorage.getItem('cart_total'));
      if (localStorage.getItem('account_info') !== null) {
        setAccountInfo(JSON.parse(localStorage.getItem('account_info')));
        setAccountHistory(JSON.parse(localStorage.getItem('account_history')));
      }
      else {
        setOpenLoading(true);
        Axios.post("https://hifurdez.vercel.app/user/get-info", {
          id: Number(localStorage.getItem('account_id'))
        })
          .then((response) => {
            window.localStorage.setItem('account_info', JSON.stringify(response.data[0]));
            setAccountInfo(response.data[0]);
          })
          .catch(err => {
            setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
            setOpenAlert(true)
          }); 
        Axios.post("https://hifurdez.vercel.app/user/order", {
          id: Number(localStorage.getItem('account_id'))
        }) 
          .then((response) => {
            window.localStorage.setItem('account_history', JSON.stringify(response.data));
            setAccountHistory(response.data);
            setOpenLoading(false);
          })
          .catch(err => {
            setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
            setOpenAlert(true)
          });
      }
      setLoggedIn(true);
    }
    else {
      setAccount();
    }
  },[loggedIn])

  const [changeHistory, setChangeHistory] = useState(true);

  useEffect(()=>{
    if(loggedIn){
      Axios.post("https://hifurdez.vercel.app/user/order", {
        id: Number(localStorage.getItem('account_id'))
      }) 
        .then((response) => {
          window.localStorage.setItem('account_history', JSON.stringify(response.data));
          setAccountHistory(response.data);
          setOpenLoading(false);
        })
        .catch(err => {
          setAlert({type: "error", message: "Loading fail! Please reload to entry!"});
          setOpenAlert(true)
        });
    }
  },[changeHistory])

  return (
    <AppContext.Provider>
      <div id="App">
        {openAlert && <Alert alert={alert} setOpenAlert={setOpenAlert} />}
        <ScrollToTop />
        <Analytics />
        <Header 
          setAlert={setAlert} setOpenAlert={setOpenAlert} 
          loggedIn={loggedIn} setLoggedIn={setLoggedIn} 
          account={account} accountCart={accountCart} accountCartTotal={accountCartTotal}
          setAccountCart={setAccountCart} setAccountCartTotal={setAccountCartTotal}
        />
        {openLoading ? <Loading /> :
        <Routes>
          <Route
            index
            element={
              <Homepage
                site={site}
                setSite={setSite}
                collectionProduct={collectionProduct}
                setFilterCollection={setFilterCollection}
              />
            }
          />
          {loggedIn && account !== undefined && account.is_admin === 0 && <Route path="user/history" element={<User tab={"history"} accountInfo={accountInfo} accountHistory={accountHistory}/>} />}
          {loggedIn && account !== undefined && account.is_admin === 0 && <Route path="user/info" element={<User tab={"info"} accountInfo={accountInfo} accountHistory={accountHistory}/>} />}
          {loggedIn && account !== undefined && account.is_admin === 0 && <Route path="user" element={<Navigate to="info" />} />}
          <Route
            path={"collection-detail/spring"}
            element={
              <Collection 
                site={"spring"} 
                springRecommend={springRecommend}
                summerRecommend={summerRecommend}
                autumnRecommend={autumnRecommend}
                winterRecommend={springRecommend}
              />}
          />
          <Route
            path={"collection-detail/summer"}
            element={
              <Collection 
                site={"summer"} 
                springRecommend={springRecommend}
                summerRecommend={summerRecommend}
                autumnRecommend={autumnRecommend}
                winterRecommend={springRecommend}
              />}
          />
          <Route
            path={"collection-detail/autumn"}
            element={
              <Collection 
                site={"autumn"} 
                springRecommend={springRecommend}
                summerRecommend={summerRecommend}
                autumnRecommend={autumnRecommend}
                winterRecommend={springRecommend}
              />}
          />
          <Route
            path={"collection-detail/winter"}
            element={
              <Collection 
                site={"winter"} 
                springRecommend={springRecommend}
                summerRecommend={summerRecommend}
                autumnRecommend={autumnRecommend}
                winterRecommend={springRecommend}
              />}
          />
          <Route
            path="about-us"
            element={
              <AboutUs setAlert={setAlert} setOpenAlert={setOpenAlert} />
            }
          />
          <Route
            path="product"
            element={
              <Product
                collectionProduct={collectionProduct}
                categoryProduct={categoryProduct}
                filterCollection={filterCollection}
                setFilterCollection={setFilterCollection}
                filterCategory={filterCategory}
                setFilterCategory={setFilterCategory}
                items={items}
              />
            }
          />
          <Route
            path="product-detail/:id"
            element={
              <ProductDetail
                setFilterCategory={setFilterCategory}
                setFilterCollection={setFilterCollection}
                collectionProduct={collectionProduct}
                categoryProduct={categoryProduct}
                productDetail = {productDetail}
                setProductDetail = {setProductDetail}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                loggedIn={loggedIn}
                account={account}
                setAccountCart={setAccountCart}
                setAccountCartTotal={setAccountCartTotal}
              />
            }
          />
          {loggedIn && account !== undefined && account.is_admin === 1 && 
          <Route
            path="admin/manage-users"
            element={<Admin 
              tab={"manage-users"}  
              setAlert={setAlert}
              setOpenAlert={setOpenAlert}
              changeProducts={changeProducts}
              setChangeProducts={setChangeProducts}
            />}
          />}
          {loggedIn && account !== undefined && account.is_admin === 1 && 
            <Route
              path="admin/manage-items"
              element={<Admin 
                tab={"manage-items"} 
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                changeProducts={changeProducts}
                setChangeProducts={setChangeProducts}
              />}
          />}
          {/* <Route path="admin/supplier" element={<Admin tab={"supplier"} />} />  */}
          {loggedIn && account !== undefined && account.is_admin === 1 && 
            <Route
              path="admin/order/sale"
              element={<Admin 
                tab={"order-sale"} 
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                changeProducts={changeProducts}
                setChangeProducts={setChangeProducts}
              />}
            />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route
            path="admin/order/purchase"
            element={<Admin 
              tab={"order-purchase"} 
              setAlert={setAlert}
              setOpenAlert={setOpenAlert}
              changeProducts={changeProducts}
              setChangeProducts={setChangeProducts}
            />}
          />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route
            path="admin/third-party"
            element={<Admin 
              tab={"third-party"} 
              setAlert={setAlert}
              setOpenAlert={setOpenAlert}
              changeProducts={changeProducts}
              setChangeProducts={setChangeProducts}
            />}
          />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route
            path="admin/third-party-employee"
            element={<Admin 
              tab={"third-party-employee"} 
              setAlert={setAlert}
              setOpenAlert={setOpenAlert}
              changeProducts={changeProducts}
              setChangeProducts={setChangeProducts}
            />}
          />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route 
            path="admin/warehouse" 
            element={<Admin 
              tab={"warehouse"} 
              setAlert={setAlert}
              setOpenAlert={setOpenAlert}
              changeProducts={changeProducts}
              setChangeProducts={setChangeProducts}
            />} 
          />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route path="admin/report" element={<Admin tab={"report"} />} />}
          {loggedIn && account !== undefined && account.is_admin === 1 && <Route path="admin" element={<Navigate to="manage-users" />} />}
          {loggedIn && account !== undefined && account.is_admin === 0 &&
          <Route
            path="checkout"
            element={
              <Checkout
                setFilterCollection={setFilterCollection}
                setFilterCategory={setFilterCategory}
                setAlert={setAlert}
                setOpenAlert={setOpenAlert}
                accountCart={accountCart}
                setAccountCart={setAccountCart}
                accountCartTotal={accountCartTotal}
                setAccountCartTotal={setAccountCartTotal}
                account={account}
                changeHistory={changeHistory}
                setChangeHistory={setChangeHistory}
              />
            }
          />}
          <Route path="*" element={<Error />} />
        </Routes>}
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
