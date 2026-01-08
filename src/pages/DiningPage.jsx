import { useNavigate, useLocation } from "react-router-dom";
import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useEffect, useState } from "react";
import * as React from "react";
// import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";

export default function DiningPage() {
  let { DiningRestaurents, setD_Res } = useContext(CartContext);
  let result = useLocation();
  let [covers, setCovers] = useState(0);
  //! iss data ko dummy data for conditiona check k liye rkhengay.
  let RestraurentState = result.state;
  console.log(RestraurentState);

  // * ui
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });
  const { vertical, horizontal, open } = state;
  const handleClick = (newState) => () => {
    if (covers > 0) {
      setState({ ...newState, open: true });
      setD_Res((prev) =>
        prev.map((m) =>
          m.name === RestraurentState.name
            ? {
                ...m,
                added: true,
                ...(covers >= 5
                  ? { ds: "20%", cover: covers }
                  : { ds: "10%", cover: covers }),
              }
            : m
        )
      );
      setCovers(0);
    } else {
      alert("Please choose covers");
    }
  };
  // Pending work do first this delete booking btn
  let deleteBooking = () => {};
  useEffect(() => {
    console.log(DiningRestaurents);
  });
  const handleClose = () => {
    setState({ ...state, open: false });
  };
  // * ui

  let buttons = (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {!state.open ? (
        <Button
          sx={{ backgroundColor: "black" }}
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Book Now
        </Button>
      ) : (
        <Button
          sx={{ backgroundColor: "green", color: "white" }}
          onClick={handleClick({ vertical: "top", horizontal: "center" })}
        >
          Booked
        </Button>
      )}
    </Box>
  );

  // covers funcnality
  let increment = () => {
    setCovers(covers + 1);
  };
  let decrement = () => {
    if (covers > 0) {
      setCovers(covers - 1);
    }
  };
  return (
    <div className="p-1 bg-gray-200 h-180">
      <div className=" py-5 bg-gray-400">
        <h1 className="text-black tracking-wider text-center text-[27px]">
          Restaurent {RestraurentState.name}
        </h1>
        <div className="mt-5">
          {RestraurentState.menu.map((menuName, index) => {
            return (
              <ul className=" flex  flex-col justify-center items-center  my-4" key={index}>
                <li className="tracking-wide text-lg bg-gray-300 w-auto px-2 ">
                  {menuName.name.toLowerCase()}  <span className="text-lg ml-2 underline font-bold">rs.{menuName.price}</span>
                </li>
              </ul>
            );
          })}

          {/* covers */}
          <div className="flex gap-x-2 justify-center pr-3 mt-5">
            <span className="text-black font-mono text-shadow-lg text-lg font-bold ">
              Covers :
            </span>
            <button
              onClick={increment}
              className="border w-6 h-6 rounded-4xl flex justify-center items-center  bg-white text-lg"
            >
              +
            </button>
            <p>{covers}</p>
            <button
              onClick={decrement}
              className="border w-6 h-6 rounded-4xl flex justify-center items-center pb-1 bg-white text-2xl"
            >
              -
            </button>
          </div>
        </div>

        {/* booking btn */}
        <div className=" flex justify-center mt-5">
          <Box sx={{ width: 130 }}>
            {buttons}
            <Snackbar
              anchorOrigin={{ vertical, horizontal }}
              open={open}
              onClose={handleClose}
              message={`Booked Your ${RestraurentState.name} Restaurent `}
              key={vertical + horizontal}
            />
          </Box>
        </div>
        {/* discount details */}
        <div className="text-center  mt-2">
          <span className=" bg-red-300 text-white shadow-lg  px-2 py-1 rounded-lg">
            5 covers get 20% discount
          </span>
        </div>
      </div>
      {/* booked Restaurents */}
      <br />
      <br />

      <h1 className="font-bold text-center text-2xl mt-5">
        Your all Dining Bookings
      </h1>
      <div className="flex gap-x-4 flex-wrap mt-2">
        {DiningRestaurents.map((m) => {
          return m.added ? (
            <div key={m.id} className="border bg-gray-300 rounded-sm shadow-lg text-gray-700 py-2 pl-2 pr-5">
              <h2 className="text-blue-500">{m.name}</h2>
              <p>Ratings {m.rating}</p>
              <p>covers: {m.cover}</p>
              {m.cover >= 5 ? (
                <p className="bg-red-500 text-white px-1 text-shadow-lg">
                  congrates {m.ds}
                </p>
              ) : (
                <p className="bg-green-500 px-1 ">discount max{m.ds}</p>
              )}
              {/* delete booking btn */}
              <div>
                <button className="border bg-black text-white px-2 mt-1">
                  {" "}
                  Delete Booking
                </button>
              </div>
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
}
