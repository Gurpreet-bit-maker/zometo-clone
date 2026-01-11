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
      <h1 className="text-center text-2xl tracking-wider mb-2">Online Orders</h1>
      <div className="flex flex-col justify-center items-center">
        {onlineOrders.map((item, index) => {
          return (
            <div
              className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center"
              key={index}
            >
              <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
              <img className="w-60 h-50 rounded-2xl" src={item.image} alt="" />
              <p>Rating {item.rating}</p>

              <Link to="/menuItems" state={item}>
                <button className="border bg-blue-400 py-1 px-3 text-sm text-shadow-lg tracking-wider rounded-sm text-white">
                  Orders
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
