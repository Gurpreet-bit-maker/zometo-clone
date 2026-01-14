import { Link, useLocation } from "react-router-dom";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";
export default function Takesinglefood() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  let restaurantsData = useLocation();
  let resData = restaurantsData.state;

  // user details form
  let [isClicked, setCliked] = useState(false);

  useEffect(() => {
    console.log(isClicked);
  });

  let r = setTimeout(() => {
    return restaurantsData.state;
  }, 2000);
  console.log(r);

  // qnty btns func
  let [qnty, setQnty] = useState(1);

  // gst amount
  let gstRate = 5;
  let withQntyAmt = resData.price * qnty;
  let gstAmount = (gstRate / 100) * withQntyAmt;
  let totalAmount = gstAmount + withQntyAmt;

  //   buy btn func
  let buyBtn = () => {
    setO_Res((prev) =>
      prev.map((item) => {
        return {
          ...item,
          menu: item.menu.map((food) =>
            food.name == resData.name
              ? {
                  ...food,
                  added: true,
                  quantity: qnty > 0 && qnty,
                }
              : food
          ),
        };
      })
    );
  };
  let orderedTrue = onlineOrders.some((x) => {
    return x.menu.some((y) => y.added);
  });
  console.log(orderedTrue);
  // console.log(onlineOrders);
  return (
    <div className="">
      {/* form */}
     
      <div className="flex justify-around  shadow-2xl h-50">
        <div className="flex flex-col gap-y-10">
          <p className="font-bold">
            {" "}
            <img
              className="w-5 inline pb-1 mr-5"
              src={resData.imagelogo}
              alt=""
            />{" "}
            {resData.name}
          </p>
          <p className="text-[13px] text-gray-500">NOT ELIGABLE FOR COPOUNS</p>
        </div>
        {/* qnty btns */}

        <div className=" flex flex-col">
          <div className=" flex gap-x-1 justify-center items-center h-10 rounded-sm  bg-pink-50">
            <button
              onClick={() => setQnty(qnty > 0 && qnty - 1)}
              className="text-pink-400  w-8 flex justify-center items-center m-auto text-[22px] h-8 "
            >
              -
            </button>
            <p>{qnty}</p>

            <button
              onClick={() => setQnty(qnty + 1)}
              className="text-pink-400  w-8 flex justify-center items-center m-auto text-[22px] h-8 "
            >
              +
            </button>
          </div>
          <p className="ml-2 tracking-wider font-bold">
            ₹{resData.price}{" "}
            <del className="text-gray-400 text-sm">₹{resData.beforeRate}</del>
          </p>
          {/* buy botton absolute */}
          <div className="h-30 relative w-40">
            {!orderedTrue ? (
              <button
                type="button"
                onClick={buyBtn}
                className=" active:scale-105 box-border border border-transparent hover:bg-danger-strong focus:ring-4 focus:ring-danger-medium shadow-xs font-medium leading-5 rounded-base absolute top-20 right-0 px-2 w-full h-14 rounded-lg text-white flex justify-between bg-[#DC5C63] border"
              >
                <span className="font-bold">
                  ₹{totalAmount} <br />
                  <span className="font-medium">Total</span>
                </span>
                <span className="font-bold tracking-wide flex justify-center items-center">
                  Place Order
                </span>
              </button>
            ) : (
              <button
                type="button"
                onClick={buyBtn}
                className="  active:scale-105  absolute top-20 right-0 px-2 w-full h-14 rounded-lg text-white flex justify-between bg-green-600 border"
              >
                <span className="font-bold">
                  ₹{totalAmount} <br />
                  <span className="font-medium">Total</span>
                </span>
                <span className="font-bold text-lg tracking-wide flex justify-center items-center">
                  Ordered
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
      {/* cheif img */}
      <br />
      <div>
        <img src="/online/cheif.png" alt="" />
      </div>
    </div>
  );
}
