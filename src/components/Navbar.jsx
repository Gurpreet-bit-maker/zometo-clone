import img from "../../public/searchImg/searchicon.png";
import Carts from "./Carts";
import restaurants from "../data/Data";
import { useEffect, useState } from "react";
// console.log(restaurants[0].menu[0].name);

export default function Navbar() {
  let [menuItems, setMenuItems] = useState([]);
  let [inputValue, setInput] = useState("");
  let [searchedValue, setSearchedValue] = useState([]);
  // get Restaurant data menu
  let allItems = [];
  useEffect(() => {
    restaurants.map((items, _) => {
      items.menu.map((inItems, _) => {
        if (inItems.name) {
          allItems.push(inItems.name);
        }
      });
    });
    setMenuItems(allItems);
  }, []);

  // Input values
  let inpVal = (alphabate) => {
    setInput(alphabate);
    if (alphabate) {
      let v = menuItems.filter((e) =>
        e.toLowerCase().includes(alphabate.toLowerCase())
      );
      setSearchedValue(v);
    } else {
      setSearchedValue([]);
    }
  };
  let [selectedItem, setSelectedItem] = useState(null);
 

  return (
    <div className="flex relative flex-col">
      <div className=" mt-5 mx-2 relative rounded shadow-lg ">
        <img src={img} alt="" className="inline w-9 p-1 absolute" />
        <input
          type="text"
          placeholder="search Restaurant . . ."
          className=" ml-10 h-10 w-80 pl-5"
          onChange={(e) => inpVal(e.target.value)}
          value={inputValue}
        />
      </div>

      <div className="border rounded-[13px] bg-green-200 h-6 text-center absolute right-3 top-7 w-8 ">
        <Carts />
      </div>
      <br />
      <br />
      <div className="flex flex-col  absolute top-15 w-full text-center">
        {searchedValue.map((items, index) => {
          return (
            <ul
              key={index}
              className="flex flex-col  m-auto w-auto bg-gray-100 rounded-wide px-1 text-sm shadow-lg"
              onClick={() => setSelectedItem(items)}
            >
              <li>{items}</li>
            </ul>
          );
        })}

        <p className="text-red-400">{selectedItem}</p>
      </div>
    </div>
  );
}
