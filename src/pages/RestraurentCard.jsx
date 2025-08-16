import { useParams } from "react-router-dom";
import restaurants from "../data/Data";
import { useState } from "react";
import Carts from "../components/Carts";

export default function RestaurantCard() {
  let { id } = useParams();
  console.log(id);
  console.log(restaurants);
  let selectedCard = restaurants.find((product) => product.id === parseInt(id));
  // Menu list
  let [isOpenMenu, setOpenMenu] = useState(false);
  // Added to cart
  let [counterFirst, setCounter] = useState(0);

  return (
    <div className="flex flex-col gap-10 justify-center items-center">
      <div className=" w-80 p-3 shadow-lg rounded">
        <img className="w-full h-70" src={selectedCard.image} alt="" />
        <div className="flex gap-25 relative mt-3">
          <h1 className=" inline text-lg font-bold w-35">
            {selectedCard.name}
          </h1>
          <span className="bg-green-600 px-5  text-white rounded">
            {selectedCard.rating}{" "}
          </span>
          <img
            src={"/public/icons/star.png"}
            className="absolute right-0 top-1 "
            alt=""
          />
        </div>

        <p>{selectedCard.location}</p>
        <button
          onClick={() => setOpenMenu(!isOpenMenu)}
          className="border bg-red-600 text-white font-bold tracking-wide px-1 active:bg-gray-300 active:text-black"
        >
          Open Menu
        </button>
      </div>

      <div className="">
        {isOpenMenu
          ? selectedCard.menu.map((items, index) => {
              return (
                <div
                  key={index}
                  className="bg-green-300 text-black text-lg hover:bg-black hover:text-white h-20 w-70 flex justify-center items-center gap-4"
                >
                  <b className="text-shadow-lg tracking-wider border">
                    {index + 1} {items.name} {}
                  </b>
                  <div className="flex gap-2">
                    <p className="border w-5 text-center ">+</p>
                    <p className="border w-5 text-center ">-</p>
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
