import { act, useContext, useReducer, useState } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { Link, useLocation } from "react-router-dom";
import TakeOutBtn from "./TakeOutBtn";

export default function TakeOutMenu() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  let restaurantsData = useLocation();
  let resData = restaurantsData.state;
  console.log(resData);
  // console.log(resData);
  let [qnty, setQnty] = useState(0);

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
                }
              : n
          ),
        };
      })
    );
    if (qnty < 1) {
      alert("choose quantity");
    }
  };

  let additionOfCount = () => {
    setQnty(qnty + 1);
  };

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg">
      {/* Menulist with Orderbtns */}
      <div className="flex gap-y-10 flex-col">
        {onlineOrders.map((e, i) => {
          return e.id == resData.id
            ? e.menu.map((m, index) => (
                <div key={index} className="mt-2 flex  justify-between w-100">
                  <div className="pl-3 flex flex-col gap-y-24">
                    <p className="w-auto  text-lg text-black mb-1 ">
                      <img className="w-5" src={m.imagelogo} alt="" />
                      {m.name}
                      {"  "}
                    </p>
                    <div>
                      <del className="text-gray-500 text-sm">
                        ₹{m.beforeRate}
                      </del>{" "}
                      <br />
                      <span className="text-[14px]  text-blue-500 font-mono">
                        Get for ₹{m.price}
                      </span>
                    </div>
                  </div>
                  <div className="relative flex flex-col justify-end items-end w-60">
                    <img
                      className="w-50 h-40 rounded-2xl"
                      src={m.image}
                      alt=""
                    />
                    <Link
                      to="/quantity"
                      state={m}
                      className="absolute bg-pink-50 top-37 flex ml-1 text-pink-500 font-bold justify-between items-center border-1 border-pink-300 rounded-lg px-5 h-10 text-lg rounded-sm"
                    >
                      <button className="  ">ADD +</button>
                    </Link>
                  </div>
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
