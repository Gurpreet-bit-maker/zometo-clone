import img from "../../public/searchImg/searchicon.png";
import restaurants from "../data/Data";
import { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartsContext/CartCreateContext";

import { Link } from "react-router-dom";

import * as React from "react";
import PropTypes from "prop-types";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import SvgIcon from "@mui/material/SvgIcon";
import userAuthentication from "../context/authentication/authenticationCreate";

const FontAwesomeSvgIcon = React.forwardRef((props, ref) => {
  const { icon } = props;

  const {
    icon: [width, height, , , svgPathData],
  } = icon;

  return (
    <SvgIcon ref={ref} viewBox={`0 0 ${width} ${height}`}>
      {typeof svgPathData === "string" ? (
        <path d={svgPathData} />
      ) : (
        /**
         * A multi-path Font Awesome icon seems to imply a duotune icon. The 0th path seems to
         * be the faded element (referred to as the "secondary" path in the Font Awesome docs)
         * of a duotone icon. 40% is the default opacity.
         *
         * @see https://fontawesome.com/how-to-use/on-the-web/styling/duotone-icons#changing-opacity
         */
        svgPathData.map((d, i) => (
          <path style={{ opacity: i === 0 ? 0.4 : 1 }} d={d} />
        ))
      )}
    </SvgIcon>
  );
});
FontAwesomeSvgIcon.propTypes = {
  icon: PropTypes.any.isRequired,
};

export default function Navbar() {
  let { onlineOrders, DiningRestaurents } = useContext(CartContext);
  let { loginData, signUpData } = useContext(userAuthentication);

  let diningBookedCounts = DiningRestaurents.filter((e) => {
    return e.added;
  });

  let ordered = onlineOrders.flatMap((e) => {
    return e.menu.filter((m) => m.added);
  });

  // States Varible
  let [menuItems, setMenuItems] = useState([]);
  let [inputValue, setInput] = useState("");
  let [searchedValue, setSearchedValue] = useState([]);
  let [isthreeDotClicked, setThreeDotClick] = useState(false);
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
        e.toLowerCase().includes(alphabate.toLowerCase()),
      );
      setSearchedValue(v);
    } else {
      setSearchedValue([]);
    }
  };
  let [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="flex relative flex-col w-90 md:w-full ">
      {/* account name */}
      {loginData.length > 0 && (
        <p className="mt-2 text-white text-center ml-1 px-1 bg-green-400 w-5 rounded-2xl">
          {loginData[0].username.slice(0, 1).toUpperCase()}
        </p>
      )}

      <div className=" mt-5 mx-2 flex justify-between rounded shadow-lg  w-90 md:w-full md:h-25 md:items-center">
        <img src={img} alt="" className="inline w-9 p-1 absolute" />
        <input
          type="text"
          placeholder="search Restaurant . . ."
          className=" ml-10 h-10 w-60  pl-5 md:w-110 md:ml-10  md:text-2xl md:h-15"
          onChange={(e) => inpVal(e.target.value)}
          value={inputValue}
        />

        <div className="rounded-[13px] w-5 relative md:mr-5">
          {" "}
          <Stack>
            <IconButton
              aria-label="Example"
              onClick={() => setThreeDotClick(!isthreeDotClicked)}
            >
              <FontAwesomeSvgIcon icon={faEllipsisV} />
            </IconButton>
          </Stack>
        </div>

        {/* threeDotClicked div */}
        {isthreeDotClicked && (
          <div className="flex flex-col bg-black/70 border h-20 absolute right-5 bg-gray-400 text-lg top-15 z-1 md:right-[-110px] md:top-25 md:h-30 md:w-30">
            <Link
              to="/ordered"
              className="px-3 flex flex-col border bg-red-400 text-black md:bg-white md:text-[20px]"
              onClick={() => setThreeDotClick(false)}
            >
              <p className="relative tracking-wider">
                Orders
                {ordered.length > 0 && (
                  <p className="absolute left-14  text-white bottom-2 bg-black w-5 text-center rounded-lg text-sm">
                    {ordered.length}
                  </p>
                )}
              </p>
            </Link>
            <Link
              to="/diningbooked"
              className="px-3 flex flex-col border bg-red-400 text-black md:bg-white md:text-[20px]"
              onClick={() => setThreeDotClick(false)}
            >
              <p className="relative tracking-wider">
                Dinings
                {diningBookedCounts.length > 0 && (
                  <p className="absolute left-15  text-white bottom-2 bg-black w-5 text-center rounded-lg text-sm">
                    {diningBookedCounts.length}
                  </p>
                )}
              </p>
            </Link>
          </div>
        )}
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
