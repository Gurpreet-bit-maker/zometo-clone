import CartContext from "../../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";
export default function Ordered() {
  let { onlineOrders, setO_Res } = useContext(CartContext);

  let ordered = onlineOrders.filter((e) => {
    return e.menu.some((m) => m.added);
  });
  console.log(ordered);

  let [count, setCount] = useState(0);
  if (ordered.length > 0) {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  let deleteOrder = (itemName) => {
    setO_Res((prev) =>
      prev.map((m) => {
        return {
          ...m,
          menu: m.menu.map((n) =>
            n.name == itemName ? { ...n, added: !n.added } : n
          ),
        };
      })
    );
    console.log(itemName);
  };

  return (
    <div className="bg-[#F1F8E9] h-170">
      <div>
        <h1 className="text-[30px] text-center mb-5">Your Orders</h1>
        {ordered.map((item) => {
          return item.menu.map((e, i) => {
            return e.added ? (
              <div
                className="shadow-lg rounded-lg mx-5 px-2 py-2 bg-gray-400 text-[20px]"
                key={i}
              >
                <div className="flex gap-x-24 tracking-wide">
                  <div className="flex gap-x-8">
                    <p className="">{e.name}</p>
                    <p>Qty</p>
                  </div>
                  <div className="flex flex-col gap-y-2">
                    <span className="text-red-500 text-[13px] font-bold">
                      <span className="text-[28px]">⏱</span> {count}{" "}
                    </span>
                    <button
                      onClick={() => deleteOrder(e.name)}
                      className="border bg-black text-white shadow-lg text-sm p-2 rounded-sm"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ) : // work pending
            null;
          });
        })}
      </div>
    </div>
  );
}
