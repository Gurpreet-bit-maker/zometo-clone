import CartContext from "../../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";
export default function Ordered() {
  let { onlineOrders, setO_Res, onlineOrdersList } = useContext(CartContext);
  console.log(onlineOrdersList);

  let shipmentsObj = onlineOrders.flatMap((item) => {
    return item.menu.filter((m) => m.quantity);
  });
  console.log(shipmentsObj);

  //* gst price for display
  let gstRate;
  let gstAmount;
  let withQntyAmt;
  let totalAmount;

  let multipleItemTotal = [];

  for (let index = 0; index < shipmentsObj.length; index++) {
    console.log(shipmentsObj[index]);
    gstRate = 5;
    withQntyAmt =
      shipmentsObj.length >= 0 &&
      shipmentsObj[index].price * shipmentsObj[index].quantity;
    gstAmount = (gstRate / 100) * withQntyAmt;
    totalAmount = gstAmount + withQntyAmt;
    multipleItemTotal.push(shipmentsObj[index].price);
  }
  console.log(multipleItemTotal);
 
  let resulttwo = multipleItemTotal.reduce((acc, current) => {
    return acc + current;
  }, 0);
  console.log(resulttwo);
  // console.log(totalAmount);

  // let [count, setCount] = useState(0);
  // if (ordered.length > 0) {
  //   setTimeout(() => {
  //     setCount(count + 1);
  //   }, 1000);
  // }

  // let deleteOrder = (itemName) => {
  //   setO_Res((prev) =>
  //     prev.map((m) => {
  //       return {
  //         ...m,
  //         menu: m.menu.map((n) =>
  //           n.name == itemName ? { ...n, added: !n.added } : n
  //         ),
  //       };
  //     })
  //   );
  //   console.log(itemName);
  // };

  return (
    <div className="bg-white h-170 ">
      <div className=" py-10">
        {onlineOrdersList.length > 0 ? (
          onlineOrdersList.map((item, index) => {
            return (
              <div className="  shadow-2xl " key={index}>
                <div className=" flex justify-between px-5 text-[22px] ">
                  <div className="flex items-center">
                    <img className="w-5 h-5 mr-1" src={item.imagelogo} alt="" />
                    <h1>{item.name}</h1>
                  </div>
                  <p className="text-[18px]">Qty.{item.quantity}</p>
                  <p>₹{item.price * item.quantity}</p>
                </div>
                {/*  */}
              </div>
            );
          })
        ) : (
          <div>
            <img
              className="w-35 pl-5 inline-block"
              src="/icons/oops.png"
              alt=""
            />
            <span className="text-pink-400 font-bold text-lg">
              You Don't Have Order...
            </span>
          </div>
        )}
        {/* item details */}
        <div className="bg-[#FDE9EA] mt-3  flex justify-between  px-5 py-4">
          <div className="text-gray-600 text-[18px] flex flex-col gap-y-2 ">
            <p>Item Total</p>
            <p>Delivery Charges</p>
            <p>GST Amount</p>
            <strong>GRAND TOTAL</strong>
          </div>
          {/*//! TODO: work pending */}
          <div className="text-gray-500 text-[18px] flex flex-col gap-y-2">
            <p>{withQntyAmt}</p>
            <p>0</p>
            <p>{gstAmount}</p>
            <strong>{totalAmount}</strong>
          </div>
        </div>
        {/*  your details */}{" "}
        <div className=" px-5 py-5 mt-2 flex justify-between items-center">
          <div className="text-gray-500 text-[19px] leading-8">
            <h1 className=" text-[25px] text-black mb-1">Your Details</h1>
            <p>User: address</p>
            <p>Phone No: 0123456789</p>
          </div>
          {/* //! TODO: address change work pending */}
          <button
            type="button"
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 h-10"
          >
            Change
          </button>
        </div>
      </div>
      {/* delivery img */}
      <div className=" flex justify-center w-full">
        <img className=" w-60" src="/icons/delivery.jpg" alt="" />
      </div>
    </div>
  );
}

//  <p>₹{shipmentsObj[]}</p>
//             <p>₹0</p>
//             <p>₹{}</p>

{
  //! item details

  //  <div className="bg-[#FDE9EA] mt-2 flex justify-between px-5 py-2">
  //                     <div className="text-gray-500 text-[18px]">
  //                       <p>Item Total</p>
  //                       <p>Delivery Charges</p>
  //                       <p>GST Amount</p>
  //                       <strong>GRAND TOTAL</strong>
  //                     </div>
  //                     <div className="text-gray-500 text-[18px]">
  //                       <p>₹{withQntyAmt}</p>
  //                       <p>₹0</p>
  //                       <p>₹{gstAmount}</p>
  //                       <strong>{totalAmount}</strong>
  //                     </div>
  //                   </div>

  //! you details

  //  <div className=" px-5 py-5 mt-2 flex justify-between items-center">
  //                     <div className="text-gray-500 text-[19px] leading-8">
  //                       <h1 className=" text-[25px] text-black mb-1">
  //                         Your Details
  //                       </h1>
  //                       <p>User: address</p>
  //                       <p>Phone No: 0123456789</p>
  //                     </div>
  //                     <button
  //                       type="button"
  //                       className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-base text-sm px-4 py-2.5 text-center leading-5 h-10"
  //                     >
  //                       Change
  //                     </button>
  //                   </div>

  //! delivery img
  {
    /* <div className=" flex justify-center w-full">
                    <img className=" w-60" src="/icons/delivery.jpg" alt="" />
                  </div> */
  }

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
