import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import SingleProduct from "./SingleProduct";
import { data } from "../data.js";
import App from "../App";
import Errorpage from "./Errorpage";
import Cart from "./Cart";
import Form from "./Form";
import Dashboard from "./Dashboard";

function Reactroute() {
  const [cartarr, setCartarr] = useState([]);
  console.log("cartarr", cartarr);
  return (
    <>
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
    </>
  );
}

export default Reactroute;
