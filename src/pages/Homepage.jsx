import { useContext, useEffect, useState } from "react";
import UserContext from "../context//allfoodContext/createContext";
import { Link } from "react-router-dom";
import MenuBtn from "../components/MenuBtn";

export default function Homepage() {
  //* Home page context data
  let data = useContext(UserContext);
  console.log(data);

  let [userData, setUserData] = useState([]);


  

  // useEffect(() => {
  //  data.map((item) =>
  // {
  //   item.menu.map((el) =>
  //   {
  //     console.log(el.name);

  //   })
  // })
  // });

  // let { userClick, setuserClick } = useContext(UserContext);

  //   Restaurant img

  return (
    <div>
      <h1 className="text-[2.2rem] text-center">Restaurants</h1>

      <div className=" flex  flex-col items-center">
        {data.map((item, index) => {
          return (
            <Link to="/RestaurentDetail" key={index} state={{ item }}>
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
