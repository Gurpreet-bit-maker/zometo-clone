import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext } from "react";

export default function LessTwoK() {
  let { DiningRestaurents } = useContext(CartContext);

  let lessPrice = DiningRestaurents.filter((item) => {
    return item.menu.some((m) => m.price < 100);
  });
  // console.log(lessPrice);

  return (
    <div>
      <div>
        {/* {lessPrice.map((item, index) => {
          return (
            <div
              className="border w-80 mt-2 py-5 flex flex-col justify-center items-center"
              key={index}
            >
              <h2>{item.name}</h2>
              <p>{item.discount}</p>
              <p>{item.rating}</p>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}
