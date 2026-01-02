import { useState } from "react";
import FilterVarible from "./filterCreate";

let Filter = ({ children }) => {
  let [filterdResult, setFiterRes] = useState(null);

  return (
    <FilterVarible.Provider
      value={{ filterdResult, setFiterRes }}
    ></FilterVarible.Provider>
  );
};
