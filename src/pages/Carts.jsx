import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CartContext from "../context/CartsContext/CartCreateContext";

export default function Carts() {
  let {cartsItems} = useContext(CartContext);

  useEffect(() => {
    console.log(cartsItems);
  }, [cartsItems]);

  let [cartCounts, setCartCounts] = useState(0);
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  return (
    <NavLink
      to="/CartsItems"
      className={({ isActive }) => (isActive ? "bg-red-300" : null)}
    >
      <div className="relative">
        <CartBadge
          badgeContent={cartsItems.length}
          color="primary"
          sx={{
            width: { xs: 2 },
            border: 2,
            marginRight: 4,
            position: "absolute",
            top: 6,
            left: 20,
          }}
          overlap="circular"
        />
        <i className="fa-solid fa-cart-shopping text-lg "></i>

        {/* pending work */}
      </div>
    </NavLink>
  );
}
