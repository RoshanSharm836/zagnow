import React, { useContext, useState } from "react";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";
import { Context } from "../context/Contextapi.js";

export default function Cart({ cartarr, setCartarr }) {
  const { total, setTotal } = useContext(Context);
  const [arr, setArr] = useState(cartarr);

  function deleteItemIncart(id, count, price) {
    console.log(id);
    setTotal(total - price * count);
    let newarr = arr.filter((el, i) => {
      if (i !== +id) return el;
    });

    setCartarr(newarr); // to delete item from cart array
    setArr(newarr); // to delete item from cart page
  }

  return (
    <div className="cart">
      <div className="cart_header">
        <NavLink to={`/`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M19 12H5M5 12L12 5M5 12L12 19"
              stroke="black"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </NavLink>
        <h1 className="font-semibold">My Cart</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <div className="cart-box">
        {arr.length > 0 ? (
          arr?.map((el, i) => {
            return (
              <CartItem data={el} del={deleteItemIncart} id={i} key={el.id} />
            );
          })
        ) : (
          <div className="text-2xl text-gray-300">Add Item in Cart</div>
        )}
      </div>
      <di className="cart_payment">
        <input
          type="text"
          className="border-solid border-2 bg-gray-100 border-gray-100 p-2"
          placeholder="Add a voucher"
        />
        <div>
          <span className="Price_spam">Sub-total</span>
          <span>INR {total}</span>
        </div>
        <div>
          <span className="Price_spam">Vat</span>
          <span>INR 0.00 </span>
        </div>
        <div>
          <span className="Price_spam">Shipping fee</span>
          <span>INR 0.00 </span>
        </div>
        <hr className=" bg-gray-100" />
        <div>
          <span className="Price_spam">Total</span>
          <span>INR {total}</span>
        </div>
      </di>
      <button className="checkout_btm">
        Checkout
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M5 12H19M19 12L12 5M19 12L12 19"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
