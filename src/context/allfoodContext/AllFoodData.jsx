import React, { useEffect, useState } from "react";
import UserContext from "./createContext";
import restaurants from "../../data/Data";

let AllFood = ({ children }) => {
  let [AllzamatoData, setData] = useState([]);

  let demoData = [];
  useEffect(() => {
    restaurants.map((items, _) => {
      if (!items) {
        console.log("data not found");
      }
      demoData.push(items);
    });

    setData(demoData);
  }, []);

  return <UserContext value={AllzamatoData}>{children}</UserContext>;
};
export default AllFood;
