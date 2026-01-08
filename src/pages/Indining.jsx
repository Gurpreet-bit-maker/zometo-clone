import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";
import MenuItemBtn from "./MenuItemBtn";
import { Link } from "react-router-dom";

export default function Indining() {
  let { DiningRestaurents } = useContext(CartContext);
  // console.log(DiningRestaurents);

  // ! note this logic
  let [filterValue, setvalue] = useState([]);
  let [Rating, setRating] = useState([]);
  let [LessPrice, setLessPrice] = useState([]);

  let filterFunc = (e) => {
    if (filterValue.includes(e.target.value)) {
      setvalue((prev) => [...prev]);
    } else {
      setvalue((prev) => [...prev, e.target.value]);
    }
  };

  //* remove filter func
  let removeFilterBtn = (i) => {
    let deleted = filterValue.filter((_, index) => index !== i);
    setvalue(deleted);
  };
  // ! Original work
  let RatingIsAdded = filterValue.includes("Rating");
  let LowPriceIsAdded = filterValue.includes("Lessprice");
  // console.log(RatingIsAdded);
  // console.log(LowPriceIsAdded);

  // * Rating work
  useEffect(() => {
    if (RatingIsAdded) {
      let RatingObj = DiningRestaurents.filter((item) => item.rating > 4.6);
      setRating(RatingObj);
    } else {
      setRating([]);
    }
  }, [filterValue]);
  // * Less price work
  useEffect(() => {
    if (LowPriceIsAdded) {
      let priceObj = DiningRestaurents.filter((item) => {
        return item.menu.some((m) => m.price < 100);
      });
      setLessPrice(priceObj);
    } else {
      setLessPrice([]);
    }
  }, [filterValue]);
  // * menuItems

  return (
    <div>
      <div className="flex gap-x-1 m-auto w-fit">
        <select
          className="border"
          name=""
          id=""
          value={filterValue}
          onChange={filterFunc}
        >
          <option className="text-shadow-lg" value="">
            Filter
          </option>
          <option value="Rating">Rating</option>
          <option value="Lessprice">lessprice</option>
        </select>

        <div className="flex gap-x-2">
          {filterValue.map((item, index) => {
            return (
              <ul key={index}>
                <li className="border w-25 px-1 text-center">
                  {item}{" "}
                  <span
                    onClick={() => removeFilterBtn(index)}
                    className="text-red-500 bg-green-200 px-1 "
                  >
                    X
                  </span>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
      {/* All container */}
      <div className="flex flex-col justify-center items-center">
        {RatingIsAdded
          ? Rating.map((item, index) => {
              return (
                <div
                  className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center"
                  key={index}
                >
                  <p className="bg-pink-400 px-2 text-white">Highrating</p>
                  <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
                  <img
                    className="w-60 h-50 rounded-2xl"
                    src={item.image}
                    alt=""
                  />

                  <div className="flex justify-between flex-col">
                    <p className="text-center">{item.rating}</p>
                    <MenuItemBtn />
                  </div>
                </div>
              );
            })
          : null}
        {LowPriceIsAdded
          ? LessPrice.map((item, index) => {
              return (
                <div
                  className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center"
                  key={index}
                >
                  <p className="bg-yellow-400 px-2 text-white">LowPrice</p>
                  <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
                  <img
                    className="w-60 h-50 rounded-2xl"
                    src={item.image}
                    alt=""
                  />

                  <div className="flex justify-between flex-col">
                    <p className="text-center">{item.rating}</p>
                    <MenuItemBtn />
                  </div>
                </div>
              );
            })
          : null}
        {Rating.length == 0 &&
        LessPrice.length == 0 &&
        DiningRestaurents.length > 0
          ? DiningRestaurents.map((item, index) => {
              return (
                <div
                  className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center"
                  key={index}
                >
                  <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
                  <img
                    className="w-60 h-50 rounded-2xl"
                    src={item.image}
                    alt=""
                  />
                  <p>{item.rating}</p>
                  {/* {item.menu.map((menuName, i) => {
                    return (
                      <div key={i}>
                        <MenuItemBtn menuName={menuName} index={i} />
                      </div>
                    );
                  })} */}
                  <Link to="/diningPage" state={item}>
                    <MenuItemBtn />
                  </Link>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}
