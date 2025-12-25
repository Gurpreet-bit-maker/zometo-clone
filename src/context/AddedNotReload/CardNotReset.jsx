import React from "react";
import resetnotCard from "./resetnot";
import { useState } from "react";
let Menu_CardNotReset = ({ children }) => {
  // * this state in perent for added and not added should not be reset, (unmount)
  let [added, setAdded] = useState(false);
  let [MenuToggle, setToggle] = useState(false);

  return (
    <resetnotCard.Provider value={{ added, setAdded ,MenuToggle, setToggle}}>
      {children}
    </resetnotCard.Provider>
  );
};

export default Menu_CardNotReset;
