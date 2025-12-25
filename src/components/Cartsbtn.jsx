import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";
import resetnotCard from "../context/AddedNotReload/resetnot";
//! pending index prop from menubtn
export default function Cartbtn({ item, index }) {
  let { cartsItems, setcarts } = useContext(CartContext);

  // let {added, setAdded} = useContext(resetnotCard);
  let [add, setAdded] = useState(false);
  // let [cartAdded, setCartAdded] = useState(false);

  let clickbtn = () => {
    setAdded(!add);

    if (!add) {
      setcarts([
        ...cartsItems,
        { name: item.name, itemId: index, added: item.added },
      ]);
      console.log(index);
    } else {
     

      // let deletedItem = cartsItems.filter((el, i) => el.itemId !== index);
    }
  };
  // let clickbtn = () => {

  // };
  useEffect(() => {
    console.log(cartsItems);
  });

  return (
    <div className="flex gap-x-1 ">
      {add ? (
        <button
          key={index}
          onClick={clickbtn}
          className="bg-orange-300 rounded-sm  border px-1"
        >
          Added
        </button>
      ) : (
        <button
          key={index}
          onClick={clickbtn}
          className="bg-blue-300  rounded-sm w-[3.5rem] border px-1"
        >
          Add
        </button>
      )}
      <button className="rounded-sm px-1 bg-red-400">Order Now</button>
    </div>
  );
}
