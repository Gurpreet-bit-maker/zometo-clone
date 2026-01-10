import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";

export default function MenuItemBtn({ i, BookingBtnAdded,lowBookedBtn }) {
  let { DiningRestaurents, setD_Res, setcarts, cartsItems } =
    useContext(CartContext);
 
    

  // let menuItem = (i) => {
  //   console.log(i);

  //   setD_Res(
  //     DiningRestaurents.map((item) => {
  //       return {
  //         ...item,
  //         menu: item.menu.map((m) => {
  //           return m.name == i ? { ...m, added: !m.added, cart: 1 } : m;
  //         }),
  //       };
  //     })
  //   );
  // };
console.log(i)

  return (
    <div key={i}>
      {BookingBtnAdded ? (
        <button  className="border px-2 bg-green-500 text-white">Booked</button>
      ) : (
        <button  className="border px-2 bg-red-500 text-white">Details</button>
      )}
    </div>
  );
}
