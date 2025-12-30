import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";
import restaurants from "../data/Data";
// import resetnotCard from "../context/AddedNotReload/resetnot";
import UserContext from "../context//allfoodContext/createContext";

//
export default function Cartbtn({ item, index }) {
  let data = useContext(UserContext);

  let { cartsItems, setcarts, addedData, setAddedData } =
    useContext(CartContext);
  // let [secondAlldata, setsecondAlldata] = useState([]);
  // let { added, setAdded } = useContext(resetnotCard);

  // let result = item.added === false;
  // console.log(result);

  let MenuItems = [];

  // let clickbtn = () => {
  //   // setcarts((prev) => [...prev, { item }]);
  //   if (result) {
  //     item.added = true;
  //   }
  //   return (item.added = false);
  // };

  // useEffect(() => {
  //   if (result) {
  //     item.added = true;
  //     console.log(item);
  //   } if (!result) {
  //     item.added = false;
  //     console.log(item);
  //   }
  // },[result]);
  useEffect(() => {
    console.log(cartsItems);
  });

  let isAdded = cartsItems.some((key) => key.orderId === index);
  console.log(isAdded);

  let clickbtn = () => {
    if (!isAdded) {
      setcarts([...cartsItems, { name: item.name, orderId: index, qty: null }]);
    } else {
      let deleted = cartsItems.filter((element) => element.orderId !== index);
      console.log(deleted);
      setcarts(deleted);
    }
  };

  console.log(item);
  

  return (
    <div className="flex gap-x-1 ">
      {isAdded ? (
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

// let itemAdded = cartsItems.some((d) => d.added);
// let itemA = cartsItems.some((d) => console.log(d.price));

// console.log(itemAdded == false);

// let addedItem = data.filter((item) => {
//   item.menu.filter((el) => el.added !== );
// });
