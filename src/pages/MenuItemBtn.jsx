import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";


export default function MenuItemBtn({ menuName }) {
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
  console.log(menuName);

  return (
    <div>
      <button className="border px-2 bg-red-500 text-white">Details</button>
    </div>
  );
}
