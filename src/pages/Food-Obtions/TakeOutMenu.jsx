import { act, useContext, useReducer, useState } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { Link, useLocation } from "react-router-dom";
import TakeOutBtn from "./TakeOutBtn";

export default function TakeOutMenu() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  let restaurantsData = useLocation();
  let resData = restaurantsData.state;
  // console.log(resData);

  let orderedBtn = (itemName) => {
    setO_Res((prev) =>
      prev.map((m) => {
        return {
          ...m,
          menu: m.menu.map((n) =>
            n.name == itemName
              ? {
                  ...n,
                  added: true,
                  quantity: +1,
                }
              : n
          ),
        };
      })
    );
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg">
      {/* try */}

      {/* try */}
      <div className="bg-gray-300 border w-80 mt-2 py-5 flex flex-col justify-center items-center">
        <h1 className="text-lg">{resData.name}</h1>
        <div className="relative">
          <img className="w-60 h-50 rounded-2xl" src={resData.image} alt="" />
          <p className="absolute top-40 bg-green-400 px-1 rounded-sm">
            {" "}
            ⏱{resData.deliveryTime}
          </p>
        </div>
        <span>⭐⭐⭐⭐ {resData.rating}</span>
        <p>{resData.location}</p>
        {/* <TakeOutBtn /> */}
      </div>
      {/* Menulist with Orderbtns */}
      <div>
        {onlineOrders.map((e, i) => {
          return e.id == resData.id
            ? e.menu.map((m, index) => (
                <div
                  key={index}
                  className="mt-2 flex flex-col justify-center items-center"
                >
                  <p className="w-auto text-lg text-blue-500 text-[22px]">
                    {m.name}
                    {"  "}
                    <span className="text-lg font-mono font-bold">
                      Rs.{m.price}
                    </span>
                  </p>
                  {m.added ? (
                    <div className="flex border">
                      <button
                        onClick={() => orderedBtn(m.name)}
                        className="bg-green-500 text-white px-2 h-12 rounded-sm"
                      >
                        Ordered
                      </button>
                      <div className="flex ml-1">
                        <div className="flex gap-x-1 ">
                          <button className="border w-8 flex justify-center items-center m-auto text-[22px] h-8 rounded-2xl">
                            +
                          </button>
                          <button className="border w-8 flex justify-center items-center m-auto text-[22px] h-8 rounded-2xl">
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="flex border">
                      <button
                        onClick={() => orderedBtn(m.name)}
                        className="bg-red-500 text-white px-2 h-12"
                      >
                        Order Now
                      </button>
                      <div className="flex ml-1">
                        <div className="flex gap-x-1 ">
                          <button className="border w-8 flex justify-center items-center m-auto text-[22px] h-8 rounded-2xl">
                            +
                          </button>
                          <button className="border w-8 flex justify-center items-center m-auto text-[22px] h-8 rounded-2xl">
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  {/* quntyty work */}

                  {/* quntyty work */}
                </div>
              ))
            : null;
        })}
      </div>
      <br />

      {/* Descriptian Restaurent details */}
      <div className="p-5  ">
        <h3 className="text-gray-500 text-2xl">Pizaa Pardise</h3>
        <p>{resData.description}</p>
      </div>
    </div>
  );
}
