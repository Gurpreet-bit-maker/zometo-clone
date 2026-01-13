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

  console.log(onlineOrders);
  return (
    <div className="">
      {/* name and cart btns */}
      {!isClicked && (
        <div className="">
          <div className="absolute inset-0 z-40 bg-black/60"></div>
          <div className="fixed top-50 left-17 z-50 bg-white w-70 h-90 rounded-sm">
            <h1 className="text-center text-lg mt-5 ">Fill The Form</h1>
            <div className=" flex flex-col gap-y-3 px-5 mt-2 h-70">
              <input
                className="border px-2 h-10"
                type="text"
                placeholder="Your Name.."
              />
              <input
                className="border px-2 h-10"
                type="text"
                placeholder="Your Mobile.."
              />
              <textarea
                className="border px-2 h-30"
                name=""
                placeholder="Enter Address.."
                id=""
              ></textarea>
              <div className="flex justify-center">
                <button
                  onClick={() => setCliked(!isClicked)}
                  className="border px-3 py-1 tracking-wide rounded-sm shadow-lg  bg-green-400 text-white "
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
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
            <button
              onClick={buyBtn}
              className="absolute top-20 right-0 px-2 w-full h-14 rounded-lg text-white flex justify-between bg-[#DC5C63] border"
            >
              <span className="font-bold">
                ₹{totalAmount} <br />
                <span className="font-medium">Total</span>
              </span>
              <span className="font-bold tracking-wide flex justify-center items-center">
                Place Order
              </span>
            </button>
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
