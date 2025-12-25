import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import MenuBtn from "../components/MenuBtn";
import Cartbtn from "../components/Cartsbtn";
import resetnotCard from "../context/AddedNotReload/resetnot";

export default function SingleCard() {
  let { state } = useLocation();
  console.log(state);
  let { MenuToggle, setToggle } = useContext(resetnotCard);
  // * menu toggle btn
  // let [MenuToggle, setToggle] = useState(false);

  // * items saving in carts with DB

  //   data context me bi rakhna h
  // data db me bi bhejna h

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
                  <Cartbtn item={item} index={index} />
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
