import CartContext from "../../context/CartsContext/CartCreateContext";
import { useContext } from "react";
export default function DiningBooked() {
  let { DiningRestaurents, setD_Res } = useContext(CartContext);

  
  return (
    <div>
      <h1 className="font-bold text-center text-2xl mt-5">
        Your all Dining Bookings
      </h1>
      {DiningRestaurents.map((m) => {
        return m.added ? (
          <div
            key={m.id}
            className="border bg-gray-300 rounded-sm shadow-lg text-gray-700 py-2 pl-2 pr-5"
          >
            <h2 className="text-blue-500">{m.name}</h2>
            <p>Ratings {m.rating}</p>
            <p>covers: {m.cover}</p>
            {m.cover >= 5 ? (
              <p className="bg-red-500 text-white px-1 text-shadow-lg">
                congrates {m.ds}
              </p>
            ) : (
              <p className="bg-green-500 px-1 ">discount max{m.ds}</p>
            )}
            {/* delete booking btn */}
            <div>
              <button className="border bg-black text-white px-2 mt-1">
                {" "}
                Delete Booking
              </button>
            </div>
          </div>
        ) : null;
      })}
    </div>
  );
}
