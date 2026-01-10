import { useContext } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import TakeOutBtn from "./TakeOutBtn";
import { Link } from "react-router-dom";
import TakeOutMenu from "./TakeOutMenu";

export default function TakeOutPerent() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  //   console.log(onlineOrders);

  return (
    <div>
      <h1>Online Orders</h1>
      <div>
        {onlineOrders.map((item, index) => {
          return (
            <div
              className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center"
              key={index}
            >
              <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
              <img className="w-60 h-50 rounded-2xl" src={item.image} alt="" />
              <p>{item.rating}</p>

              <Link to="/menuItems" state={item}>
               <button className="border bg-red-400 px-2 text-white">orders</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
