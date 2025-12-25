import { useContext } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";

export default function Cartsitems() {
  let { cartsItems } = useContext(CartContext);

  console.log(cartsItems);

  return (
    <div className="bg-gray-300 border h-50">
      <h1 className="font-bold font-mono text-center">Cart items</h1>
      {cartsItems.map((item, index) => {
        return (
          <div key={index}>
            <p className="text-blue-500">{item.name}</p>
          </div>
        );
      })}
    </div>
  );
}
