import { act, useContext, useReducer, useState } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { Link, useLocation } from "react-router-dom";
import TakeOutBtn from "./TakeOutBtn";

export default function TakeOutMenu() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  let restaurantsData = useLocation();
  let resData = restaurantsData.state;
  // console.log(resData);

  let [showQnty, setQnty] = useState(false);

  let Reducer = (state, action) => {
    if (action.type === "inc") {
      return { count: state.count + 1 };
    }
    if (action.type === "dec") {
      return { count: state.count - 1 };
    }
  };

  let [state, dispatch] = useReducer(Reducer, { count: 0 });

  let orderedBtn = (itemName) => {
    setO_Res((prev) =>
      prev.map((m) => {
        return {
          ...m,
          menu: m.menu.map((n) =>
            n.name == itemName ? { ...n, added: true } : n
          ),
        };
      })
    );

    setQnty(true);
  };

  
  // console.log(onlineOrders);
  // console.log(resData);

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100 shadow-lg">
      {/* try */}
      {showQnty && (
        <>
          {/* overlay */}
          <div className="fixed inset-0 bg-black/50 z-40"></div>

          {/* modal */}
          <div className="fixed inset-0 flex items-center justify-center z-50 ">
            <div className="bg-white p-6 rounded-xl shadow-xl h-40 w-80">
              <div className="flex justify-around">
                <span className="font-bold text-lg">Quantity</span>
                <div className="flex gap-x-3 ">
                  <button
                    className="border w-5"
                    onClick={() => dispatch({ type: "dec" })}
                  >
                    -
                  </button>
                  <button
                    className="border w-5"
                    onClick={() => dispatch({ type: "inc" })}
                  >
                    +
                  </button>
                </div>
                <p>{state.count}</p>
              </div>
              <br />
              <div className="flex justify-center items-center">
                <button
                  className="border rounded-sm shadow-lg active:bg-red-300 px-2 bg-gray-500 text-white py-1"
                  onClick={() => setQnty(false)}
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </>
      )}

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
                  <p className="w-auto text-lg tracking-wide">
                    {m.name}{" "}
                    <span className="text-sm font-bold">Rs.{m.price}</span>
                  </p>
                  {m.added ? (
                    <button
                      onClick={() => orderedBtn(m.name)}
                      className="bg-green-500 text-white px-2"
                    >
                      Ordered
                    </button>
                  ) : (
                    <button
                      onClick={() => orderedBtn(m.name)}
                      className="bg-red-500 text-white px-2"
                    >
                      Order Now
                    </button>
                  )}
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
