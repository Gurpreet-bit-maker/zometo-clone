import { useContext, useState } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";
import { useEffect } from "react";

export default function Cartsitems() {
  let { cartsItems, DiningRestaurents, setcarts } = useContext(CartContext);

  // ! very importand logic
  let cartAddition = (i) => {
    setcarts((prev) =>
      prev.map((e, index) =>
        index === i ? { ...e, cart: (e.cart || 0) + 1 } : e
      )
    );
  };
  // ! very importand logic
  let cartSubstraction = (i) => {
    setcarts((prev) =>
      prev.map((e, index) =>
        index === i && e.cart > 0 ? { ...e, cart: e.cart - 1 } : e
      )
    );
  };


  // console.log(DiningRestaurents);

  useEffect(() => {
    console.log(DiningRestaurents);
  }, []);

  return (
    <div className="bg-gray-300 border h-50">
      <h1 className="font-bold font-mono text-center">Cart items</h1>
      {DiningRestaurents.map((item, index) => {
        return item.menu.map((m, i) => {
          {
            if (m.added) {
              return (
                <div
                  className="flex justify-around bg-green-300 border p-1"
                  key={i}
                >
                  <p>{m.name}</p>
                  <div className="flex gap-x-3 items-center justify-between ">
                    <button
                      onClick={cartAddition}
                      className="border w-5 rounded-sm"
                    >
                      +
                    </button>
                    <button className="border w-5 rounded-sm">-</button>
                    <p>{m.cart}</p>
                  </div>
                </div>
              );
            }
          }
        });
      })}
      {/* {cartsItems.map((e, i) => {
        return (
          <div className="flex justify-around" key={i}>
            <p>{e.name}</p>
            <div className="flex gap-x-3 items-center justify-between ">
              <button
                onClick={() => cartAddition(i)}
                className="border w-5 rounded-sm"
              >
                +
              </button>
              <button
                onClick={() => cartSubstraction(i)}
                className="border w-5 rounded-sm"
              >
                -
              </button>
              <p>{e.cart}</p>
            </div>
          </div>
        );
      })} */}
    </div>
  );
}
