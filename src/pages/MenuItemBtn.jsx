import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";

export default function MenuItemBtn({ menuName }) {
  let { DiningRestaurents, setD_Res, setcarts } = useContext(CartContext);

  let menuItem = (i) => {
    console.log(i);

    setD_Res(
      DiningRestaurents.map((item) => {
        return {
          ...item,
          menu: item.menu.map((m) => {
            return m.name == i ? { ...m, added: !m.added } : m;
          }),
        };
      })
    );
  };

  useEffect(() => {
    let addedCartKey = DiningRestaurents.flatMap((x) => {
      return x.menu.filter((y) => y.added);
    });
    setcarts(addedCartKey);
  }, [DiningRestaurents]);

  return (
    <div>
      <button>
        {menuName.name}{" "}
        <span onClick={() => menuItem(menuName.name)} className="text-red-300">
          {/* { console.log(menuName.price)} */}
          {menuName.added ? "ordered" : "order"}
        </span>
      </button>
    </div>
  );
}
