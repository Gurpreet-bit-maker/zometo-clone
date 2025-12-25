import React from "react";
import { useState } from "react";
import CartContext from "./CartCreateContext";

let CartsData = ({ children }) => {
  let [cartsItems, setcarts] = useState([]);
  

  return (
    <CartContext.Provider value={{ cartsItems, setcarts }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartsData;
