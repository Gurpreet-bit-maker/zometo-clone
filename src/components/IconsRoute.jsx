import Stack from "@mui/material/Stack";
import SvgIcon from "@mui/material/SvgIcon";
import { Link } from "react-router-dom";
import CartContext from "../context/CartsContext/CartCreateContext";
import { useContext, useState } from "react";



function HomeIcon(props) {
  
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  
 
}
export default function IconsRoute() {
  let { onlineOrders, setO_Res } = useContext(CartContext);

  let ordered = onlineOrders.flatMap((e) => {
    return e.menu.filter((m) => m.added);
  });
  console.log(ordered.length);
  console.log(ordered);

  return (
    <div className="fixed bottom-12 left-35 border pr-2 rounded-lg flex gap-x-5">
      <Link to="/">
        
        <Stack>
          <HomeIcon color="primary" sx={{ fontSize: "60px" }} />
        </Stack>
      </Link>

      <Link to="/ordered">
        <div className="relative pt-1">
          <img className="w-14 h-13 " src="/public/icons/ordernew.png" alt="" />
          <div className="absolute top-[-5px] right-1 bg-red-500 px-2 rounded-lg">
            {ordered.length <= 0 ? null : ordered.length}
          </div>
        </div>
      </Link>
    </div>
  );
}
