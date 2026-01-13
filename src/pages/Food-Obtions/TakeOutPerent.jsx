import { useContext } from "react";
import CartContext from "../../context/CartsContext/CartCreateContext";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function TakeOutPerent() {
  let { onlineOrders, setO_Res } = useContext(CartContext);
  //   console.log(onlineOrders);

  return (
    <div className="h-440">
      <h1 className="text-center text-2xl tracking-wider mb-2">
        Online Orders
      </h1>
      <div className="flex flex-col justify-center items-center">
        {onlineOrders.map((item, index) => {
          return (
            <div
              className="rounded-lg w-80 mt-4 py-4 flex flex-col  justify-center items-center shadow-lg"
              key={index}
            >
              <img className="w-70 h-60 rounded-2xl" src={item.image} alt="" />
              <h1 className="mb-2 text-[1.4rem]">{item.name}</h1>
              <Stack spacing={1}>
                <div className="flex">
                  <p className="bg-green-600 px-2 rounded-lg text-white">{item.rating}</p>
                  <Rating
                    name="half-rating-read"
                    defaultValue={item.rating}
                    precision={0.5}
                    readOnly
                  />
                </div>
              </Stack>

              <Link to="/menuItems" state={item}>
                <button className="border bg-blue-400 py-2 px-4 mt-2 text-[16px] text-shadow-lg tracking-wider rounded-sm text-white">
                  Orders
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
