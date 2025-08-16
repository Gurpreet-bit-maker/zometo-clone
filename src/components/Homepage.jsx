import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import restaurants from "../data/Data";
export default function Homepage() {
  let [highestPriceObj, setHighprice] = useState([]);

  useEffect(() => {
    setHighprice(restaurants);
  }, []);
  //! learining work
  //   let clickBtn = () => {
  //     let gratestNum = nums.find((element) => element.discount < 274);
  //     setHighprice([{ discount: gratestNum.discount, name: gratestNum.name }]);
  //   };
  let clickBtn = () => {
    let gratestNum = restaurants.filter((element) => element.discount < 274);
    setHighprice(gratestNum);
    console.log(gratestNum);
  };

  //*added to cart
  let [addedToCart, setToCart] = useState([]);

  let addedBtn = (index) => {
    let addedobj = highestPriceObj.map((items, i) =>
      i == index ? { ...items, add: !items.add } : items
    );
    setHighprice(addedobj);

    let isadded = highestPriceObj.filter((items) => items.add);
    setToCart(isadded);
  };
  console.log(addedToCart);

  //* show cartlist value as a counter

  return (
    <div>
      {highestPriceObj.map((items, index) => {
        return (
          <div key={index} className="border-2 w-1/2 ml-3 mt-3">
            <p>{items.name}</p>
            <b>{items.discount}</b>
            <br />
            <br />
            <button onClick={() => clickBtn()} className="border">
              search high to low
            </button>
            <Link className="border-1 m-1 border-red-300 p-1" to={`/restaurants/${index}`}>veiw details</Link>
            {/* <button onClick={() => Navigate(`/restaurants/${index}`)}}>veiw details</button> */}

            {items.add ? (
              <button
                className="border ml-2 bg-green-300"
                onClick={() => addedBtn(index)}
              >
                Added
              </button>
            ) : (
              <button
                className="border ml-2 bg-red-200"
                onClick={() => addedBtn(index)}
              >
                Add
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
