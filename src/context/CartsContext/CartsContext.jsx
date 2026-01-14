import React from "react";
import { useState } from "react";
import CartContext from "./CartCreateContext";
import restaurants from "../../data/Data";

let CartsData = ({ children }) => {
  let [DiningRestaurents, setD_Res] = useState(
    restaurants.filter((item) => {
      if (item.category == "dining") {
        return { ...item };
      }
    })
  );
  let [Booking, setB_Res] = useState(
    restaurants.filter((item) => {
      if (item.category == "booking") {
        return { ...item };
      }
    })
  );

  let [onlineOrders, setO_Res] = useState(
    restaurants.filter((item) => {
      if (item.category == "online") {
        return { ...item };
      }
    })
  );

  let [onlineOrdersList, setOnlineOrderList] = useState([]);

  let [cartsItems, setcarts] = useState([]);
  let [added, setAdded] = useState(false);

  // setcarts(restaurants)
  // restaurants.map((item) => {
  //   item.menu.map((el) => {
  //     setcarts({el });
  //   });
  // });

  return (
    <CartContext.Provider
      value={{
        cartsItems,
        setcarts,
        added,
        setAdded,
        DiningRestaurents,
        setD_Res,
        Booking,
        onlineOrders,
        setO_Res,
        onlineOrdersList,
        setOnlineOrderList,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartsData;
