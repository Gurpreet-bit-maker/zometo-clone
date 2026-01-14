import CartContext from "../../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";
export default function Ordered() {
  let { onlineOrders, setO_Res } = useContext(CartContext);

  let ordered = onlineOrders.filter((e) => {
    return e.menu.some((m) => m.added);
  });
  // console.log(ordered);

  let quantity = onlineOrders.flatMap((item) => {
    return item.menu.filter((m) => m.quantity);
  });
  // console.log(quantity[0].price);

  //* gst price for display
  let gstRate = 5;
  let withQntyAmt =
    quantity.length > 0 && quantity[0].price * quantity[0].quantity;
  let gstAmount = (gstRate / 100) * withQntyAmt;
  let totalAmount = gstAmount + withQntyAmt;
  console.log(totalAmount);

  // let [count, setCount] = useState(0);
  // if (ordered.length > 0) {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }

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
        {ordered.map((item) => {
          return item.menu.map((e, i) => {
            return e.added ? (
              <div className="shadow-lg rounded-lg  text-[20px]" key={i}>
                <div className="flex gap-x-24 tracking-wide">
                  <div className="flex justify-between px-5 w-full bg-white h-25">
                    <div className="flex">
                      <img
                        className="w-5 inline pt-1 mr-5 h-7"
                        src={quantity[0].imagelogo}
                        alt=""
                      />{" "}
                      <p className="">{e.name}</p>
                    </div>

                    <p>₹{totalAmount}</p>
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

{
  /* <div className="flex flex-col gap-y-2">
                    <span className="text-red-500 text-[13px] font-bold">
                      <span className="text-[28px]">⏱</span> {1}{" "}
                    </span>
                    <button
                      onClick={() => deleteOrder(e.name)}
                      className="border bg-black text-white shadow-lg text-sm p-2 rounded-sm"
                    >
                      Delete
                    </button>
                  </div> */
}
