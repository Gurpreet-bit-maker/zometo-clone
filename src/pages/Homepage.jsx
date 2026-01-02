import { useContext, useEffect, useState } from "react";
import UserContext from "../context//allfoodContext/createContext";
import { Link } from "react-router-dom";
import MenuBtn from "../components/MenuBtn";

export default function Homepage() {
  //* Home page context data
  let data = useContext(UserContext);
  console.log(data);

  let [userData, setUserData] = useState([]);

  // * Catogiry booking
  let [takeOut, setTake] = useState([]);
  let [dining, setDining] = useState([]);
  let [bookTable, setBookTable] = useState([]);

  //   Restaurant img

  return (
    <div>
      <h1 className="text-[2.2rem] text-center">Restaurants</h1>

      <div className=" flex  flex-col items-center">
        {/*//* Catogiry */}
        <div className="flex gap-x-2">
          <Link to="/Indining">
            <div className="bg-blue-300 px-2">Dinning</div>
          </Link>
          <Link to="/Booking">
            <div className="bg-blue-300 px-2">Booking</div>
          </Link>
          <Link>
            <div className="bg-blue-300 px-2">Take Out</div>
          </Link>
        </div>
        <br />
        {/*//* All Restaurent */}
        {/* <video
  src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"
  className="object-cover transition-opacity duration-400 overflow-clip pointer-events-none aspect-[1125/1494] w-full opacity-100"
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
></video> */}

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
          <div className="absolute top-133 text-black  px-3 font-bold flex flex-col gap-y-3">
            <h1 className="text-4xl">India’s #1 food delivery app</h1>
            <h3 className="text-[18px] ">
              Experience fast & easy online ordering <br /> on the Zomato app
            </h3>
          </div>
        </div>
        {/* //* text */}
        <div className=" px-5 relative  h-100   flex justify-center gap-y-2 items-center  ">
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

        {data.map((item, index) => {
          return (
            <Link
              to="/RestaurentDetail"
              key={index}
              state={{ item }}
              // isAdded={isAdded}
              // setAdded={setAdded}
            >
              <div className=" border w-80 mt-2 py-5 flex flex-col justify-center items-center">
                <h2 className=" mb-2 text-[1.4rem]">{item.name}</h2>
                <img
                  className="w-60 h-50 rounded-2xl"
                  src={item.image}
                  alt=""
                />
                {/* //! you should use component here for Ratings & btn  */}
                <MenuBtn item={item} />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

//   let [Restaurant, setRestaurantData] = useState([]);
//   useEffect(() => {
//     setRestaurantData(data);
//   },[]);
