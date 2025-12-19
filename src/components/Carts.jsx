import { styled } from "@mui/material/styles";
import Badge, { badgeClasses } from "@mui/material/Badge";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Carts() {
  let [cartCounts, setCartCounts] = useState(9);

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
          badgeContent={cartCounts}
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
