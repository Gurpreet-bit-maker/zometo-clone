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

  let { MenuToggle, setToggle } = useContext(resetnotCard);

  let [OriginalData, setData] = useState(
    state.item.menu.map((item, i) => {
      return { ...item, itemId: i };
    })
  );

  // console.log(isAdded);
  // let [isAdded, setAdded] = useState(false);

  useEffect(() => {
    console.log(OriginalData);

    let addedIncarts = OriginalData.filter((d) => d.added);
    setcarts(addedIncarts)
    console.log(addedIncarts);
    
  },[OriginalData]);

  let btnAdded = OriginalData.some((d) => d.added == false);

  let addedItem = (item, index) => {
    if (btnAdded) {
      setData(
        OriginalData.map((item, i) => {
          return item.itemId == index
            ? { ...item, added: !item.added }
            : { ...item };
        })
      );
      // console.log(OriginalData);

      // setcarts([{ ...item, added: !item.added, indexNum: index }]);
      // setcarts(addedIncarts);
    }

    // if (1) {
    //   let a = OriginalData.map((el) => {
    //     return el.itemId === index ? { ...el, added: true } : el;
    //   });
    //   console.log(a);
    //   console.log(item, index);
    // }
  };

  // let addToCart = () => {
  //   // let array = [];
  //   // if (!isAdded) {
  //   //   state.item.menu.map((item) => {
  //   //     array.push(item);
  //   //   });
  //   //   console.log("added");
  //   // }
  //   // setcarts(array);
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
                    {btnAdded ? "Add" : "added"}
                  </button>
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
