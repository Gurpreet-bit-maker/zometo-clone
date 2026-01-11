import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";

export default function MenuItemBtn({ i, BookingBtnAdded, lowBookedBtn }) {
  let { DiningRestaurents, setD_Res, setcarts, cartsItems } =
    useContext(CartContext);

  console.log(i);
  // btn of dining booked
  return (
    <div key={i}>
      {BookingBtnAdded ? (
        <button className="border px-2 bg-green-500 text-white">Booked</button>
      ) : (
        <button className="border px-2 bg-red-500 text-white">Details</button>
      )}
    </div>
  );
}
