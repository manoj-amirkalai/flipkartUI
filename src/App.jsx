import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/Cart/Cart";
import Navbar from "./Components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import supabase from "./Pages/supabase";
import { useEffect } from "react";
import { setUser } from "./Slices/userSlices";

function App() {
  const dispatch=useDispatch()
  const getUser=async()=>{
    const {data,error}=await supabase.auth.getSession()
    if(data.session){
   dispatch(setUser(data.session.user));}
  }
  useEffect(()=>{
    getUser()
  })
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/flipkart" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route
            path="/productdetails/:id"
            element={<ProductDetails />}
          ></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
