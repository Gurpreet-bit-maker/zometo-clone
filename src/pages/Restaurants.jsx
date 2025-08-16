// Food data
import { Link } from "react-router-dom";
import restaurants from "../data/Data";
export default function Restaurants() {
  console.log(restaurants);
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      {restaurants.map((items, index) => {
        return (
          <Link className=" " to={`/restaurants/${index}`}>
            <div key={index} className="shadow-lg rounded w-70 p-3">
              <img className=" w-full h-40" src={items.image} alt="" />

              <div className="flex gap-18 relative mt-3">
                <h1 className=" inline text-[15px] font-bold w-30">{items.name}</h1>
                <span className="bg-green-600 px-5  text-white rounded">
                  {items.rating}{" "}
                </span>
                <img
                  src={"/public/icons/star.png"}
                  className="absolute right-1 top-1 "
                  alt=""
                />
              </div>

              <p className="text-sm text-gray-400">{items.location}</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
