import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { data } from "../data.js";
import App from "../App";
import { Context } from "../context/Contextapi.js";
import Errorpage from "./Errorpage";
import Cart from "./Cart";
import Dashboard from "../Pages/Dashboard";
import Form from "../Pages/Form";

function Reactroute() {
  const [cartarr, setCartarr] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <>
      <Context.Provider value={{ total, setTotal }}>
        <Routes>
          <Route path="/" element={<App data={data} />} />
          <Route path="/form" element={<Form />} />
          <Route
            path="/cart"
            element={
              <Cart data={data} cartarr={cartarr} setCartarr={setCartarr} />
            }
          />
          <Route
            path="/product/:id"
            element={
              <SingleProduct
                data={data}
                cartarr={cartarr}
                setCartarr={setCartarr}
              />
            }
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Errorpage />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default Reactroute;
