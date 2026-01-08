import { useNavigate, useLocation } from "react-router-dom";
import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext } from "react";

export default function DiningPage() {
  let { DiningRestaurents, setD_Res } = useContext(CartContext);
  let result = useLocation();
  //! iss data ko dummy data for conditiona check k liye rkhengay.
  let stateItem = result.state;

  let RestraurentName = stateItem.name;

  console.log(stateItem);
  console.log(RestraurentName);

  return (
    <div>
      <h1>dining page here</h1>
      {}
    </div>
  );
}
