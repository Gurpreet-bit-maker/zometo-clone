import { useContext } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";
import FilterComp from "../components/FilterComp";

export default function Indining() {
  let { DiningRestaurents } = useContext(CartContext);

  console.log(DiningRestaurents);

  return (
    <div>
      <div className="border">
        <h1 className="text-lg font-bold">Filter</h1>
        <FilterComp />
      </div>

      <h1>Dining's</h1>
      {DiningRestaurents.map((item, index) => {
        return (
          <div key={index} className="text-center">
            <div className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center ">
              <h3>{item.category}</h3>
              <h2 className=" mb-2 text-[1.4rem]">{item.name}</h2>
              <img className="w-60 h-50 rounded-2xl" src={item.image} alt="" />
              <div>
                <p> Discount : {item.discount}</p>
                <p>location {item.location}</p>
                <p>rating {item.rating}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
