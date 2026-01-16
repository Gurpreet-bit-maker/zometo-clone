import { useNavigate, useLocation } from "react-router-dom";
import CartContext from "../../context/CartsContext/CartCreateContext";
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

  let _12HoursClock = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hours12: true,
  };

  let time = new Date().toLocaleString("en-US", _12HoursClock);
  let todayDate = Date().slice(4, 15).split(" ").join("-");
  // console.log(todayDate);
  // console.log(time);

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
                bookingTime: time,
                bookingDate: todayDate,
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
  // datebotton event
  let dataBtn = (e) => {
    e.stopPropagation();
    console.log(e.target.innerText);
  };
  // timing event
  let [clickedTime, settimeColor] = useState(null);
  let timingBtn = (e) => {
    settimeColor(e.target.innerText);
    e.stopPropagation();
    console.log(e.target.innerText);
  };

  useEffect(() => {
    console.log(clickedTime);
  });
  return (
    <div className="p-1  h-180">
      <div className=" py-5 ">
        <div className="relative flex flex-col justify-center items-center">
          <img className="w-90" src="/RestroImg/restaurant.png" alt="" />
          <h1 className="absolute text-white bottom-2 left-10 text-black tracking-wider text-center text-[27px]">
            {RestraurentState.name}
          </h1>
        </div>
        {/* days booking */}
        <h2 className="ml-2">Date</h2>
        <div className="flex gap-x-5 pl-5 pt-2 ">
          <div
            onClick={(e) => dataBtn(e)}
            className="border-1 border-black px-8 py-1 rounded-lg bg-[#F2AC06] text-white "
          >
            jan mon 5
          </div>
          <div
            onClick={(e) => dataBtn(e)}
            className="border-1 border-black px-8 py-1 rounded-lg bg-[#F2AC06] text-white "
          >
            jan tue 6
          </div>
          <div
            onClick={(e) => dataBtn(e)}
            className="border-1 border-black px-8 py-1 rounded-lg bg-[#F2AC06] text-white "
          >
            jan wed 7
          </div>
        </div>

        {/* timing */}
        <br />
        <h2 className="ml-2">Timing</h2>

        <div className="flex flex-wrap justify-center gap-x-2 gap-y-2 pt-1 pb-5 shadow-lg ">
          {/* <div
            onClick={(e) => timingBtn(e)}
            
          >
            11am to 12pm
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            12pm to 1px
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            1pm to 2pm
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            2pm to 3pm
          </div>
          <div className="border px-2 py-1 rounded-sm bg-black text-white w-20 shadow-lg">
            BREAK TIME
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            6pm to 7pm
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            7pm to 8pm
          </div>
          <div
            onClick={(e) => timingBtn(e)}
            className="border px-2 py-1 rounded-sm bg-blue-500 text-white w-20 shadow-lg"
          >
            8pm to 9pm
          </div> */}

          {[
            "11am to 12pm",
            "12pm to 1pm",
            "1pm to 2pm",
            "2pm to 3pm",
            "BREAK TIME",
            "6pm to 7pm",
            "7pm to 8pm",
            "8pm to 9pm",
          ].map((day, i) => {
            return (
              <div key={i}>
                <button
                  onClick={(e) => timingBtn(e)}
                  className={`px-2 py-1 rounded-sm text-black w-20 shadow-lg border ${
                    clickedTime == day ? "bg-blue-500 text-white font-bold" : "bg-white"
                  }`}
                >
                  {day}
                </button>
              </div>
            );
          })}
        </div>

        {/* covers */}
        <div className="flex gap-x-2 justify-around border pr-3 mt-5">
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
        {/* 
        <div className="mt-5">
          {RestraurentState.menu.map((menuName, index) => {
            return (
              <ul
                className=" flex  flex-col justify-center items-center  my-4"
                key={index}
              >
                <li className="tracking-wide text-lg bg-gray-300 w-auto px-2 ">
                  {menuName.name.toLowerCase()}{" "}
                  <span className="text-lg ml-2 underline font-bold">
                    rs.{menuName.price}
                  </span>
                </li>
              </ul>
            );
          })}
        </div> */}

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

      <div className="flex gap-x-4 flex-wrap mt-2"></div>
    </div>
  );
}
