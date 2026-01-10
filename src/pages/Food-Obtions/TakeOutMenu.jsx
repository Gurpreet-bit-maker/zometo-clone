import { useContext, useState } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { Link, useLocation } from "react-router-dom";
import TakeOutBtn from "./TakeOutBtn";

export default function TakeOutMenu() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  let restaurantsData = useLocation();
  let resData = restaurantsData.state;
  //   console.log(resData);
  let [isadd, setIssAdd] = useState(false);
  console.log(onlineOrders);

  return (
    <div className="flex justify-center items-center flex-col bg-gray-100">
      <div className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center">
        <h1 className="text-lg">{resData.name}</h1>
        <div className="relative">
          <img className="w-60 h-50 rounded-2xl" src={resData.image} alt="" />
          <p className="absolute top-40 bg-green-400 w-20 pl-1 rounded-sm">
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
            ? e.menu.map((m) => (
                <div className="mt-2">
                  <p className="w-auto">{m.name}</p>
                  {!isadd ? (
                    <button
                      onClick={() => setIssAdd(!isadd)}
                      className="bg-red-500 text-white px-2"
                    >
                      Ordered
                    </button>
                  ) : (
                    <button className="bg-red-500 text-white px-2">
                      Order Now
                    </button>
                  )}
                </div>
              ))
            : null;
        })}
      </div>
      {/* Descriptian Restaurent details */}
      <div className="p-5 ">
        <h3>description</h3>
        <p>{resData.description}</p>
      </div>
    </div>
  );
}
