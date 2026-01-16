import { useState, useContext, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import userAuthentication from "../context/authentication/authenticationCreate";
import Sign from "./FormAuthentication/Sign";
export default function Homepage() {
  let { loginData, signUpData } = useContext(userAuthentication);
  let result = useLocation();
  let loginstate = result.state;

  // if (loginData.length <= 0 || signUpData.length <= 0) {
  //   alert("please sign up or login first");
  // }

  return (
    <div className="relative">
      {/* booking logo */}

      <div className=" flex  flex-col items-center">
        {/*//* Catogiry */}
        <div className="flex gap-x-2 text-2xl">
          <Link to="/food">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5"
            >
              Dining
            </button>
          </Link>

          <Link to="/take-out">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-base text-lg px-4 py-2.5 text-center leading-5"
            >
              Take Out
            </button>
          </Link>
        </div>
        <br />
        {/* note down this is vedio attributes in react */}
        <div>
          <div className="relative w-full h-full ">
            <video
              src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"
              className=" object-cover transition-opacity duration-400 overflow-clip pointer-events-none aspect-[1125/1494] w-full opacity-80"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
            ></video>
          </div>
          <div className="absolute top-110 text-black  px-3 font-bold flex flex-col gap-y-3">
            <h1 className="text-4xl">India’s #1 food delivery app</h1>
            <h3 className="text-[18px] ">
              Experience fast & easy online ordering <br /> on the Zomato app
            </h3>
          </div>
        </div>
        {/* //* text */}
        <div className=" px-5 relative  h-100 flex justify-center gap-y-2 items-center  ">
          <div className="text-center px-5">
            <h1 className="text-[#EF4F5F] text-2xl">
              Better food for more people
            </h1>
            <h3>
              For over a decade, we’ve enabled our customers to discover new
              tastes, delivered right to their doorstep
            </h3>
          </div>
          <div className=" absolute top-5 right-10 ">
            <img
              className="w-30"
              src="https://b.zmtcdn.com/data/o2_assets/b4f62434088b0ddfa9b370991f58ca601743060218.png"
              alt=""
            />
          </div>
        </div>
        {/* sign up  */}
        <Sign />
        {/* footer */}
        <footer className="bg-black/70 w-full text-center text-white tracking-wider">codewithgurpreet@gmail.com</footer>
      </div>
    </div>
  );
}
