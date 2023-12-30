import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useLocation } from "react-router-dom";
import NavScrollExample from "../components/header";

import Footer from "/components/Footer";
import Products from "/components/products";
import Men from "/components/Men";
import Women from "/components/Women";
import Allproducts from "../components/allProducts";
import View from "../components/View";
import { useState } from "react";
import { context } from "../components/Context";
import Cart from "../components/Cart";
import SignUp from "../components/SignUp";
import Adminnav from "../components/Adminnav";
import { useEffect } from "react";
import { shoeData } from "../components/product";
import { Catogeries } from "../components/catogeries";
import AddProduct from "../components/addProduct";
import EditProduct from "../components/EditProduct";
import LoginForm from "../components/LoginPage";
import UserData from "../components/UserData";
import Search from "../components/Search";
import AdminLogin from "../components/AdminLogin";
import AdminAllProduct from "../components/adminAllproducts";

function App() {
  const location = useLocation();
  const [shoe, setShoe] = useState(Catogeries);
  const [product, setproduct] = useState(shoeData);
  const [change, setchange] = useState(false);
  const [carts, setState] = useState([]);
  const [edit, setedit] = useState([]);
  const [users, setusers] = useState([]);
  const [auth,setauth] = useState(false);
  const [badge,setbadge] = useState([]);
  const [admin, setadmin] = useState([
    {
      email: "naisamta123@gmail.com",
      password: "Naisam@.123",
    },
  ]);
  const [search, setsearch] = useState("");
  const data = {
    carts,
    setState,
    product,
    setproduct,
    edit,
    setedit,
    users,
    setusers,
    search,
    setsearch,
    admin,
    setadmin,
    auth,
    setauth,
    shoe,
    setShoe,
    badge,
    setbadge,

  };

  useEffect(() => {
    window.scroll(0,0)
    if (location.pathname.includes("admin")) {
      setchange(true);
    } else if (location.pathname.includes("login")) {
      setchange(true);
    } else {
      setchange(false);
    }
  }, [location,[]]);
  return (
    <>
      

      <context.Provider value={data}>
        {change ? null : <NavScrollExample />}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />muhammednaisam.office@gmail.com
          <Route path="/all" element={<Allproducts />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login/signup" element={<SignUp />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/login/boss" element={<AdminLogin />} />
          <Route path="/admin" element={<Adminnav />} />


          <Route element={<Adminnav />}>
            <Route path="/admin/add" element={<AddProduct />} />
            <Route path="/admin/edit" element={<EditProduct />} />
            <Route path="/admin/userdata" element={<UserData />} />
            <Route path="/admin/search" element={<Search />} />
            <Route path="/admin/allProducts" element={<AdminAllProduct/>} />  
          </Route>

        </Routes>
      </context.Provider>

      {change ? null : <Footer />}
    </>
  );
}

export default App;
