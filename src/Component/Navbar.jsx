import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to={`/`}>
        <span>Home</span>
      </NavLink>
      <NavLink to={`/cart`}>
        <span>cart</span>
      </NavLink>
    </nav>
  );
}
