import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuBtn from "../components/MenuBtn";
import Cartbtn from "../components/Cartsbtn";
import resetnotCard from "../context/AddedNotReload/resetnot";
import CartContext from "../context/CartsContext/CartCreateContext";

export default function SingleCard() {
  let { state } = useLocation();
  console.log(state);
  let { cartsItems, setcarts, addedData, setAddedData } =
    useContext(CartContext);
  // console.log(state.item.id);

  let { MenuToggle, setToggle } = useContext(resetnotCard);

  // let isAdded = state.item.menu.some((d) => d.added == false);
  // console.log(isAdded);

  // setadd(!add);
  // if (!add) {
  //   setcarts([{ ...item, added: !item.added }]);
  // } else {
  //   let deleted = cartsItems.filter((d) => d.id !== item.id);
  //   setcarts(deleted);
  // }
  let [OriginalData, setData] = useState(
    state.item.menu.map((item, i) => {
      return { ...item, itemId: i };
    })
  );

  let isAdded;

  // console.log(isAdded);

  let addedItem = (item, index) => {
    isAdded = OriginalData.some((element) => {
      element.itemId === index;
    });
    
    // let isAdded = OriginalData.some((d) => d.itemId === index);
    // console.log(isAdded);
    // console.log(isAdded);

    if (1) {
      // let changed = OriginalData.map((el) => {
        //   return el.itemId == 2 ? { ...el, added: true } : el;
        // });
        let a = OriginalData.map((el) => {
        return el.itemId === index ? { ...el, added: true } : el;
      });
      console.log(a);
      // setData(changed);
      // setData((prev) => {
        //   prev.itemId === index ? { ...prev, added: true } : prev;
        // });
        // setcarts()
      console.log(item, index);
    }
  };
  useEffect(() => {
    console.log(isAdded);
    console.log(OriginalData);
  });
  // let isAdded = cartsItems.some((d) => d.added === false);
  // console.log(isAdded);

  // let addToCart = () => {
  //   let array = [];
  //   if (!isAdded) {
  //     state.item.menu.map((item) => {
  //       array.push(item);
  //     });
  //     console.log("added");
  //   }
  //   setcarts(array);
  // };

  return (
    <div className="flex flex-col items-center absolute top-[70px] bg-gray-600 h-200 w-full">
      <div className="shadow-2xl rounded-lg w-80 mt-2 h-100 py-5 bg-gray-400   flex flex-col justify-center items-center">
        <p className="mb-2 text-[1.4rem] font-serif">{state.item.name}</p>
        <img className="w-60 h-70 rounded-2xl" src={state.item.image} alt="" />
        <MenuBtn
          MenuToggle={MenuToggle}
          setToggle={setToggle}
          item={state.item}
        />{" "}
        {/*//! Learn this props important*/}
      </div>
      {/* //*  Menu List */}
      <div className="absolute top-105 shadow-2xl rounded-lg  bg-gray-500 ">
        {MenuToggle ? (
          <div className=" p-2 ">
            {state.item.menu.map((item, index) => {
              return (
                <div key={index} className="flex  gap-x-2 mt-4 px-1">
                  <p className="text-yellow-500 border w-39 underline tracking-wide pl-1">
                    {item.name}
                  </p>
                  <strong className="text-black "> Rs :{item.price} </strong>
                  {/* <Cartbtn item={item} index={index} /> */}
                  <button
                    onClick={() => addedItem(item, index)}
                    className="border"
                  >
                    {item.added ? "Added" : "add"}
                  </button>
                  <button className="border">Order</button>
                </div>
              );
            })}
            <p className="text-center animate-pulse text-3xl mt-5 font-serif">
              {" "}
              Discount : {state.item.discount}
            </p>
          </div>
        ) : null}
      </div>
    </div>
  );
}
