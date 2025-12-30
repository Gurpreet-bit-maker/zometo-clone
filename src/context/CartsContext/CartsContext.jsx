import React from "react";
import { useState } from "react";
import CartContext from "./CartCreateContext";
import restaurants from "../../data/Data";

let CartsData = ({ children }) => {
  let [cartsItems, setcarts] = useState([]);
  // let [addedData, setAddedData] = useState([]);
  let [added, setAdded] = useState(false);

  // setcarts(restaurants)
  // restaurants.map((item) => {
  //   item.menu.map((el) => {
  //     setcarts({el });
  //   });
  // });

  return (
    <CartContext.Provider value={{ cartsItems, setcarts, added, setAdded }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartsData;
